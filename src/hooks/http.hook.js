import { useCallback, useState } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
        setLoading(true)

        try {
            let res = await fetch(url, { method, body, headers })
            if (!res.ok) throw new Error('error')
            const data = res.json()
            setLoading(false)

            return data

        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }


    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, error, request, clearError }
}