import { config } from 'dotenv';
import fetch from 'node-fetch';

const getRates = async (monetaryUnitSrc: string, monetaryUnitDest: string) => {
  config();
  const ratesByMonetaryUnit = await fetch(
    `${process.env.API_URL}?base=${monetaryUnitSrc}&symbols=${monetaryUnitDest}`
  );
  const { rates } = await ratesByMonetaryUnit.json();
  return Object.entries(rates)[0][1] as number;
};

export default getRates;
