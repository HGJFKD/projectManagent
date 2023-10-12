import { useState } from "react";

interface LocalStorage {
  key?: string
  value?: string
}

export default function useLocalStotageManagement() {

  const [lecalStorage, setLocalStorage] = useState<LocalStorage | LocalStorage[] | string | null | undefined>((): LocalStorage | LocalStorage[] | string | null | undefined => {

    const itemFromLocalStotage: LocalStorage | LocalStorage[] | string | null | undefined = lecalStorage

    if (!lecalStorage) return null
    else {
      const { value } = lecalStorage
      localStorage.getItem(value)

    }
    return itemFromLocalStotage

  });


  const addItem = (item: LocalStorage) => {
    const { key, value } = item
    setLocalStorage({ key: key, value: value })
    localStorage.setItem(...[key!, JSON.stringify(value!)])
    console.log("addItem:", lecalStorage);
  }

  const getItem = (value: string) => {
    const item = localStorage.getItem(JSON.parse(value))
    if (item) setLocalStorage(item)
    console.log("getItem:", lecalStorage);
  }

  const removeItem = (key: string) => {
    setLocalStorage({})
    localStorage.removeItem(key)
    console.log("removeItem:", lecalStorage);
  }

  return { lecalStorage, addItem, getItem, removeItem }
}
