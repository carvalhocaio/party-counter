"use client";

import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-03-28T12:00:00-04:00"); // Cuiabá (America/Cuiaba) = UTC-4

function getTimeLeft() {
  const now = Date.now();
  const diff = EVENT_DATE.getTime() - now;

  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      value: time.dias,
      label: "DIAS",
      bg: "bg-surface-container-low",
      text: "text-primary",
      labelText: "text-outline",
      rotate: "-rotate-1",
    },
    {
      value: time.horas,
      label: "HORAS",
      bg: "bg-primary-container",
      text: "text-on-primary-container",
      labelText: "text-on-primary-container",
      rotate: "rotate-2",
    },
    {
      value: time.minutos,
      label: "MINUTOS",
      bg: "bg-surface-container-highest",
      text: "text-primary",
      labelText: "text-outline",
      rotate: "-rotate-2",
    },
    {
      value: time.segundos,
      label: "SEGUNDOS",
      bg: "bg-secondary-container",
      text: "text-on-secondary-container",
      labelText: "text-on-secondary-container",
      rotate: "rotate-1",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`${card.bg} p-8 rounded-xl flex flex-col items-center justify-center ${card.rotate} beer-shadow`}
        >
          <span
            className={`text-5xl md:text-6xl font-headline font-black ${card.text} tabular-nums`}
          >
            {String(card.value).padStart(2, "0")}
          </span>
          <span
            className={`text-xs uppercase tracking-widest font-label font-bold ${card.labelText}`}
          >
            {card.label}
          </span>
        </div>
      ))}
    </div>
  );
}
