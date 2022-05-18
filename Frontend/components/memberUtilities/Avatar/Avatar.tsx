import DefaultAvatar from '@icons/DefaultAvatar';
import FunctionalIcon from '@icons/FunctionalIcon';
import StyledAvatar, { StyledDefaultAvatar } from './StyledAvatar';

interface AvatarProps {
  avatar?: string | null;
  onTrigger?: () => void;
}

const Avatar = ({ avatar, onTrigger }: AvatarProps): JSX.Element => {
  if (avatar == null) {
    return (
      <StyledDefaultAvatar>
        <FunctionalIcon
          iconName="defaultAvatar"
          extraClass="avatar noAvatar"
          onTrigger={onTrigger}
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
      onClick={onTrigger}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onTrigger != null) {
          onTrigger();
        }
      }}
    />
  );
};

export default Avatar;
