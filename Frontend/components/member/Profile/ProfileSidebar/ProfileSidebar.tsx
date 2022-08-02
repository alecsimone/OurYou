import Error from 'components/foundation/Error';
import AutoSizedTextInput from 'components/foundation/Form/AutoSizedTextInput/AutoSizedTextInput';
import PrivacyDropdown from 'components/foundation/Form/PrivacyDropdown';
import Avatar from 'components/member/Avatar';
import EditableAvatar from './EditableAvatar';
import StyledProfileSidebar from './StyledProfileSidebar';
import useProfileSidebar from './useProfileSidebar';

interface ProfileSidebarProps {
  memberID: string | undefined;
  editable: boolean;
}

const ProfileSidebar = ({
  memberID,
  editable,
}: ProfileSidebarProps): JSX.Element => {
  const [changeDisplayName, changeDefaultPrivacy, { data, loading, error }] =
    useProfileSidebar(memberID);

  if (data) {
    const memberData = data.getProfileSidebarData;
    const {
      id,
      avatar,
      defaultPrivacy,
      displayName,
      email,
      giveableRep,
      rep,
      role,
      twitchName,
      twitterUserName,
    } = memberData;

    const updateDisplayName = (newText: string) =>
      changeDisplayName({
        variables: {
          id,
          newName: newText,
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateMember: {
            __typename: 'Member',
            id,
            displayName: newText,
          },
        },
      });

    const updateDefaultPrivacy = (
      newPrivacy: 'Private' | 'Friends' | 'FriendsOfFriends' | 'Public'
    ) =>
      changeDefaultPrivacy({
        variables: {
          id,
          newPrivacy,
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateMember: {
            __typename: 'Member',
            id,
            defaultPrivacy: newPrivacy,
          },
        },
      });

    return (
      <StyledProfileSidebar className="profileSidebar">
        {editable ? <EditableAvatar /> : <Avatar avatar={avatar} />}
        <div>
          Default Privacy:{' '}
          <PrivacyDropdown
            selectPrivacy={(value) => updateDefaultPrivacy(value)}
            initialValue={defaultPrivacy}
          />{' '}
        </div>
        <div className="profileLine">
          <div className="profileLabel">Display Name:</div>
          <div className="profileValue">
            <AutoSizedTextInput
              text={displayName}
              updateText={updateDisplayName}
            />
          </div>
        </div>
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
