import * as React from 'react';
import { Rating } from '~/rating';
import { IconContainerProps } from '@mui/material';
import { SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon } from '@mui/icons-material';
import { SentimentDissatisfied as SentimentDissatisfiedIcon } from '@mui/icons-material';
import { SentimentSatisfied as SentimentSatisfiedIcon } from '@mui/icons-material';
import { SentimentSatisfiedAltOutlined as SentimentSatisfiedAltIcon } from '@mui/icons-material';
import { SentimentVerySatisfied as SentimentVerySatisfiedIcon } from '@mui/icons-material';

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function RadioGroupRating_() {
  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
  );
}

export const RadioGroupRating = () => <RadioGroupRating_ />;
