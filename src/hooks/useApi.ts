import { useState, useCallback } from 'react';
import api, { ApiError } from '@/api/middleware';

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: ApiError) => void;
}

export function useApi<T>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(async (
    apiCall: () => Promise<T>,
    options: UseApiOptions<T> = {}
  ) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err as ApiError;
      setError(error);
      options.onError?.(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    error,
    isLoading,
    execute,
    setData,
    setError,
  };
}

// Example usage:
/*
const { data, error, isLoading, execute } = useApi<HoroscopeResponse>();

// In your component:
const fetchHoroscope = async (sign: string) => {
  await execute(
    () => api.horoscope.getDailyHoroscope(sign),
    {
      onSuccess: (data) => {
        console.log('Horoscope fetched:', data);
      },
      onError: (error) => {
        console.error('Error fetching horoscope:', error);
      }
    }
  );
};
*/

export default useApi; 