import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

const CURRENCY_MAP = {
  US: 'USD', CA: 'CAD', GB: 'GBP', AU: 'AUD', NZ: 'NZD',
  JP: 'JPY', SG: 'SGD', DE: 'EUR', FR: 'EUR', IT: 'EUR',
  ES: 'EUR', NL: 'EUR', BE: 'EUR', AT: 'EUR', IE: 'EUR',
  PT: 'EUR', FI: 'EUR', GR: 'EUR', CH: 'CHF', SE: 'SEK',
  NO: 'NOK', DK: 'DKK', PL: 'PLN', CZ: 'CZK', HU: 'HUF'
};

const CURRENCY_SYMBOLS = {
  USD: '$', EUR: '€', GBP: '£', AUD: 'A$', CAD: 'C$',
  JPY: '¥', NZD: 'NZ$', SGD: 'S$', CHF: 'CHF', SEK: 'kr',
  NOK: 'kr', DKK: 'kr', PLN: 'zł', CZK: 'Kč', HUF: 'Ft'
};

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { priceUSD = 88 } = await req.json();

    // Get user's country from IP
    const geoResponse = await fetch('https://ipapi.co/json/');
    const geoData = await geoResponse.json();
    const countryCode = geoData.country_code || 'US';
    const currency = CURRENCY_MAP[countryCode] || 'USD';

    // If already USD, return immediately
    if (currency === 'USD') {
      return Response.json({
        price: priceUSD,
        currency: 'USD',
        symbol: '$',
        countryCode
      });
    }

    // Get forex rates
    const forexResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    const forexData = await forexResponse.json();
    const rate = forexData.rates[currency];

    if (!rate) {
      return Response.json({
        price: priceUSD,
        currency: 'USD',
        symbol: '$',
        countryCode
      });
    }

    // Convert and round to whole number
    const convertedPrice = Math.round(priceUSD * rate);

    return Response.json({
      price: convertedPrice,
      currency,
      symbol: CURRENCY_SYMBOLS[currency] || currency,
      countryCode
    });

  } catch (error) {
    return Response.json({
      price: 88,
      currency: 'USD',
      symbol: '$',
      error: error.message
    }, { status: 200 });
  }
});