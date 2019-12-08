import React from 'react';
import Flexbox from 'flexbox-react';

export const addDesktopLayout = (Component, style = {}) => {
  const defaultStyle = { width: '100%' }
  const Layout = () => (
    <Flexbox justifyContent="center" style={{...style, ...defaultStyle}}>
      <Flexbox style={{ width: '85%' }}>
        <Component />
      </Flexbox>
    </Flexbox>
  );

  return Layout;
};

export const addMobileLayout = (Component, style = {}) => {
  const defaultStyle = { padding: '0px 25px' }
  const Layout = () => (
    <div style={{...style, ...defaultStyle}}>
      <Component />
    </div>
  );

  return Layout;
};
