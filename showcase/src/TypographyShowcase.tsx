import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Caption } from '@divriots/dockit-react/caption';

const styles = {
  name: {
    fontSize: '1rem',
  },
  value: {
    fontFamily: 'monospace',
    fontSize: '.875rem',
  },
};

export const TypographyShowcase = ({ typography }) => {
  const theme = useTheme();

  const definitionToStyle = ([name, value]) => ({
    name,
    value,
    style: ['fontFamily', 'fontWeight', 'fontSize'].reduce(
      (styles, styleName) =>
        name.toLowerCase().includes(styleName.toLocaleLowerCase())
          ? { ...styles, [styleName]: value }
          : styles,
      {}
    ),
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Definition</th>
          <th>Sample</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(typography)
          .map(definitionToStyle)
          .map(({ name, value, style }) => (
            <tr key={name}>
              <td>
                <Caption style={styles.name} text={name} />

                <span
                  style={{
                    ...styles.value,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {value}
                </span>
              </td>
              <td>
                <div style={style}>
                  The quick brown fox jumps over the lazy dog.
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
