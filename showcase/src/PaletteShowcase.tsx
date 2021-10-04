import * as React from 'react';
import { useTheme } from '@mui/material/styles';

const styles = {
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  } as React.CSSProperties,

  box: {
    width: '4rem',
    height: '4rem',
    borderRadius: '0.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,

  labelWrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.875rem',
  } as React.CSSProperties,
};

export const PaletteShowcase = () => {
  const theme = useTheme();

  const renderItem = (name: string, value: string | number) => {
    const isColor = typeof value === 'string';

    const boxBackground: React.CSSProperties = isColor
      ? {
          backgroundColor: value,
          boxShadow: `0 25px 50px -12px ${theme.palette.text.disabled}`,
        }
      : {};

    const boxText = isColor ? '' : <h2>{value}</h2>;

    return (
      <div key={name} style={styles.itemWrapper}>
        <div
          style={{
            ...styles.box,
            ...boxBackground,
          }}
        >
          {boxText}
        </div>
        <div style={styles.labelWrapper}>
          <div>{`palette.${name}`}</div>
          <div style={{ color: theme.palette.text.secondary }}>{value}</div>
        </div>
      </div>
    );
  };

  const renderNumeric = (name, value) => (
    <div style={styles.labelWrapper}>
      <div>{`palette.${name}`}</div>
      <h4>{value}</h4>
    </div>
  );

  const renderValue = (name, value) => {
    if (name === 'mode') return renderNumeric(name, value);
    switch (typeof value) {
      case 'object':
        return renderGroup(name, value);
      default:
        return renderItem(name, value);
    }
  };

  const renderGroup = (title, group) =>
    Object.entries(group).map(([name, value]) =>
      renderValue(`${title}.${name}`, value)
    );

  return (
    <>
      {Object.entries(theme.palette).map(([name, value]) => (
        <div key={name}>
          <h2> {name}</h2>

          {renderValue(name, value)}
        </div>
      ))}
    </>
  );
};
