const millisPerDay = 24 * 60 * 60 * 1000;

export function daysUntilChristmas(Today) {
  const christmasDay = new Date(Today.getFullYear(), 12 - 1, 25);
  if (Today.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(Today.getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - Today.getTime();
  return Math.floor(diffMillis / millisPerDay);
}
