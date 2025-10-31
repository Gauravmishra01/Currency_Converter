export const fetchCurrencies = async () => {
    const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json');
    const data = await response.json();
    return data.eur;
  };
  