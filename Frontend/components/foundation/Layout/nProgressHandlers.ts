import NProgress from 'nprogress';
import Router from 'next/router';

const handleRouteStart = () => NProgress.start();
const handleRouteDone = () => NProgress.done();

const initNProgress = () => {
  Router.events.on('routeChangeStart', handleRouteStart);
  Router.events.on('routeChangeComplete', handleRouteDone);
  Router.events.on('routeChangeError', handleRouteDone);
};
export { initNProgress };

const cleanupNProgress = () => {
  Router.events.off('routeChangeStart', handleRouteStart);
  Router.events.off('routeChangeComplete', handleRouteDone);
  Router.events.off('routeChangeError', handleRouteDone);
};
export { cleanupNProgress };
