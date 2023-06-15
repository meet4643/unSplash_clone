/* eslint-disable react/jsx-key */
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../store/slices/Slice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Boxe from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  Buttons,
  InputBase,
  Link,
  NavbarContainer,
  Search,
  SearchIconWrapper,
} from "./style";
import { Fragment, useState } from "react";
import { useMediaQuery } from "@mui/material";

function Navbar() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    left: false,
  });
  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Boxe
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Advertise",
          "Blog",
          "Unsplash",
          "Submit a photo",
          <NotificationsIcon fontSize="small" />,
          <AccountCircleIcon fontSize="small" />,
          <MoreVertIcon fontSize="small" />,
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List></List>
    </Boxe>
  );

  return (
    <div>
      <NavbarContainer>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <InputBase
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {isMobile ? (
          ["right"].map((anchor) => (
            <Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </Fragment>
          ))
        ) : (
          <>
            <Link>Advertise</Link>
            <Link>Blog</Link>
            <Link active>Unsplash +</Link>
            <Link>Submit a photo</Link>
            <Buttons>
              <NotificationsIcon fontSize="large" />
            </Buttons>
            <Buttons>
              <AccountCircleIcon fontSize="large" />
            </Buttons>
            <Buttons>
              <MoreVertIcon fontSize="large" />
            </Buttons>
          </>
        )}
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
