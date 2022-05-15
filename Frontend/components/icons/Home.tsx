import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ColorNames } from '@styles/styled.d';

interface HomeProps {
  color?: ColorNames; // color of the icon, defaults to coolGrey
}

const HomeIcon = ({ color = 'coolGrey' }: HomeProps): JSX.Element => {
  const theme = useContext(ThemeContext);
  const computedColor = theme[color];

  return (
    <path
      d="M185.1,77,102.5,3.64a4.36,4.36,0,0,0-5.78,0L14.11,77h0V199H75.74V147.29a11.94,11.94,0,0,1,11.94-11.93h23.86a11.93,11.93,0,0,1,11.93,11.93V199h61.66V77Z"
      fill={computedColor}
    />
  );
};

export default HomeIcon;
