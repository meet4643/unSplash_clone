import { Link, useNavigate } from "react-router-dom";
import { Box, Li, Ul } from "./style";
import { setSearch } from "../../../store/slices/Slice";
import { useDispatch } from "react-redux";
import * as React from "react";
import Boxs from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useMediaQuery } from "@mui/material";

function Navbar() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const isMobile = useMediaQuery("(max-width:774px)");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigate = (route, e) => {
    dispatch(setSearch(route));
    console.log(e);
    history(route);
  };

  return (
    <div>
      <Box>
        {isMobile ? null : (
          <Li>
            <Link
              onClick={(e) => dispatch(setSearch(e.target.value))}
              style={{
                color: "black",
                textDecoration: "none",

                alignItems: "center",
              }}
              to="/"
            >
              Editorial
            </Link>
          </Li>
        )}
        <Ul>
          <Boxs
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              width: "100%",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              aria-label="visible arrows tabs example"
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
                width: "90%",
                display: "flex",
              }}
            >
              <Tab
                label="wallpaper"
                onClick={() => handleNavigate("/wallpaper")}
              />
              <Tab
                label="3d renders"
                onClick={() => handleNavigate("/3d-renders")}
              />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Nature" onClick={() => handleNavigate("/nature")} />
              <Tab label="Travel" onClick={() => handleNavigate("/travel")} />
              <Tab
                label="Street photography"
                onClick={() => handleNavigate("/street-photography")}
              />
              <Tab
                label="Film"
                onClick={(e) => handleNavigate("/film", e.target.textcContant)}
              />
              <Tab
                label="Animal"
                onClick={(e) =>
                  handleNavigate("/animal", e.target.textcContant)
                }
              />
              <Tab
                label="Work"
                onClick={(e) => handleNavigate("/work", e.target.textcContant)}
              />
            </Tabs>
          </Boxs>
        </Ul>
      </Box>
    </div>
  );
}

export default Navbar;
