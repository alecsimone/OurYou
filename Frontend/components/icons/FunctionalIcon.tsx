import { FC, MouseEventHandler, ReactNode } from 'react';
import SVG from '../../styles/extendableElements/svg';

interface FunctionalIconProps {
  iconName: String,
  extraClass?: string,
  titleTextReplacement?: string,
  onClick?: MouseEventHandler<SVGSVGElement>,
  children: ReactNode,
}

const FunctionalIcon: FC<FunctionalIconProps> = ({
  iconName, onClick, extraClass, titleTextReplacement, children,
}) => (
  <SVG
    className={extraClass == null ? iconName : `${iconName} ${extraClass}`}
    viewBox="0 0 200 200"
    onClick={(e) => {
      if (onClick != null) {
        onClick(e);
      }
    }}
  >
    <title>{titleTextReplacement == null ? 'iconName' : titleTextReplacement}</title>
    {children}
  </SVG>
);

export default FunctionalIcon;
