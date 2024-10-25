"use client";
import React, { useEffect, useState } from "react";

interface IQuote {
  quote: string;
  client: string;
  year: number;
}

export interface IQuoteCarouselProps {
  quotes: IQuote[];
}

export default function QuoteCarousel({
  quotes,
}: IQuoteCarouselProps): React.ReactElement {
  const [activeQuote, setActiveQuote] = useState<IQuote | null>(null);

  useEffect(() => {
    const switchQuote = () => {
      const newIdx = Math.floor(Math.random() * quotes.length);
      setActiveQuote(quotes[newIdx]);
    };

    const iv = setInterval(switchQuote, 10e3);
    switchQuote();

    return () => {
      clearInterval(iv);
    };
  }, [quotes]);

  return (
    <div className="flex flex-col items-center p-4 sm:p-8">
      <blockquote
        className="flex flex-col justify-center"
        data-testid="testimonial-quote"
      >
        <q
          className="relative h-56 max-w-[24em] rounded-tr-2xl bg-green-200 p-12 pb-16 text-xl before:content-none sm:h-48 sm:text-3xl"
          data-testid="testimonial-quote-content"
        >
          <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/4 text-8xl text-green-900">
            "
          </span>
          {activeQuote?.quote}
          <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/4 rotate-180 text-8xl text-green-900">
            "
          </span>
        </q>
        <cite
          className="max-w-[24em] -translate-x-3 -translate-y-7 rounded-bl-xl bg-green-900 p-4 text-lg text-green-100 drop-shadow-lg sm:-translate-x-5 sm:text-2xl"
          data-testid="testimonial-quote-author"
        >
          {activeQuote?.client},{" "}
          <span className="font-semibold text-green-100/80">
            {activeQuote?.year}
          </span>
        </cite>
      </blockquote>
    </div>
  );
}
