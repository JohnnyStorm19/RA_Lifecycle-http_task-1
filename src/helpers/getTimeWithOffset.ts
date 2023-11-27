export function getTimeWithOffset(offsetTime: string) {
  const now = new Date();
  const localTime = now.getTime();
  const localOffset = now.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;

  const timestamp = utc + 3600000 * Number(offsetTime);

  return new Date(timestamp);
}
