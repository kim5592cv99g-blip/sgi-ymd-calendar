import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export function getEvents() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "events.xlsx"
  );

  const fileBuffer = fs.readFileSync(filePath);

  const workbook = XLSX.read(
    fileBuffer,
    {
      type: "buffer",
    }
  );

  const sheet =
    workbook.Sheets[
      workbook.SheetNames[0]
    ];

  return XLSX.utils.sheet_to_json(sheet);
}