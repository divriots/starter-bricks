import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Caption } from '@divriots/dockit-react/caption';

const styles = {
  sectionItems: {
    display: 'grid',
    gap: '1em',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
  },

  itemWrapper: {
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  } as React.CSSProperties,

  box: {
    width: '4rem',
    height: '4rem',
    minWidth: '4rem',
    minHeight: '4rem',
    borderRadius: '0.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  labelWrapper: {
    marginLeft: '1rem',
    fontSize: '0.875rem',
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,

  label: {
    fontFamily: 'monospace',
  },
};

export const PaletteShowcase = () => {
  const theme = useTheme();

  const renderItem = (name: string, value: string | number) => {
    const isColor = typeof value === 'string';

    const boxBackground: React.CSSProperties = isColor
      ? {
          backgroundColor: value as string,
          boxShadow: `0 25px 50px -12px ${theme.palette.action.hover}`,
        }
      : {};

    const boxText = isColor ? '' : <h3>{value}</h3>;

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
          <Caption text={`palette.${name}`} />
          <span
            style={{ ...styles.label, color: theme.palette.text.secondary }}
          >
            {value}
          </span>
        </div>
      </div>
    );
  };

  const renderValue = (name, value) => {
    if (name === 'mode') return <h5>{value}</h5>;
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

  const isValidForShowcase = (value) =>
    ['object', 'string', 'numeric'].includes(typeof value);

  return (
    <>
      {Object.entries(theme.palette).map(([name, value]) => (
        <div key={name}>
          {isValidForShowcase(value) ? (
            <>
              <h3> {name}</h3>
              <div style={styles.sectionItems}>{renderValue(name, value)}</div>
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
};
