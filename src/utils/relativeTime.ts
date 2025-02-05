export const formatRelativeTime = (date: Date) => {
  const rtf = new Intl.RelativeTimeFormat("ko", {
    numeric: "auto",
  });

  const now = new Date();
  const diffInMilliseconds = date.getTime() - now.getTime();
  const diffInSeconds = Math.round(diffInMilliseconds / 1000);
  const diffInMinutes = Math.round(diffInSeconds / 60);
  const diffInHours = Math.round(diffInMinutes / 60);
  const diffInDays = Math.round(diffInHours / 24);
  const diffInMonths = Math.round(diffInDays / 30);
  const diffInYears = Math.round(diffInDays / 365);

  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(diffInSeconds, "second").replace(" ", "");
  } else if (Math.abs(diffInMinutes) < 60) {
    return rtf.format(diffInMinutes, "minute").replace(" ", "");
  } else if (Math.abs(diffInHours) < 24) {
    return rtf.format(diffInHours, "hour").replace(" ", "");
  } else if (Math.abs(diffInDays) < 30) {
    return rtf.format(diffInDays, "day").replace(" ", "");
  } else if (Math.abs(diffInMonths) < 12) {
    return rtf.format(diffInMonths, "month").replace(" ", "");
  } else {
    return rtf.format(diffInYears, "year").replace(" ", "");
  }
};
