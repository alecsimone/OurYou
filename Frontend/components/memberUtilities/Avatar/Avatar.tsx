import { FC } from 'react';
import DefaultAvatar from '../../icons/DefaultAvatar';
import FunctionalIcon from '../../icons/FunctionalIcon';
import StyledAvatar, { StyledDefaultAvatar } from './StyledAvatar';

interface AvatarProps {
  avatar?: string | null
}

const Avatar: FC<AvatarProps> = ({ avatar }) => {
  if (avatar == null) {
    return <StyledDefaultAvatar><FunctionalIcon iconName="defaultAvatar" extraClass="avatar noAvatar"><DefaultAvatar /></FunctionalIcon></StyledDefaultAvatar>;
  }
  return <StyledAvatar className="avatar hasAvatar" src={avatar} />;
};

export default Avatar;
