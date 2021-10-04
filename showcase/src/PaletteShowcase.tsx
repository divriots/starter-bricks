import * as React from 'react';
import { useTheme } from '@mui/material/styles';

const styles = {
  colorWrapper: {},
  box: {},
  labelWrapper: {},
  colorName: {},
  colorValue: {},
};

export const PaletteShowcase = () => {
  const theme = useTheme();

  const renderColor = (name, value) => (
    <div style={styles.colorWrapper}>
      <div style={styles.box} />
      <div style={styles.labelWrapper}>
        <div style={styles.colorName}>{`palette.${name}`}</div>
        <div style={styles.colorValue}>{value}</div>
      </div>
    </div>
  );

  const renderNumeric = (name, value) => (
    <div>
      <div style={styles.colorName}>{`palette.${name}`}</div>
      <h4>{value}</h4>
    </div>
  );

  const renderValue = (name, value) => {
    if (name === 'mode') return renderNumeric(name, value);
    switch (typeof value) {
      case 'string':
        return renderColor(name, value);
      case 'object':
        return renderGroup(name, value);
      default:
        return renderNumeric(name, value);
    }
  };

  const renderGroup = (title, group) =>
    Object.entries(group).map(([name, value]) =>
      renderValue(`${title}.${name}`, value)
    );

  return (
    <>
      {Object.entries(theme.palette).map(([name, value]) => (
        <>
          <h2> {name}</h2>
          {renderValue(name, value)}
        </>
      ))}
    </>
  );
};
