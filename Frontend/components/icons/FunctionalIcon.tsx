import { MouseEventHandler, ReactNode } from 'react';
import SVG from '../../styles/extendableElements/svg';

interface FunctionalIconProps {
  iconName: string; // Will be used for className and title text (unless titleTextReplacement provided)
  extraClass?: string; // Added to the className after the iconName
  titleTextReplacement?: string; // Replaces the iconName as the title text for the SVG
  onClick?: MouseEventHandler<SVGSVGElement>; // Handler for the SVG onClick event
  children: ReactNode; // The actual icon you want to render
}

const FunctionalIcon = ({
  iconName,
  onClick,
  extraClass,
  titleTextReplacement,
  children,
}: FunctionalIconProps): JSX.Element => {
  const capitalizedName = `${iconName.charAt(0).toUpperCase()}${iconName.slice(
    1
  )}`;

  return (
    <SVG
      className={extraClass == null ? iconName : `${iconName} ${extraClass}`}
      viewBox="0 0 200 200"
      onClick={(e) => {
        if (onClick != null) {
          onClick(e);
        }
      }}
    >
      <title>
        {titleTextReplacement == null ? capitalizedName : titleTextReplacement}
      </title>
      {children}
    </SVG>
  );
};

export default FunctionalIcon;
