import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ColorNames } from '../../styles/styled';

interface CollectionProps {
  color?: ColorNames; //color of the icon, defaults to coolGrey
}

const CollectionIcon: FC<CollectionProps> = ({ color = 'coolGrey' }) => {
  const theme = useContext(ThemeContext);
  const computedColor = theme[color];

  return (
    <>
      <path
        d="M98.8,142.6l-50.4-23.3l-37.1,17.3c-0.4,0.2-0.6,0.6-0.4,1c0.1,0.2,0.2,0.3,0.4,0.4l87.5,40.4c0.2,0.1,0.5,0.1,0.8,0l89.2-40.4c0.4-0.2,0.6-0.6,0.4-1c-0.1-0.2-0.2-0.3-0.4-0.4l-37.5-17.5l-51.7,23.4C99.3,142.7,99,142.7,98.8,142.6z"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit="10"
        strokeWidth="18"
      />
      <path
        d="M188.7,100.7l-37.5-17.5l-51.7,23.4c-0.2,0.1-0.5,0.1-0.8,0L48.4,83.4l-37.1,17.3c-0.4,0.2-0.6,0.6-0.4,1c0.1,0.2,0.2,0.3,0.4,0.4l37.1,17.1l50.4,23.2c0.2,0.1,0.5,0.1,0.8,0l51.8-23.4l37.5-17c0.4-0.2,0.6-0.6,0.4-1C189.1,101,188.9,100.8,188.7,100.7z"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit="10"
        strokeWidth="18"
      />
      <path
        d="M98.8,106.7c0.2,0.1,0.5,0.1,0.8,0l51.7-23.4l37.5-17c0.4-0.2,0.6-0.6,0.4-1c-0.1-0.2-0.2-0.3-0.4-0.4l-88.3-41.2c-0.2-0.1-0.5-0.1-0.8,0L11.3,64.9c-0.4,0.2-0.6,0.6-0.4,1c0.1,0.2,0.2,0.3,0.4,0.4l37.1,17.1L98.8,106.7z"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit="10"
        strokeWidth="18"
      />
    </>
  );
};

export default CollectionIcon;
