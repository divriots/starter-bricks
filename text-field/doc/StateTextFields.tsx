import * as React from 'react';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';

export default function StateTextFields() {
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
      />
    </Box>
  );
}
