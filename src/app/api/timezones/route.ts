import dayjs from '@/shared/config/dayjs';

export async function GET() {
  const timeZones = Intl.supportedValuesOf('timeZone');

  function getTimeZoneOffset(timeZone: string) {
    const now = new Date();
    const dtf = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'short' });
    const parts = dtf.formatToParts(now);

    const timeZoneName = parts.find((part) => part.type === 'timeZoneName')!.value;

    return { timeZone, timeZoneName };
  }

  const timeZonesWithOffsets = timeZones.map(getTimeZoneOffset);

  function getOffsetByTimeZoneName(timeZone: string) {
    const localDate = dayjs().tz(timeZone);

    const offset = localDate.utcOffset() / 60;
    return offset;
  }

  timeZonesWithOffsets.sort((a, b) => {
    const continentA = a.timeZone.split('/')[0];
    const continentB = b.timeZone.split('/')[0];
    if (continentA === continentB) {
      return getOffsetByTimeZoneName(a.timeZone) - getOffsetByTimeZoneName(b.timeZone);
    }
    return 0;
  });

  // timeZonesWithOffsets.sort((a, b) => {
  //   const [continentA, cityA] = a.timeZone.split('/');
  //   const [continentB, cityB] = b.timeZone.split('/');
  //   const offsetA = getOffsetByTimeZoneName(a.timeZone);
  //   const offsetB = getOffsetByTimeZoneName(b.timeZone);

  //   if (continentA === continentB) {
  //     if (offsetA === offsetB) {
  //       return cityA.localeCompare(cityB);
  //     }
  //     return offsetA - offsetB;
  //   }
  //   return continentA.localeCompare(continentB);
  // });

  return Response.json({ data: timeZonesWithOffsets });
}
