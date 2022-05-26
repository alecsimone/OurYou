import { memberBoxMemberData } from './useMemberBoxQuery';
import LoggedInMemberBox from './LoggedInMemberBox';
import LoggedOutMemberBox from './LoggedOutMemberBox';

interface MemberBoxWithDataProps {
  data: memberBoxMemberData;
  toggleThingsSidebar: () => void;
}

const MemberBoxWithData = ({
  data,
  toggleThingsSidebar,
}: MemberBoxWithDataProps): JSX.Element | null => {
  if (data.authenticatedItem) {
    return (
      <LoggedInMemberBox
        memberData={data.authenticatedItem}
        toggleThingsSidebar={toggleThingsSidebar}
      />
    );
  }

  return <LoggedOutMemberBox />;
};

export default MemberBoxWithData;
