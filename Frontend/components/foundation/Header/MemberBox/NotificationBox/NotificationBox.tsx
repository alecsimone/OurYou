import { FC } from 'react';
import FunctionalIcon from '../../../../icons/FunctionalIcon';
import NotificationsIcon from '../../../../icons/Notifications';

interface NotificationBoxProps {}

const NotificationBox: FC<NotificationBoxProps> = () => {
  return (
    <FunctionalIcon
      iconName="notifications"
      titleTextReplacement="Notifications"
    >
      <NotificationsIcon />
    </FunctionalIcon>
  );
};

export default NotificationBox;
