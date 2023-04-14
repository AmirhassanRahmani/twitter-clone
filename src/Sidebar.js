import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"/>
      <SidebarOption active icon={<HomeIcon />} text="Home" />
      <SidebarOption icon={<SearchIcon />} text="Explore" />
      <SidebarOption icon={<NotificationsIcon />} text="Notifications" />
      <SidebarOption icon={<MailOutlineIcon />} text="Messages" />
      <SidebarOption icon={<BookmarkIcon />} text="Bookmarks" />
      <SidebarOption icon={<ListAltIcon />} text="Lists" />
      <SidebarOption icon={<PermIdentityIcon />} text="Profile" />
      <SidebarOption icon={<MoreHorizIcon />} text="More" />

      <Button variant="outline" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
