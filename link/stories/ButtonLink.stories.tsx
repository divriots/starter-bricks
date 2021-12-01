/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Link } from '~/link';

function ButtonLink_() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Button Link
    </Link>
  );
}

export const ButtonLink = () => <ButtonLink_ />;
