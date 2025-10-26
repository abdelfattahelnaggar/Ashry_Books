import { useCallback, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key)
            if (item) {
                return JSON.parse(item)
            } else {
                window.localStorage.setItem(key, JSON.stringify(initialValue))
                return initialValue
            }
        } catch (error) {
            console.log(error)
            window.localStorage.setItem(key, JSON.stringify(initialValue))
            return initialValue
        }
    })

    const setValue = useCallback((value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }, [storedValue, key])
    return [storedValue, setValue] as [T, typeof setValue]
}