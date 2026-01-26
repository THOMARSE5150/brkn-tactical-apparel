import React, { useState, useEffect } from 'react';
import { base44 } from "@/api/base44Client";
import { Loader2 } from 'lucide-react';

export default function PriceDisplay({ baseUSD = 88, className = "" }) {
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await base44.functions.invoke('getLocalizedPrice', { priceUSD: baseUSD });
        setPriceData(response.data);
      } catch (error) {
        setPriceData({ price: baseUSD, currency: 'USD', symbol: '$' });
      } finally {
        setLoading(false);
      }
    };
    fetchPrice();
  }, [baseUSD]);

  if (loading) {
    return (
      <div className={`flex items-baseline gap-3 ${className}`}>
        <Loader2 className="w-8 h-8 text-[#6A6A6A] animate-spin" />
      </div>
    );
  }

  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      <span className="text-4xl font-bold text-white">
        {priceData.symbol}{priceData.price}
      </span>
      <span className="text-[#6A6A6A] text-sm">{priceData.currency}</span>
    </div>
  );
}