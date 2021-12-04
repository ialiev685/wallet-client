const currencyUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

const fetchCurrency = async () => {
     try {
         const response = await fetch(currencyUrl);
        return response.json() 
     } catch (error) {
          throw error;
     }
      
};

export default fetchCurrency;
