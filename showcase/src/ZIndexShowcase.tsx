import React from 'react';
import { Caption } from '@divriots/dockit-react/caption';
import { useTheme } from '@mui/material/styles';

const Box = ({ caption, zIndex, index }) => (
  <div
    style={{
      height: '6rem',
      minWidth: '8rem',
      marginLeft: `${index * 4 - 8}rem`,
      padding: '1rem',
      marginTop: `-2rem`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #FFF',
      borderRadius: '0.375rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      backgroundColor: '#6366F1',
      zIndex,
    }}
  >
    <Caption text={`${caption}: ${zIndex}`} style={{ color: '#fff' }} />
  </div>
);

export const ZIndexShowcase = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      {Object.entries(theme.zIndex).map(([name, zIndex], i) => (
        <Box key={name} index={i} caption={name} zIndex={zIndex} />
      ))}
    </div>
  );
};
