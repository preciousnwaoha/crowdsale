import React, { useRef } from "react";
import { Link as RouterLink} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
// import AdbIcon from "@mui/icons-material/Adb";
// import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import LogoutIcon from "@mui/icons-material/Logout";
// import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import NavDrawer from "./NavDrawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const pages = [
  {
    text: "Home",
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    text: "Roadmap",
    link: "/raodmap",
    icon: <EmojiEventsOutlinedIcon />,
  },
  {
    text: "WhitePaper",
    link: "/leaderboard",
    icon: <LeaderboardOutlinedIcon />,
  },
];

type propTypes = {
  isConnected: boolean;
}

const NavBar = ({isConnected}: propTypes) => {
  const appBarRef = useRef<HTMLDivElement | null>(null)
  const [anchorElUser, setAnchorElUser] =
    React.useState<HTMLDivElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(appBarRef.current as HTMLDivElement);
    // setAnchorElUser(event.currentTarget as HTMLButtonElement);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickedBuy = () => {
    console.log("buy")
  }
  

  return (
    <React.Fragment>
      <AppBar
        sx={{
          position: "relative",
          // border: 1,
        }}
        elevation={2}
        
      >
        <Toolbar
            ref={appBarRef}
          sx={{
            // border: 1,
            // borderColor: "red",
            justifyContent: "space-between",
            px: 1,
          }}
        >

          <Box sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <Box sx={{
          display: {xs: "block", sm: "none"}
            }}>
              <NavDrawer anchor="left" pages={pages} />
            </Box>
          
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontSize: "1.375rem",
              fontWeight: 400,
              textDecoration: "none",
              // color: "inherit",
            }}
          >
            Crowdsale
          </Typography>
          </Box>
            

          <Box sx={{ ml: 2, display: "flex"}}>
            <Box component="ul" sx={{
            listStyle: "none",
            pl: 0,
            display: {xs: "none", sm: "flex"},
            }}>
              {pages.map(page => {
              return <li key={page.link} style={{
                margin: "0 0.5rem",
              }}>
                <RouterLink to={page.link}>{page.text}</RouterLink>
              </li>
              })}
            </Box>
            <Button onClick={handleClickedBuy}>
              Buy
            </Button>
            {(!!isConnected) && <Tooltip title="Open Account">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 1.5, fontSize: "1.25rem" }}
              >
                <AccountBalanceWalletOutlinedIcon />
              </IconButton>
            </Tooltip>}
            
          </Box>
        </Toolbar>
        
      </AppBar>
      <Popover
                id={Boolean(anchorElUser) ? 'account-popover' : undefined}
              open={Boolean(anchorElUser)}
              anchorEl={anchorElUser}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}

              sx={{
                // border: 1,
                // borderColor: "blue",
              }}
              PaperProps={{
                sx: {
                    // border: 1,
                    // borderColor: "blue",
                    width: "calc(100% - 28px)",
                    maxWidth: "400px",
                    minHeight: "400px",
                    m: 0,
                    mt: 1,

                }
              }
              }
            >
              <Box
                
              >
                <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography>
              </Box>
            </Popover>
            
    </React.Fragment>
  );
};

export default NavBar;
