/**
 * NASA API clients — dipanggil hanya dari server-side (Server Component
 * atau Route Handler), tidak pernah dari client. API key selalu diteruskan
 * sebagai parameter, dibaca dari env var di sisi pemanggil (apps/web).
 */

export { fetchAPOD, NasaApodError } from "./apod";
export { fetchNearEarthObjects, NasaNeoWsError } from "./neows";
