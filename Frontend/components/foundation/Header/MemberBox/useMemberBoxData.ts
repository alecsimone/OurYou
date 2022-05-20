const data = {
  avatar:
    'https://pbs.twimg.com/profile_images/917202644740956160/lMFbGZ-e_400x400.jpg',
  displayName: 'Alec',
  rep: 1,
};

interface memberBoxMemberData {
  displayName: string;
  rep: number;
  avatar: string | null;
}

interface memberBoxData {
  memberData: memberBoxMemberData;
  loading: boolean;
  error:
    | false
    | {
        message: string;
      };
}

const useMemberBoxData = (): memberBoxData => ({
  memberData: data,
  loading: false,
  error: false,
});

export default useMemberBoxData;
