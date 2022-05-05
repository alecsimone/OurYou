export const home: string = process.env.NODE_ENV === 'development'
  ? 'http://localhost:6969'
  : 'https://ouryou.org';
export const homeNoHTTP: string = process.env.NODE_ENV === 'development' ? 'localhost:6969' : 'ouryou.org';
// export const endpoint: string = process.env.NODE_ENV === 'development'
//   ? 'http://localhost:4000'
//   : 'https://playground.ouryou.org';
// export const endpointNoHTTP: string = process.env.NODE_ENV === 'development'
//   ? 'localhost:4000'
//   : 'playground.ouryou.org';
// export const sidebarPerPage: number = 14;
// export const perPage: number = 8;
// export const minimumTranslationDistance: number = 40;
