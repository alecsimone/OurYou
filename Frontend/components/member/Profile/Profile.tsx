import ProfileBody from './ProfileBody';
import ProfileSidebar from './ProfileSidebar';
import StyledProfile from './StyledProfile';

interface ProfileProps {
  memberID: string | undefined;
  editable: boolean;
}

const Profile = ({ memberID, editable }: ProfileProps): JSX.Element => (
  <StyledProfile>
    <ProfileBody />
    <ProfileSidebar
      memberID={memberID}
      editable={editable}
    />
  </StyledProfile>
);

export default Profile;
