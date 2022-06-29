import React from 'react';

function Layout(props:React.PropsWithChildren<any>) {
  return (
    <div className='container'>
      {props.children}
    </div>
  );
}

export default Layout;