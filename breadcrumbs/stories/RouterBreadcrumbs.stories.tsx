import * as React from 'react';
import { Box } from '~/box';
import { List } from '~/list';
import { Link } from '~/link';
import { LinkProps } from '@mui/material';
import { ListItem, ListItemProps } from '@mui/material';
import { Collapse } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Typography } from '~/typography';
import { ExpandLess } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
import { Breadcrumbs } from '~/breadcrumbs';
import { Link as RouterLink, Route, MemoryRouter } from 'react-router-dom';

interface ListItemLinkProps extends ListItemProps {
  to: string;
  open?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
};

function ListItemLink(props: ListItemLinkProps) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItem button component={RouterLink as any} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

function RouterBreadcrumbs_() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split('/').filter((x) => x);

            return (
              <Breadcrumbs aria-label="breadcrumb">
                <LinkRouter underline="hover" color="inherit" to="/">
                  Home
                </LinkRouter>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="text.primary" key={to}>
                      {breadcrumbNameMap[to]}
                    </Typography>
                  ) : (
                    <LinkRouter
                      underline="hover"
                      color="inherit"
                      to={to}
                      key={to}
                    >
                      {breadcrumbNameMap[to]}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
        <Box
          sx={{
            bgcolor: 'background.paper',
            mt: 1,
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <List>
            <ListItemLink to="/inbox" open={open} onClick={handleClick} />
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink sx={{ pl: 4 }} to="/inbox/important" />
              </List>
            </Collapse>
            <ListItemLink to="/trash" />
            <ListItemLink to="/spam" />
          </List>
        </Box>
      </Box>
    </MemoryRouter>
  );
}

export const RouterBreadcrumbs = () => <RouterBreadcrumbs_ />;
