import { useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import EditableAvatar from './EditableAvatar';
import PROFILE_SIDEBAR_QUERY from './query';
import StyledProfileSidebar from './StyledProfileSidebar';

interface ProfileSidebarProps {
  memberID: string | undefined;
}

const ProfileSidebar = ({ memberID }: ProfileSidebarProps): JSX.Element => {
  const { data, loading, error } = useQuery(PROFILE_SIDEBAR_QUERY, {
    variables: {
      id: memberID,
    },
  });
  if (data) {
    const memberData = data.getProfileSidebarData;
    const {
      defaultPrivacy,
      displayName,
      email,
      giveableRep,
      rep,
      role,
      twitchName,
      twitterUserName,
    } = memberData;
    return (
      <StyledProfileSidebar className="profileSidebar">
        <EditableAvatar />
        <div>Default Privacy: {defaultPrivacy}</div>
        <div>Display Name: {displayName}</div>
        <div>Role: {role}</div>
        <div>Rep: {rep}</div>
        <div>Giveable Rep: {giveableRep}</div>
        <div>Email: {email}</div>
        <div>Twitch Name: {twitchName || 'Not Connected'}</div>
        <div>Twitter Name: {twitterUserName || 'Not Connected'}</div>
        <div>Friend Requests</div>
      </StyledProfileSidebar>
    );
  }
  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return (
      <StyledProfileSidebar className="profileSidebar">
        Loading member...
      </StyledProfileSidebar>
    );
  }

  return (
    <StyledProfileSidebar className="profileSidebar">
      Unknown error
    </StyledProfileSidebar>
  );
};

export default ProfileSidebar;
