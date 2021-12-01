/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Breadcrumbs } from '~/breadcrumbs';
import { Typography } from '~/typography';
import { Link } from '~/link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function CollapsedBreadcrumbs_() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </div>
  );
}

export const CollapsedBreadcrumbs = () => <CollapsedBreadcrumbs_ />;
