import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useMemberData from './useMemberData';

const useSendLoggedInMembersHome = () => {
  const { id } = useMemberData('id');
  const router = useRouter();

  useEffect(() => {
    if (id) {
      router.push({ pathname: '/' });
    }
  });

  return id != null;
};
export default useSendLoggedInMembersHome;
