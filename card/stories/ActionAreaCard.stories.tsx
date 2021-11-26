import * as React from 'react';
import { Card } from '~/card';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '~/typography';
import { CardActionArea } from '@mui/material';

function ActionAreaCard_() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export const ActionAreaCard = () => <ActionAreaCard_ />;
