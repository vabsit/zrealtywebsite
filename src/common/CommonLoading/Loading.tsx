// Loading.tsx
import React from 'react';
import './Loading.scss'; // We'll put your SCSS here
import { useTheme } from '@mui/material/styles';

const Loading = () => {

    const theme = useTheme();

  return (
    <>
  <div
      className="container"
      style={{ '--spinner-color': theme.palette.primary.main } as React.CSSProperties}
    >
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce-1"></div>
        <div className="sk-child sk-bounce-2"></div>
        <div className="sk-child sk-bounce-3"></div>
        <div className="sk-child sk-bounce-4"></div> 
      </div>
    </div>
    </>
   
  );
};

export default Loading;
