import { FC, ReactNode } from 'react';
import Header from './Header';
import Meta from './Meta';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  console.log('Layout');
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  );
};

export default Layout;
