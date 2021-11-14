import React, { createContext, FC } from 'react';
import { useCompoundContext } from '../utils/useCompoundContext';
import { Main, Nav } from '../elements';

const LayoutContext = createContext<string | null>(null);
LayoutContext.displayName = 'Layout';

const NavComponent: FC = ({ children }) => {
  useCompoundContext(LayoutContext);
  return (
    <Nav className={'m-4 border-solid border-4 border-light-blue-500'}>
      {children}
    </Nav>
  );
};

const MainComponent: FC = ({ children }) => {
  useCompoundContext(LayoutContext);
  return <Main>{children}</Main>;
};

const BaseComponent: React.FC = ({ children }) => {
  return (
    <LayoutContext.Provider value={'layout'}>{children}</LayoutContext.Provider>
  );
};

const Layout = Object.assign(BaseComponent, {
  Nav: NavComponent,
  Main: MainComponent,
});

export { Layout };

export default Layout;
