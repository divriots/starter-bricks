import * as React from 'react';
import { LoadingButton } from '@mui/lab';
import { Box } from '~/box';
import { FormControlLabel } from '@mui/material';
import { Switch } from '~/switch';
import { Save as SaveIcon } from '@mui/icons-material';
import { Send as SendIcon } from '@mui/icons-material';

function LoadingButtonsTransition_() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box sx={{ '& > button': { m: 1 } }}>
      <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        variant="outlined"
        disabled
      >
        disabled
      </LoadingButton>
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        loadingIndicator="Loading..."
        variant="outlined"
      >
        Fetch data
      </LoadingButton>
      <LoadingButton
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        Send
      </LoadingButton>
      <LoadingButton
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Save
      </LoadingButton>
    </Box>
  );
}

export const LoadingButtonsTransition = () => <LoadingButtonsTransition_ />;
