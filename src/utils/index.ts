export const getVietnameseDate = (date: Date) => {
  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (currentTimeZone === 'Asia/Saigon' || currentTimeZone === 'Asia/Ho_Chi_Minh') {
    return date.toLocaleString('vi-VN');
  }
  const vietnameseHour = date.setHours(date.getHours() + 7);
  return new Date(vietnameseHour).toLocaleString('vi-VN');
};
