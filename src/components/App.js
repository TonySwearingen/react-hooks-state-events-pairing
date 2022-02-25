import React from "react";
import video from "../data/video.js";
import Video from "./Video";
import Buttons from "./Buttons";
import Comments from "./Comments";
import Header from "./Header";

function App() {
  
  return (
    <div className="App">
      <Video url={video.embedUrl} />
      <Header Title={video.title} Views={video.views} Date={video.createdAt}/>
      <Buttons ups={video.upvotes} downs={video.downvotes} />
      <Comments />
      {/* <CommentsContainer />*/}
    </div>
  );
}
 
export default App;
