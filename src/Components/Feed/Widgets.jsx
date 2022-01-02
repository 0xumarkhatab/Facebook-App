import React from "react";
import "./Widgets.css";
import { Avatar } from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { IconButton } from "@mui/material";
function Widgets() {
  return (
    <div className="widgets">
      <div className="contacts">
        <center>
          {" "}
          <h3>Contacts</h3>
        </center>
        <hr />
        <div className="contact">
          <Avatar
            className="contact__avatar"
            src="https://cdn.wallpapersafari.com/64/7/8XjAq3.png"
          />
          <h3>Numan Saha</h3>
          <IconButton>
            {" "}
            <AddIcCallIcon className="call__avatar" color="success" />
          </IconButton>
        </div>

        <div className="contact">
          <Avatar
            className="contact__avatar"
            src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <h3>Haris Bin Rehan</h3>
          <IconButton>
            {" "}
            <AddIcCallIcon className="call__avatar" color="success" />
          </IconButton>
        </div>

        <div className="contact">
          <Avatar
            className="contact__avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6XSW5wNveTjOxaHG2RL7XQVPlcPNLork3g&usqp=CAU"
          />
          <h3>Sallahddin Awan</h3>
          <IconButton>
            {" "}
            <AddIcCallIcon className="call__avatar" color="success" />
          </IconButton>
        </div>

        <div className="contact">
          <Avatar
            className="contact__avatar"
            src="https://w0.peakpx.com/wallpaper/640/426/HD-wallpaper-hijab-girl-2dreams-gallery-best-islam-islamic-most-wonderful-muslim-simple-stylish-muslim-girls-dp-colour-crush-stylish-girls-status.jpg"
          />
          <h3>Amina Qaiser</h3>
          <IconButton>
            {" "}
            <AddIcCallIcon className="call__avatar" color="success" />
          </IconButton>
        </div>

        <div className="contact">
          <Avatar
            className="contact__avatar"
            src="https://i.pinimg.com/originals/07/76/b1/0776b1b3105586459ccfbf282c4d641b.jpg"
          />
          <h3>Seemal Arif</h3>
          <IconButton>
            {" "}
            <AddIcCallIcon className="call__avatar" color="success" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
