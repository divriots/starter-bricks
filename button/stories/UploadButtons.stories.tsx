import * as React from 'react';
import { styled } from '@mui/material';
import { Button } from '~/button';
import { IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Stack } from '~/stack';

const Input = styled('input')({
  display: 'none',
});

function UploadButtons_() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
}

export const UploadButtons = () => <UploadButtons_ />;
