import FunctionalIcon from '../../../../icons/FunctionalIcon';
import NotificationsIcon from '../../../../icons/Notifications';

interface NotificationBoxProps {}

const NotificationBox = (): JSX.Element => {
  return (
    <FunctionalIcon iconName="notifications">
      <NotificationsIcon />
    </FunctionalIcon>
  );
};

export default NotificationBox;
