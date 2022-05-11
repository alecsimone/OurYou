import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ColorNames } from '../../styles/styled';

interface FriendsProps {
  color?: ColorNames; //color of the icon, defaults to coolGrey
}

const FriendsIcon: FC<FriendsProps> = ({ color = 'coolGrey' }) => {
  const theme = useContext(ThemeContext);
  const computedColor = theme[color];

  return (
    <>
      <circle
        cx="53.27"
        cy="76.28"
        r="25.16"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit={10}
        strokeWidth={12}
      />
      <path
        d="M6.67,148.88c0-26.02,20.87-47.12,46.61-47.12s46.61,21.09,46.61,47.12"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit={10}
        strokeWidth={12}
      />

      <circle
        cx="146.73"
        cy="76.28"
        r="25.16"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit={10}
        strokeWidth={12}
      />
      <path
        d="M100.12,148.88c0-26.02,20.87-47.12,46.61-47.12s46.61,21.09,46.61,47.12"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit={10}
        strokeWidth={12}
      />
    </>
  );
};

export default FriendsIcon;
