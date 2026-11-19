import { getEvents } from "@/lib/readExcel";

export async function GET() {
  const events = getEvents();

  return Response.json(events);
}