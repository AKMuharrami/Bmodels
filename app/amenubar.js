"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import  Icon  from '@mdi/react';
import {mdiCubeOutline  } from '@mdi/js';
import Link from 'next/link';
const email = 
    <a class="mailtoui" href='mailto: mm.alsharif.54@gmail.com'>الإيميل</a>
const whatsapp = <a href='https://wa.me/96895455338'>الواتسأب</a>
// const twitter = <a href='https://twitter.com/_alistiqamah'>التويتر</a>
const instagram = <a href='https://www.instagram.com/proo.ject_/'>الإنستجرام</a>
const pages = [{
  name:'منتجاتنا', route:'products'}, {name:'عنّي', route:'/about'}];
const settings = [email, whatsapp, instagram];


function AresponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: 'rgb(20, 0, 60)', position:'fixed', zIndex:'1', direction:'rtl'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Icon path={mdiCubeOutline } style={{marginLeft:-10}}size={1} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="cairo"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:'2vw'
            }}
          >
              مشاريع بلندر
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} >
                  <Link href={`${page.route}`}><Button ><Typography textAlign="center" style={{color:'#0b0E13'}}>{page.name}</Typography></Button></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            className='cairo'
            variant="h6"
            noWrap
            component="a"
            href="/"
            style={{marginLeft:'7%'}}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '0rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            مشاريع بلندر
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={`${page.route}`}><Button
              key={page.name}
              sx={{ my: 2, color: 'white', display: 'block' , fontSize:'2.1vh'}}
            >
              {page.name}
            </Button></Link>
            ))}
          </Box>
          <Box>
          {/* <Link href='/'><Button style={{marginLeft:'1vw'}} >ENG</Button></Link> */}
              </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="افتح الحسابات">
                <label className='cairo' style={{cursor: "pointer", fontWeight: 200, fontSize: 13}} onClick={handleOpenUserMenu} >للتواصل </label>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AresponsiveAppBar;