import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { CiTimer, CiSaveDown2 } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { RiUserShared2Fill, RiMenuUnfoldFill } from "react-icons/ri";
import { BiCommentEdit, BiLinkAlt } from "react-icons/bi";
import {
  MdTimeline,
  MdOutlineSafetyCheck,
  MdModeOfTravel,
} from "react-icons/md";
import { AiOutlineHeart, AiOutlineFlag, AiOutlineStar } from "react-icons/ai";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Playground = () => {
  const [broken, setBroken] = React.useState(false);

  const [hasImage] = React.useState(false);
  const [theme] = React.useState("light");

  // handle on RTL change event

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0 ? hexToRgba(themes[theme].menu.menuContent) : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        height: "100%",
        width: "100px",
      }}
    >
      <Sidebar
        collapsed="true"
        toggled="false"
        onBreakPoint={setBroken}
        breakPoint="md"
        backgroundColor={hexToRgba(
          themes[theme].sidebar.backgroundColor,
          hasImage ? 0.9 : 1
        )}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100px",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div style={{ flex: 0, marginBottom: "32px" }}>
            <div style={{ padding: "0 0px", marginTop: "8px" }}></div>

            <Menu menuItemStyles={menuItemStyles}>
              <FcGoogle className="ms-5" size={"40px"} />

              <SubMenu
                className="mt-4 text-center row"
                style={{ color: "black", alignItems: "center" }}
                icon={<CiSaveDown2 size={"25px"} style={{ color: "black" }} />}
              >
                <MenuItem>
                  {" "}
                  <AiOutlineHeart class size={"20px"} color="black">
                    {" "}
                  </AiOutlineHeart>
                  <span>Favourite</span>{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <MdModeOfTravel size={"20px"} color="black" />
                  Travel Plans
                </MenuItem>
                <MenuItem>
                  {" "}
                  <AiOutlineFlag size={"20px"} color="black" />
                  Want to Go{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <AiOutlineStar size={"20px"} color="black" />
                  Starred Place
                </MenuItem>
              </SubMenu>

              <SubMenu
                className="mt-4"
                icon={<CiTimer size={"25px"} style={{ color: "black" }} />}
              >
                <MenuItem> Matara</MenuItem>
                <MenuItem> Galle</MenuItem>
                <MenuItem> Colombo </MenuItem>
                <MenuItem> Jafna</MenuItem>
              </SubMenu>

              <SubMenu
                className="mt-4"
                icon={
                  <BiCommentEdit size={"25px"} style={{ color: "black" }} />
                }
              ></SubMenu>

              <SubMenu
                className="mt-4"
                icon={
                  <RiUserShared2Fill size={"20px"} style={{ color: "black" }} />
                }
              ></SubMenu>
              <SubMenu
                className="mt-4"
                icon={<MdTimeline size={"25px"} style={{ color: "black" }} />}
              ></SubMenu>
              <SubMenu
                className="mt-4"
                icon={
                  <MdOutlineSafetyCheck
                    size={"25px"}
                    style={{ color: "black" }}
                  />
                }
              ></SubMenu>
              <SubMenu
                className="mt-4"
                icon={<BiLinkAlt size={"25px"} style={{ color: "black" }} />}
              ></SubMenu>
              <SubMenu
                className="mt-4"
                icon={
                  <RiMenuUnfoldFill size={"25px"} style={{ color: "black" }} />
                }
              >
                <MenuItem> Add a Misssing Place</MenuItem>
                <MenuItem> Add your Business</MenuItem>
                <MenuItem>
                  {" "}
                  Edit the Map
                  <hr className="mt-3" />{" "}
                </MenuItem>
                <MenuItem> Tips and tricks </MenuItem>
                <MenuItem> Consumer Information </MenuItem>
                <MenuItem> Search Settings </MenuItem>
              </SubMenu>
            </Menu>

            <div
              style={{
                padding: "0 14px",
                marginBottom: "8px",
                marginTop: "32px",
              }}
            ></div>

            <Menu menuItemStyles={menuItemStyles}></Menu>
          </div>
        </div>
      </Sidebar>

      <main>
        <div style={{ padding: "16px 24px", color: "#44596e" }}>
          <div style={{ marginBottom: "16px" }}>
            {broken && <button className="sb-button">Toggle</button>}
          </div>
          <div style={{ marginBottom: "48px" }}></div>
        </div>
      </main>
    </div>
  );
};
export default Playground;
