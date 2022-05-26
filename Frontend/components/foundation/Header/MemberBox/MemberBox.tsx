import Error from 'components/foundation/Error/Error';
import StyledMemberBox from './StyledMemberBox';
import useMemberBoxQuery from './useMemberBoxQuery';
import MemberBoxWithData from './MemberBoxWithData';

interface MemberBoxProps {
  toggleThingsSidebar: () => void;
}

const MemberBox = ({ toggleThingsSidebar }: MemberBoxProps): JSX.Element => {
  const { data, loading, error } = useMemberBoxQuery();

  if (data) {
    return (
      <MemberBoxWithData
        data={data}
        toggleThingsSidebar={toggleThingsSidebar}
      />
    );
  }

  if (loading) {
    return <StyledMemberBox>Authenticating...</StyledMemberBox>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <StyledMemberBox>Unknown Error</StyledMemberBox>;
};

export default MemberBox;
