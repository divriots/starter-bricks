import * as React from 'react';
import { styled } from '@mui/material';
import { Box } from '~/box';
import { Rating } from '~/rating';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';
import { Typography } from '~/typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function CustomizedRating_() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? 's' : ''}`
        }
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </Box>
  );
}

export const CustomizedRating = () => <CustomizedRating_ />;
