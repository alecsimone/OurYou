import ProfileBody from './ProfileBody';
import ProfileSidebar from './ProfileSidebar';
import StyledProfile from './StyledProfile';

interface ProfileProps {
  memberID: string | undefined;
}

const Profile = ({ memberID }: ProfileProps): JSX.Element => (
  <StyledProfile>
    <ProfileBody />
    <ProfileSidebar memberID={memberID} />
  </StyledProfile>
);

export default Profile;
