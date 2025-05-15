const isClient = typeof window !== 'undefined';

export const getSessionStorage = (key, initialValue) => {
  if (!isClient) return initialValue;

  const stored = sessionStorage.getItem(key);

  return stored ? JSON.parse(stored) : initialValue;
}

export const sessionStorage = (Key, value) => {
    if (!isClient){
         sessionStorage.setItem(Key, JSON.stringify(value));
    }
   
}