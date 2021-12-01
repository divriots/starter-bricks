import * as React from 'react';
import { Checkbox } from '~/checkbox';
import { FavoriteBorder } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import { BookmarkBorder as BookmarkBorderIcon } from '@mui/icons-material';
import { Bookmark as BookmarkIcon } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function IconCheckboxes_() {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}

export const IconCheckboxes = () => <IconCheckboxes_ />;
