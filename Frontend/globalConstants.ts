export const home =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:333'
    : 'https://ouryou.org';
export const homeNoHTTP =
  process.env.NODE_ENV === 'development' ? 'localhost:333' : 'ouryou.org';
export const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/graphql'
    : 'https://playground.ouryou.org';
// export const endpointNoHTTP = process.env.NODE_ENV === 'development'
//   ? 'localhost:4000'
//   : 'playground.ouryou.org';
// export const sidebarPerPage = 14;
// export const perPage = 8;
// export const minimumTranslationDistance = 40;
