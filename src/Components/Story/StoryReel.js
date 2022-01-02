import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import { useSelector } from "react-redux";

function StoryReel() {
  const user = useSelector((state) => state.user);

  return (
    <div className="storyReel">
      <Story
        profileSrc={user.photoURL}
        title="Create Story"
        img={
          "https://cdn.dribbble.com/users/2543315/screenshots/16765731/mt-01_4x.png"
        }
      />
      <Story
        profileSrc="https://cdn.wallpapersafari.com/64/7/8XjAq3.png"
        title="Numan Saha"
        img="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Story
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6XSW5wNveTjOxaHG2RL7XQVPlcPNLork3g&usqp=CAU"
        title="Sallahdin Awan"
        img="https://i.pinimg.com/564x/61/f1/bf/61f1bf6bb91dd1dc445cdf6815b916fc.jpg"
      />

      <Story
        profileSrc="https://i.pinimg.com/originals/07/76/b1/0776b1b3105586459ccfbf282c4d641b.jpg"
        title="Seemal Arif"
        img="https://mitsoftware.com/wp-content/uploads/2021/11/mit-software-virtual-reality.jpg"
      />
      <Story
        profileSrc="https://w0.peakpx.com/wallpaper/640/426/HD-wallpaper-hijab-girl-2dreams-gallery-best-islam-islamic-most-wonderful-muslim-simple-stylish-muslim-girls-dp-colour-crush-stylish-girls-status.jpg"
        title="Amina Qaiser"
        img="https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits-1024x512.jpg"
      />
    </div>
  );
}

export default StoryReel;
