import * as React from 'react';
import { Card } from '~/card';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '~/typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function MultiActionAreaCard_() {
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export const MultiActionAreaCard = () => <MultiActionAreaCard_ />;
