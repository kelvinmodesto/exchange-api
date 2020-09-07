import fetch from 'node-fetch';

const getRates = async (monetaryUnit: string, url: string) => {
  const valuesList = ['GBP', 'BRL', 'JPY', 'EUR', 'USD'];
  const ratesByMonetaryUnit = await fetch(
    `${url}?base=${monetaryUnit}&symbols=${valuesList
      .filter((el) => el.indexOf(monetaryUnit))
      .toLocaleString()}`
  );
  const { rates } = await ratesByMonetaryUnit.json();
  return rates;
};

export default getRates;
