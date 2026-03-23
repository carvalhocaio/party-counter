"use client";

import { useState, useRef, useEffect } from "react";

const EVENT = {
  title: "Pagode da Gabi",
  location: "Rua Brasília - Novo Horizonte, Cuiabá - MT, 78058-695",
  description:
    "Aniversário da Gabi com pagode e cerveja gelada!",
  startDate: "20260328T120000",
  endDate: "20260328T220000",
};

function getGoogleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT.title,
    dates: `${EVENT.startDate}/${EVENT.endDate}`,
    location: EVENT.location,
    details: EVENT.description,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function downloadICS() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Pagode da Gabi//PT",
    "BEGIN:VEVENT",
    `DTSTART:${EVENT.startDate}`,
    `DTEND:${EVENT.endDate}`,
    `SUMMARY:${EVENT.title}`,
    `LOCATION:${EVENT.location.replace(/,/g, "\\,")}`,
    `DESCRIPTION:${EVENT.description.replace(/,/g, "\\,")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "pagode-da-gabi.ics";
  link.click();
  URL.revokeObjectURL(url);
}

export function AddToCalendar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold font-label hover:scale-95 transition-all active:opacity-90 beer-shadow flex items-center gap-2 cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg">
          calendar_add_on
        </span>
        Salvar na Agenda
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-surface-container-lowest rounded-lg beer-shadow overflow-hidden z-50 min-w-[220px]">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-surface-container-low transition-colors font-label font-medium text-on-surface"
            onClick={() => setOpen(false)}
          >
            <span className="material-symbols-outlined text-primary">
              event
            </span>
            Google Agenda
          </a>
          <button
            onClick={() => {
              downloadICS();
              setOpen(false);
            }}
            className="flex items-center gap-3 px-4 py-3 hover:bg-surface-container-low transition-colors font-label font-medium text-on-surface w-full text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-secondary">
              download
            </span>
            Apple / Outlook (.ics)
          </button>
        </div>
      )}
    </div>
  );
}
