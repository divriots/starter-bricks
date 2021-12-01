import * as React from 'react';
import { Check as CheckIcon } from '@mui/icons-material';
import { ToggleButton } from '~/toggle-button';

function StandaloneToggleButton_() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}

export const StandaloneToggleButton = () => <StandaloneToggleButton_ />;
