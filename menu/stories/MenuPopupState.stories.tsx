import * as React from 'react';
import { Button } from '~/button';
import { Menu } from '~/menu';
import { MenuItem } from '~/menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function MenuPopupState_() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export const MenuPopupState = () => <MenuPopupState_ />;
