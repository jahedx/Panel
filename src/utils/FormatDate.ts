export function date2PersianDayMonthFormat(date: Date) {
  return Intl.DateTimeFormat('fa', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

export function getMonthName(date: Date) {
  return Intl.DateTimeFormat('fa', {
    month: 'long',
  }).format(new Date(date));
}

export function getDayNumber(date: Date) {
  return Intl.DateTimeFormat('fa', {
    day: 'numeric',
  }).format(new Date(date));
}

export function getNumericJalaliDate() {
  const date = new Date();

  // Format the date in "YYYY/MM/DD" format (numeric only)
  const formattedDate = new Intl.DateTimeFormat('fa-IR-u-nu-latn', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

  return formattedDate; // Example output: "۱۴۰۲/۰۶/۱۹"
}

export function getCurrentDateInfo() {
  const date = new Date();

  // Get individual date components
  const weekday = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Return formatted string
  return `${weekday}, ${month} ${day}, ${year}`;
}

export const formatDate = (date: string | number | undefined) => {
  if (date) {
    const dateStr = date.toString(); // Convert the date to a string
    if (dateStr.length == 10) return dateStr;
    const year = dateStr.slice(0, 4); // Extract the year (first 4 characters)
    const month = dateStr.slice(4, 6); // Extract the month (next 2 characters)
    const day = dateStr.slice(6, 8); // Extract the day (last 2 characters)
    return `${year}/${month}/${day}`; // Combine them with slashes
  }
};

export function dateToNumber(dateStr: string): number {
  // Remove all slashes from the string using replace and convert it to a number
  const numericDateStr = dateStr.replace(/\//g, ''); // Replace all slashes with an empty string
  return Number(numericDateStr); // Convert the resulting string to a number
}

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
