import DefaultAvatar from '@icons/DefaultAvatar';
import FunctionalIcon from '@icons/FunctionalIcon';
import StyledAvatar, { StyledDefaultAvatar } from './StyledAvatar';

interface AvatarProps {
  avatar?: string | null;
  onClick?: () => void;
}

const Avatar = ({ avatar, onClick }: AvatarProps): JSX.Element => {
  if (avatar == null) {
    return (
      <StyledDefaultAvatar>
        <FunctionalIcon
          iconName="defaultAvatar"
          extraClass="avatar noAvatar"
          onClick={onClick}
        >
          <DefaultAvatar />
        </FunctionalIcon>
      </StyledDefaultAvatar>
    );
  }
  return (
    <StyledAvatar
      className="avatar hasAvatar"
      src={avatar}
      alt="avatar"
      onClick={onClick}
    />
  );
};

export default Avatar;
