export const API_URL =
process.env.NODE_ENV === 'production'
  ? 'https://yourdomain.here'
  : 'http://localhost:8080';
// change the production and devlopment URLs here to your server/api url