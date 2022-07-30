export const getVietnameseDate = (date: Date) => {
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const sevenTimeZone = ['Asia/Bangkok', 'Asia/Ho_Chi_Minh', 'Asia/Saigon'];
  if (sevenTimeZone.indexOf(currentTimeZone) > -1) {
    return date.toLocaleString('vi-VN');
  }
  const vietnameseHour = date.setHours(date.getHours() + 7);
  return new Date(vietnameseHour).toLocaleString('vi-VN');
};

export const getCurrentTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
