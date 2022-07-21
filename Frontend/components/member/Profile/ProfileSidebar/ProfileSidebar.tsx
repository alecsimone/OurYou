import { gql, useMutation, useQuery } from '@apollo/client';
import Error from 'components/foundation/Error';
import AutoSizedTextInput from 'components/foundation/Form/AutoSizedTextInput/AutoSizedTextInput';
import Avatar from 'components/member/Avatar';
import EditableAvatar from './EditableAvatar';
import PROFILE_SIDEBAR_QUERY from './query';
import StyledProfileSidebar from './StyledProfileSidebar';

interface ProfileSidebarProps {
  memberID: string | undefined;
  editable: boolean;
}

const CHANGE_DISPLAY_NAME_MUTATION = gql`
  mutation CHANGE_DISPLAY_NAME_MUTATION($id: ID!, $newName: String!) {
    updateMember(where: { id: $id }, data: { displayName: $newName }) {
      __typename
      id
      displayName
    }
  }
`;

const ProfileSidebar = ({
  memberID,
  editable,
}: ProfileSidebarProps): JSX.Element => {
  const { data, loading, error } = useQuery(PROFILE_SIDEBAR_QUERY, {
    variables: {
      id: memberID,
    },
  });

  const [changeDisplayName] = useMutation(CHANGE_DISPLAY_NAME_MUTATION);
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
    return (
      <StyledProfileSidebar className="profileSidebar">
        {editable ? <EditableAvatar /> : <Avatar avatar={avatar} />}
        <div>Default Privacy: {defaultPrivacy}</div>
        <div className="profileLine">
          <div className="profileLabel">Display Name:</div>
          <div className="profileValue">
            <AutoSizedTextInput
              text={displayName}
              updateText={(newText) =>
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
                })
              }
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
