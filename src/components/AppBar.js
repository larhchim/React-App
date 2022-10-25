import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom'

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

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            STAR WARS Full Stack Application 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

              <Link style={{textDecoration: 'none'}}  to="/">
                <Button variant="contained" color="secondary"  sx={{ color: '#fff' }}>
                  Home
                </Button>
              </Link>

              <span id="spacing"></span>
              <Link style={{textDecoration: 'none'}}  to="/Bonus">
                <Button variant="contained" color="secondary" sx={{ color: '#fff' }}>
                  Bonus
                </Button>
              </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}