const ISO8601WeekToDate = (w, y) => {
  const simple = new Date(y, 0, 1 + (w - 1) * 7);
  const dow = simple.getDay();
  const ISOweekStart = simple;
  if (dow <= 4) {
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  } else {
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  }
  return ISOweekStart;
}

const dateToISO8601Week = (dt) => {
  const tdt = new Date(dt.valueOf());
  const dayn = (dt.getUTCDay() + 6) % 7;
  tdt.setUTCDate(tdt.getUTCDate() - dayn + 3);
  const firstThursday = tdt.valueOf();
  tdt.setUTCMonth(0, 1);
  if (tdt.getUTCDay() !== 4) {
    tdt.setUTCMonth(0, 1 + ((4 - tdt.getUTCDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

export { ISO8601WeekToDate, dateToISO8601Week };