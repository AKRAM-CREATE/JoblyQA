const dateMap = {
  "قبل يوم واحد": "1d",
  "قبل يومين": "2d",
  "قبل ٣ أيام": "3d",
  "قبل ٤ ايام": "4d",
  "قبل ٥ أيام": "5d",
  "قبل ٦ أيام": "6d",
  "قبل ٧ أيام": "7d",
  "قبل ٨ أيام": "8d",
  "قبل ٩ أيام": "9d",
};

const arabicNumbersMap = {
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
};

// Helper to convert Arabic digits to English
function convertArabicNumbers(str) {
  return str.replace(/[٠-٩]/g, (d) => arabicNumbersMap[d] || d);
}

// Helper to parse "قبل X ساعات" (hours)
function parseHours(str) {
  const match = str.match(/قبل\s+([\d٠-٩]+)\s+ساعات/);
  if (match) {
    const hours = convertArabicNumbers(match[1]);
    return `${hours}h`;
  }
  return null;
}

export function getJobPostedTime(postedDateString) {
  if (!postedDateString) return null;
  // Check static translations first (days)
  if (dateMap[postedDateString]) return dateMap[postedDateString];

  // Check for hours
  const hours = parseHours(postedDateString);
  if (hours) return hours;

  // Otherwise handle normal date strings
  const postedDate = new Date(postedDateString);
  const now = new Date();
  const diffInDays = Math.floor((now - postedDate) / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) return "Today";
  if (diffInDays === 1) return "1d";
  if (diffInDays <= 10) return `${diffInDays}d`;
  if (diffInDays <= 30) return "10d";
  return "30d+";
}
