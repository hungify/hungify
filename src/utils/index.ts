import fetch from "cross-fetch";

export const getVietnameseDate = (date: Date) => {
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const sevenTimeZone = ["Asia/Bangkok", "Asia/Ho_Chi_Minh", "Asia/Saigon"];
  if (sevenTimeZone.indexOf(currentTimeZone) > -1) {
    return date.toLocaleString("vi-VN");
  }
  const vietnameseHour = date.setHours(date.getHours() + 7); //Github action timeZone is UTC
  return new Date(vietnameseHour).toLocaleString("vi-VN");
};

export const fetchData = async <T>(url: string): Promise<T> => {
  const data = await fetch(url).then((response) => response.json());
  return data;
};
