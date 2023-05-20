import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function PositionedMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const logout = () => {
        props.props.logout();
        handleClose();
    }
    
    const aboutUsModal = () => {
        props.props.openModal('about-us');
        handleClose();
    }

    return (
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
            <MenuItem>
                <Link to={`/users/${props.props.userId}`}>Profile</Link>
            </MenuItem>
            <MenuItem onClick={aboutUsModal}>About Us</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    );
}