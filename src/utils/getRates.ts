import { config } from 'dotenv';
import fetch from 'node-fetch';

const getRates = async (monetaryUnit: string) => {
  config();
  const valuesList = ['GBP', 'BRL', 'JPY', 'EUR', 'USD'];
  const ratesByMonetaryUnit = await fetch(
    `${
      process.env.API_URL
    }?base=${monetaryUnit}&symbols=${valuesList
      .filter((el) => el.indexOf(monetaryUnit))
      .toLocaleString()}`
  );
  const { rates } = await ratesByMonetaryUnit.json();
  return rates;
};

export default getRates;
