import React, { useState, useEffect } from "react";
import StoryReel from "../Story/StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "../Post/Post";
import Widgets from "./Widgets";
import db, { firebaseConfig } from "../../Firebase";
import { getDatabase, ref, query, orderByChild } from "firebase/database";
import { Timestamp } from "@firebase/firestore";
import { CSSTransition } from "react-transition-group";
import {
  doc,
  onSnapshot,
  getDocs,
  getDoc,
  collection,
} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [postsUpdated, setPostsUpdated] = useState(false);

  console.log("In Feed.js ");
  let arr = [];
  useEffect(() => {
    onSnapshot(collection(db, "posts"), (res) => {
      console.log("result from snapshot\n", res);
      res._snapshot.docChanges.map((item, index) => {
        arr.push({
          data: item.doc.data.value.mapValue.fields,
          id: index,
        });
      });

      console.log("\nArr\n", arr);
      let dummy = arr.filter((item) => item);

      function compare(a, b) {
        if (
          new Date(a.data?.timestamp.timestampValue) <
          new Date(b.data?.timestamp.timestampValue)
        ) {
          return 1;
        }
        if (
          new Date(a.data?.timestamp.timestampValue) >
          new Date(b.data?.timestamp.timestampValue)
        ) {
          return -1;
        }
        return 0;
      }

      dummy = dummy.sort(compare);
      //new Date(first.data?.timestamp.timestampValue)
      setPosts(dummy);
    });
  }, []);

  console.log("Posts are \n", posts);

  return (
    <div className="_feed">
      <div>
        <StoryReel />
        <MessageSender />

        <CSSTransition timeout={350}>
          <div className="posts">
            {console.log(posts)}

            {posts &&
              posts.map((post, index) => (
                <Post
                  key={post.id}
                  profileSrc={post?.data?.profileSrc?.stringValue}
                  username={post?.data?.username?.stringValue}
                  image={post?.data?.image?.stringValue}
                  timestamp={post?.data?.timestamp?.timestampValue}
                  message={post?.data?.message?.stringValue}
                />
              ))}

            {/* <Post
            profileSrc="https://scontent.flhe12-1.fna.fbcdn.net/v/t1.6435-9/116435066_2742459089319433_2427910474629330597_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lhE-D4LrQC4AX-nUZAz&tn=dBrz3HPZ3txZLC53&_nc_ht=scontent.flhe12-1.fna&oh=735394ea67b2d825c59ed223e9a971b7&oe=619F3766"
            username="Numan Saha"
            image="https://smartcaro.org/wp-content/uploads/2018/12/lost-co-668059-unsplash-1200x675.jpg"
            timestamp="October 21,2021"
            message="Get it Done !"
          />

          <Post
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/1/10/Zayn_Wiki_%28cropped%29.jpg"
            username="zayn"
            image="https://i.pinimg.com/originals/1f/1d/fe/1f1dfe3fa406541c2f481c1c5cc454c7.jpg"
            timestamp="August 21,2021"
            message="_Icarius Falls_ is Up Now Listen on All Available Platforms!"
          />

          <Post
            profileSrc="https://scontent.flhe12-1.fna.fbcdn.net/v/t1.6435-9/198678103_1544415642395781_7532665033623913322_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=mT7PKTBUAqMAX_R3fnM&_nc_ht=scontent.flhe12-1.fna&oh=34b6ae372cebded8ee2fc9d6e5feff65&oe=619DD391"
            username="Umar Esso"
            image="https://i.pinimg.com/originals/07/76/b1/0776b1b3105586459ccfbf282c4d641b.jpg"
            timestamp="August 21,2020"
            message="Tomorrow May never Come!"
          />

          <Post
            profileSrc="https://scontent.flhe12-1.fna.fbcdn.net/v/t1.6435-9/243037784_1376562302737835_5889715676544437545_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=3walgxW-WD4AX9-g8M8&_nc_ht=scontent.flhe12-1.fna&oh=39282b66fd983f1f39b77681c7f7bcc4&oe=619E7D5E"
            username="Haris Bin Rehan"
            image="https://scontent.flhe12-1.fna.fbcdn.net/v/t1.6435-9/247036073_1393988614328537_3191521452972788901_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=HPgNmBIeucsAX8isLd8&_nc_ht=scontent.flhe12-1.fna&oh=5946b5766daaa5db2090cd86b9c375a9&oe=61A147D8"
            timestamp="August 21,2021"
            message=""
          />
          <Post
            profileSrc="https://w0.peakpx.com/wallpaper/640/426/HD-wallpaper-hijab-girl-2dreams-gallery-best-islam-islamic-most-wonderful-muslim-simple-stylish-muslim-girls-dp-colour-crush-stylish-girls-status.jpg"
            username="Amina Qaiser"
            image="https://i0.wp.com/mvslim.com/wp-content/uploads/2020/05/I-am-near.png?resize=710%2C718"
            timestamp="August 21,2021"
            message="Indeed."
          />

          <Post
            profileSrc="https://i.pinimg.com/originals/07/76/b1/0776b1b3105586459ccfbf282c4d641b.jpg"
            username="Seemal Arif"
            image="https://www.goalcast.com/wp-content/uploads/2021/01/Motivational-quotes-about-success.png"
            timestamp="August 21,2021"
            message="Just Do et Meyn"
          /> */}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Feed;
