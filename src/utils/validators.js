export function timeToMinutes(t) {
  const [hh, mm] = t.split(':').map(Number);
  return hh * 60 + mm;
}

export function rangesOverlap(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd;
}

/**
 * r: rdv to check
 * allRdvs: array of rdvs
 * returns true if conflict found (with another rdv different id)
 */
export function checkRdvConflict(r, allRdvs) {
  const duree = Number(r.duree) || 30;
  const dateR = r.date;
  const start = timeToMinutes(r.heure);
  const end = start + duree;

  for (const other of allRdvs) {
    if (!other.id || other.id === r.id) continue;
    if (other.date !== dateR) continue;
    const oStart = timeToMinutes(other.heure);
    const oEnd = oStart + (Number(other.duree) || 30);
    if (rangesOverlap(start, end, oStart, oEnd)) return true;
  }
  return false;
}
