/* eslint-disable react/jsx-key */
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../store/slices/Slice";
import Boxe from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import User from "./User";

import {
  InputBase,
  Link,
  NavbarContainer,
  Search,
  SearchIconWrapper,
} from "./style";
import { useState } from "react";
import { IconButton, useMediaQuery } from "@mui/material";

function Headers() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    left: false,
  });
  const isMobile = useMediaQuery("(max-width:700px)");

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
        {["Advertise", "Blog", "Unsplash", "Submit a photo"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Boxe>
  );

  return (
    <div>
      <NavbarContainer>
        <div style={{ display: "flex", justifyContent: "start" }}>
          {isMobile ? (
            <IconButton onClick={toggleDrawer("left", true)}>
              <MenuIcon />
            </IconButton>
          ) : null}
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
        </div>
        {isMobile ? (
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        ) : (
          // Desktop view code
          <>
            <Link>Advertise</Link>
            <Link>Blog</Link>
            <Link active>Unsplash +</Link>
            <Link>Submit a photo</Link>
          </>
        )}
        <User />
      </NavbarContainer>
    </div>
  );
}

export default Headers;
