const storage = window.localStorage

export const getLocalStorage = (key) => {
  return storage.getItem(key)
}

export const setLocalStorage = (key, value) => {
  return storage.setItem(key, value)
}

export const clearLocalStorage = () => {
   storage.clear()
}