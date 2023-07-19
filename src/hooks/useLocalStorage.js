import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const item = localStorage.getItem(key)
    if (item) return JSON.parse(item)
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
