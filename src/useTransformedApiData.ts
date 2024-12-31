import { useState, useEffect } from 'react';

export function useTransformedApiData<T>(fetchData: () => Promise<any>, transformer: (data: any) => T) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await fetchData();
                setData(transformer(response));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [fetchData, transformer]);

    return { data, error, loading };
}
