import * as React from 'react';
import { FormatBold as FormatBoldIcon } from '@mui/icons-material';
import { FormatItalic as FormatItalicIcon } from '@mui/icons-material';
import { FormatUnderlined as FormatUnderlinedIcon } from '@mui/icons-material';
import { FormatColorFill as FormatColorFillIcon } from '@mui/icons-material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { ToggleButton } from '~/toggle-button';
import { ToggleButtonGroup } from '@mui/material';

function ToggleButtonsMultiple_() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export const ToggleButtonsMultiple = () => <ToggleButtonsMultiple_ />;
