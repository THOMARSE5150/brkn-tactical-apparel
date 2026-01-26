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

// Market-specific pricing strategy (confident whole numbers)
const MARKET_PRICES = {
  USD: 75,
  AUD: 75,
  EUR: 99,
  GBP: 105,
  CAD: 85,
  NZD: 95,
  JPY: 8500,
  SGD: 85,
  CHF: 70,
  SEK: 750,
  NOK: 750,
  DKK: 525
};

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { priceUSD = 75 } = await req.json();

    // Get user's country from IP
    const geoResponse = await fetch('https://ipapi.co/json/');
    const geoData = await geoResponse.json();
    const countryCode = geoData.country_code || 'US';
    const currency = CURRENCY_MAP[countryCode] || 'USD';

    // Use market-specific price if available
    const marketPrice = MARKET_PRICES[currency];
    
    if (marketPrice) {
      return Response.json({
        price: marketPrice,
        currency,
        symbol: CURRENCY_SYMBOLS[currency] || currency,
        countryCode
      });
    }

    // Fallback: convert from USD for markets without specific pricing
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

    const convertedPrice = Math.round(priceUSD * rate);

    return Response.json({
      price: convertedPrice,
      currency,
      symbol: CURRENCY_SYMBOLS[currency] || currency,
      countryCode
    });

  } catch (error) {
    return Response.json({
      price: 75,
      currency: 'USD',
      symbol: '$',
      error: error.message
    }, { status: 200 });
  }
});