// Verifica se o código está sendo executado no lado do cliente (navegador)
const isClient = typeof window !== "undefined";

// Função para obter dados do sessionStorage
export const getSessionStorage = (key, initialValue) => {
  // Se não for cliente (executando no servidor), retorna o valor inicial fornecido
  if (!isClient) return initialValue;

  // Tenta pegar o item do sessionStorage com a chave fornecida
  const stored = sessionStorage.getItem(key);

  // Se o item estiver armazenado, retorna o valor parseado, caso contrário, retorna o valor inicial
  return stored ? JSON.parse(stored) : initialValue;
};

// Função para armazenar dados no sessionStorage
export const setSessionStorage = (key, value) => {
  // Se for cliente (executando no navegador)
  if (isClient) {
    // Armazena o valor fornecido no sessionStorage, convertendo para string
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};