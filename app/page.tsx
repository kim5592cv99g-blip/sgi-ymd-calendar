"use client";

import "react-calendar/dist/Calendar.css";
import CalendarView from "../components/CalendarView";

import { useEffect, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] =
  useState<Date | null>(null);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
const filteredEvents =
  selectedDate === null
    ? []
    : events.filter(
        (event) =>
          event.Date ===
          selectedDate
            .toISOString()
            .split("T")[0]
      );

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        台灣SGI男子部活動行事曆
      </h1>
<div className="flex flex-row gap-8 items-start">

  <div className="bg-white rounded-xl shadow p-4">
    <CalendarView
  events={events}
  selectedDate={selectedDate}
  setSelectedDate={setSelectedDate}
/>
  </div>

  <div className="flex-1 bg-white rounded-xl shadow p-4">

    <h2 className="text-2xl font-bold mb-4">
      📅 選取日期活動
      <p className="text-gray-500 mb-4">
 {selectedDate
  ? selectedDate.toLocaleDateString()
  : "請選擇日期"}
</p>
    </h2>

    {events.length === 0 ? (
      <p>載入中...</p>
    ) : (
      filteredEvents.map((event, index) => (
        <div
          key={index}
          className="border-b py-3"
        >
          <div className="font-bold">
            {event.Title}
          </div>

          <div className="text-gray-600">
            {event.Date}
          </div>

          <div className="text-blue-600">
            {event.Category}
          </div>
        </div>
      ))
    )}

  </div>

</div>
    </main>
  );
}