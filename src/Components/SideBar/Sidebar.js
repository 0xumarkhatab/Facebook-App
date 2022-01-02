import {
  Chat,
  EmojiFlags,
  ExpandMore,
  ExpandMoreOutlined,
  LocalHospital,
  VideoLibrary,
} from "@mui/icons-material";
import Storefront from "@mui/icons-material/Storefront";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import PeopleIcon from "@mui/icons-material/People";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector((state) => state.user);

  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />

      <SidebarRow
        title="Pages"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"}
      />
      <SidebarRow
        title="Friends"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"}
      />
      <SidebarRow
        title="Groups"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"}
      />

      <SidebarRow
        title="Marketplace"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"}
      />
      <SidebarRow
        title="Watch"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"}
      />
      <SidebarRow
        title="Memories"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"}
      />
      <SidebarRow
        title="Saved"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"}
      />
      <SidebarRow
        title="Events"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png"}
      />
      <SidebarRow
        title="Jobs"
        image={"https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/XxEsb0x8INQ.png"}
      />
      <SidebarRow title="See More" Icon={ExpandMore} />
      <hr></hr>
      {/* <SidebarRow title="" image={} /> */}
    </div>
  );
}

export default Sidebar;
