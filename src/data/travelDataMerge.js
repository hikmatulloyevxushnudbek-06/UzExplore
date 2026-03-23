/**
 * travelData.uz bazasiga til patchlarini chuqur qo‘llaydi:
 * shahar: name, description; har bir yodgorlik: title, info (qolgan maydonlar uz dan).
 */
export function mergeTravelLocales(base, patch) {
  if (!patch || typeof patch !== 'object') return base;
  const out = {};
  for (const slug of Object.keys(base)) {
    const b = base[slug];
    const p = patch[slug];
    if (!p) {
      out[slug] = b;
      continue;
    }
    out[slug] = {
      ...b,
      ...p,
      monuments: mergeMonuments(b.monuments, p.monuments),
    };
  }
  return out;
}

function mergeMonuments(baseM, patchM) {
  if (!baseM || !Array.isArray(baseM)) return baseM;
  if (!patchM || !Array.isArray(patchM)) return baseM;
  return baseM.map((m, i) => (patchM[i] ? { ...m, ...patchM[i] } : m));
}
