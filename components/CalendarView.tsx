"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type EventItem = {
  Date: string;
  Title: string;
  Category: string;
};

export default function CalendarView({
  events,
  selectedDate,
  setSelectedDate,
}: {
  events: EventItem[];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}) {
return (
  <Calendar
    value={selectedDate}
    onChange={(value) =>
      setSelectedDate(value as Date)
    }
    tileContent={({ date, view }) => {
        if (view !== "month") return null;

        const hasEvent = events.some(
          (event) =>
            event.Date ===
            date.toISOString().split("T")[0]
        );

        return hasEvent ? (
          <div
            style={{
              textAlign: "center",
              color: "red",
            }}
          >
            ●
          </div>
        ) : null;
      }}
    />
  );
}
