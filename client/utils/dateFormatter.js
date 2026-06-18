export function getRelativeDayName(targetDateString) {
  // Normalize dates to midnight to compare just the days
  const target = new Date(targetDateString);
  target.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate the difference in days
  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Use the built-in relative time formatter
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  // If it's within 1 day, it returns "yesterday", "today", or "tomorrow"
  if (Math.abs(diffDays) <= 1) {
    return rtf.format(diffDays, "day");
  }

  // Fallback to standard format for other dates
  return target.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
export function isOverdue(dueDateString) {
  const dueDate = new Date(dueDateString);
  dueDate.setHours(0, 0, 0, 0); // Strip time components

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Strip time components

  // It is overdue if the due date is strictly in the past
  return dueDate.getTime() < today.getTime();
}

