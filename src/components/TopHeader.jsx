import React from 'react';
import '../assets/css/TopHeader.css';
import Logo from '../assets/images/hiberci-Logo.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useHistory } from "react-router-dom";
import firebase from '../config/firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function MenuAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
const LogOut=()=>{
  firebase
  .auth()
  .signOut()
  .then(() => {
  history.push('/SignIn');
  });
}
  return (
    <div className={classes.root}>
      <AppBar className="AppBar" position="static">
        <Toolbar>
          <IconButton onClick={()=>history.push('/')} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={Logo} className="Logo" alt="" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <div className="menuItem">
                <MenuItem onClick={()=>history.push('/Profile')}>Profile</MenuItem>
                <div className="menuItem-divider"></div>
                <MenuItem onClick={()=>history.push('/MyAccount')}>My account</MenuItem>
                <div className="menuItem-divider"></div>
                <MenuItem onClick={()=>LogOut()}>Log Out</MenuItem>
                </div>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
