import * as React from 'react';
import { Box } from '~/box';
import { Badge } from '~/badge';
import { ButtonGroup } from '~/button-group';
import { Button } from '~/button';
import { Add as AddIcon } from '@mui/icons-material';
import { Remove as RemoveIcon } from '@mui/icons-material';
import { Mail as MailIcon } from '@mui/icons-material';
import { Switch } from '~/switch';
import { FormControlLabel } from '@mui/material';

function BadgeVisibility_() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          sx={{ color: 'text.primary' }}
          control={
            <Switch checked={!invisible} onChange={handleBadgeVisibility} />
          }
          label="Show Badge"
        />
      </div>
    </Box>
  );
}

export const BadgeVisibility = () => <BadgeVisibility_ />;
