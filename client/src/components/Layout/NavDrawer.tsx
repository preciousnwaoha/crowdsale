import * as React from 'react';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
// import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

type anchorType = "left" | "top" | "bottom" | "right"
type propTypes = {
    anchor: anchorType;
    pages: {
        text: string;
        link: string;
        icon: JSX.Element;
    }[];
}

const pagesX = [
    {
        text: "About Crowdsource",
        link: "/about",
        icon: <Diversity1OutlinedIcon />,
      },
      
      {
        text: "Help",
        link: "/help",
        icon: <HelpOutlineOutlinedIcon />,
      },
      
]

export default function NavDrawer({anchor="left", pages }: propTypes) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor: anchorType, open: boolean) => (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    
    setState({ ...state, [anchor]: open });
  };

  const toggleDrawerWithKey = (anchor: anchorType, open: boolean) => (event: React.KeyboardEvent<HTMLDivElement> ) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor: anchorType) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawerWithKey(anchor, false)}
    >
        <Box sx={{
          display: "flex",
          alignItems: "center",
          py: 2,
          px: 2,
            
        }}>
         
          <Typography variant="h4" sx={{
            fontSize: "1.25rem",
            fonWeight: 700,
            m: 0
          }}>
            Crowdsource
          </Typography>
        </Box>
        <Divider />
        <Box sx={{
            overflowY: "scroll",
            // border: 1,
            // borderColor: "red",
            
        }}>
            <Box sx={{
        pt: 1,
        mb: 1,
      }}>
          {pages.map((page) => {
            return <Link key={page.text.replace(" ", "")} href={page.link} style={{
                color: "inherit",
                textDecoration: "none",
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    py: 1.5,

                    "&:hover": {
                      background: "rgba(0,0,0,0.085)"
                    }
                }}>
                    {page.icon}
                    <Typography variant="body2" sx={{
                        ml: 1
                    }}>
                    {page.text}
                    </Typography>
                </Box>
                
                
          </Link>
          })}
          
      </Box>
      <Divider />
      <Box sx={{
        pt: 1
      }}>
          {pagesX.map((pageX) => {
            return <Link key={pageX.text.replace(" ", "")} href={pageX.link} style={{
                color: "inherit",
                textDecoration: "none",
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    py: 1.5,

                    "&:hover": {
                        background: "rgba(0,0,0,0.085)"
                    }
                }}>
                    {pageX.icon}
                    <Typography variant="body2" sx={{
                        ml: 1
                    }}>
                    {pageX.text}
                    </Typography>
                </Box>
                
                
          </Link>
          })}
          
      </Box>
        </Box>
        
    </Box>
  );

  return (
    
        <React.Fragment >
        <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(anchor, true)}
              sx={{
                p: 1.5
              }}
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment >
  );
}