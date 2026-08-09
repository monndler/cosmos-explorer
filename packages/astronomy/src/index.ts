/**
 * Domain logic astronomi: unit formatting & perbandingan objek.
 *
 * Diisi mulai Step 3 (Core Experience) sesuai workflow di brief bagian 29.
 * Semua fungsi di sini murni (tidak bergantung UI/React), supaya bisa dipakai
 * ulang baik di planet detail page maupun nanti di Comparison Tool.
 */

const idLocale = "id-ID";

/** Format kilometer dengan pemisah ribuan, mis. 6779 -> "6.779 km". */
export function formatKm(km: number): string {
  return `${km.toLocaleString(idLocale)} km`;
}

/** Format massa dalam notasi ilmiah, mis. 6.4171e23 -> "6,42 × 10^23 kg". */
export function formatMassKg(kg: number): string {
  const exponent = Math.floor(Math.log10(Math.abs(kg)));
  const mantissa = kg / Math.pow(10, exponent);
  return `${mantissa.toLocaleString(idLocale, { maximumFractionDigits: 2 })} × 10^${exponent} kg`;
}

/** Format gravitasi, mis. 3.72 -> "3,72 m/s²". */
export function formatGravity(ms2: number): string {
  return `${ms2.toLocaleString(idLocale, { maximumFractionDigits: 2 })} m/s²`;
}

/** Format jarak dari Matahari dalam juta km, mis. 227900000 -> "227,9 juta km". */
export function formatDistanceFromSun(km: number): string {
  const millionKm = km / 1_000_000;
  return `${millionKm.toLocaleString(idLocale, { maximumFractionDigits: 1 })} juta km`;
}

/** Format panjang hari dalam jam, mis. 24.6 -> "24,6 jam". */
export function formatDayLength(hours: number): string {
  return `${hours.toLocaleString(idLocale, { maximumFractionDigits: 1 })} jam`;
}

/** Format panjang tahun dalam hari Bumi, mis. 687 -> "687 hari Bumi". */
export function formatYearLength(days: number): string {
  return `${days.toLocaleString(idLocale, { maximumFractionDigits: 0 })} hari Bumi`;
}

/** Format suhu rata-rata, mis. -63 -> "-63°C". */
export function formatTemperature(celsius: number): string {
  return `${celsius.toLocaleString(idLocale, { maximumFractionDigits: 0 })}°C`;
}

/**
 * Rasio nilai `value` terhadap `baseline` (mis. Mars terhadap Bumi).
 * Dipakai untuk visual perbandingan (lingkaran, bar), bukan untuk
 * menampilkan klaim ilmiah baru — hanya turunan dari data yang sudah ada.
 */
export function ratioTo(value: number, baseline: number): number {
  if (baseline === 0) return 0;
  return value / baseline;
}

/** Format rasio sebagai persentase, mis. 0.532 -> "53%". */
export function formatRatioAsPercent(ratio: number): string {
  return `${Math.round(ratio * 100)}%`;
}

/** Format rasio sebagai kelipatan, mis. 1.88 -> "1,88×". */
export function formatRatioAsMultiplier(ratio: number): string {
  return `${ratio.toLocaleString(idLocale, { maximumFractionDigits: 2 })}×`;
}
