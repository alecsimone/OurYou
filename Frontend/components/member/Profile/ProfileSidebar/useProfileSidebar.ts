import { useMutation, useQuery, ApolloError } from '@apollo/client';
import CHANGE_DEFAULT_PRIVACY_MUTATION, {
  changeDefaultPrivacyInterface,
} from './changeDefaultPrivacyMutation';
import CHANGE_DISPLAY_NAME_MUTATION, {
  changeDisplayNameInterface,
} from './changeDisplayNameMutation';
import PROFILE_SIDEBAR_QUERY from './query';

interface useProfileSidebarInterface {
  (memberID: string | undefined): [
    changeDisplayNameInterface,
    changeDefaultPrivacyInterface,
    {
      data: any;
      loading: boolean;
      error: ApolloError | undefined;
    }
  ];
}

const useProfileSidebar: useProfileSidebarInterface = (memberID) => {
  const { data, loading, error } = useQuery(PROFILE_SIDEBAR_QUERY, {
    variables: {
      id: memberID,
    },
  });

  const [changeDisplayName] = useMutation(CHANGE_DISPLAY_NAME_MUTATION);

  const [changeDefaultPrivacy] = useMutation(CHANGE_DEFAULT_PRIVACY_MUTATION);

  return [changeDisplayName, changeDefaultPrivacy, { data, loading, error }];
};

export default useProfileSidebar;
