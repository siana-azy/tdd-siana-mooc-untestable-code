const millisPerDay = 24 * 60 * 60 * 1000;

export function daysUntilChristmas() {
  const now = new Date(); //new date is not testable, we need to inject it as a parameter
  //new Date() is used internally in the function, we can have the current date but cannot test others
  //because we don't have access to the internal date.
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  // Fix: pass today as a parameter to make the function testable
  // so we could replace with like for exemple : daysUntilChristmas(today) instead of daysUntilChristmas()
  const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
  if (today.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(new Date().getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - today.getTime();
  return Math.floor(diffMillis / millisPerDay);
}
