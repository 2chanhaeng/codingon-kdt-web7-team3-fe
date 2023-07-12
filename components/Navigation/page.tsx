import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import FeedIcon from "@mui/icons-material/Feed";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tag from "@mui/icons-material/Tag";
import Sms from "@mui/icons-material/Sms";
import Home from "@mui/icons-material/Home";

const drawerWidth = 200;

export default function ClippedDrawer() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            maxWidth: "200px",
            padding: 0,
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 0,
              }}
            >
              <Link href={"http://localhost:3000/"}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Home />
                </ListItemIcon>
              </Link>

              <Toolbar sx={{ display: "flex", alignItems: "center" }} />

              <Link href={"http://localhost:3000/login"}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: 3,
                  }}
                >
                  <FeedIcon />
                </ListItemIcon>
              </Link>

              <Link href={"http://localhost:3000/profiles"}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: 3,
                  }}
                >
                  <AccountCircleIcon />
                </ListItemIcon>
              </Link>

              <Link href={"http://localhost:3000/tags"}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: 3,
                  }}
                >
                  <Tag />
                </ListItemIcon>
              </Link>

              <Link href={"http://localhost:3000/chats"}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Sms />
                </ListItemIcon>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
