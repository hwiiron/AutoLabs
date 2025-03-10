// 현재 기기 상태 데이터
export const DeviceData = [
  { name: "AutoBot.I", status: "OK", color: "#22c55e" },
  { name: "AutoBot.II", status: "Warning", color: "#facc15" },
  { name: "AutoBot.III", status: "Error", color: "#ef4444" },
];

// 전체 결함률 데이터
export const TotalDefectRateData = [
  { defect: "a", defectFigures: 275, fill: "var(--color-a)" },
  { defect: "b", defectFigures: 200, fill: "var(--color-b)" },
  { defect: "c", defectFigures: 187, fill: "var(--color-c)" },
  { defect: "d", defectFigures: 173, fill: "var(--color-d)" },
  { defect: "e", defectFigures: 90, fill: "var(--color-e)" },
];

// 색상 정밀 검사 결과 데이터
export const ColorInspectionData = [
  { name: "D65", value: 10 },
  { name: "TL84", value: 8 },
  { name: "CWF", value: 3 },
  { name: "UV", value: 5 },
];

// 원단에서 발생한 염색의 결점 위치 데이터
export const InspectionSummaryData = [
  { length: 0, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 10, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 20, listing: 0, ending: 0, skewing: 0, bowing: 1 },
  { length: 30, listing: 0, ending: 0, skewing: 1, bowing: 0 },
  { length: 40, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 50, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 60, listing: 0, ending: 1, skewing: 0, bowing: 0 },
  { length: 70, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 80, listing: 1, ending: 0, skewing: 0, bowing: 0 },
  { length: 90, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 100, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 110, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 120, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 130, listing: 0, ending: 0, skewing: 1, bowing: 0 },
  { length: 140, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 150, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 160, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 170, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 180, listing: 1, ending: 0, skewing: 0, bowing: 0 },
  { length: 190, listing: 0, ending: 0, skewing: 0, bowing: 0 },
  { length: 200, listing: 0, ending: 0, skewing: 0, bowing: 0 },
];
