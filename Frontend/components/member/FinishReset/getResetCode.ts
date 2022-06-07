import { NextRouter } from 'next/router';

const getResetCode = (router: NextRouter) => {
  let { code } = router.query;

  if (typeof code !== 'string') {
    code = 'error';
  }
  return code;
};
export default getResetCode;
