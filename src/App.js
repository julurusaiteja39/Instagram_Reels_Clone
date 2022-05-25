import React from "react";
import './App.css';
import VideoCard from "./VideoCard";

function App() {
  return (
    <div className="app">
      <h1>Hai</h1>
      <div className="app__top">
        <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
          <VideoCard 
            channel='saiteja'
            avatarSrc='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
            song='Test song - ssssangha'
            url='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
            likes={950}
            shares={30}
          />
          <VideoCard 
            
          />
          <VideoCard />
          <VideoCard />
      </div>
    </div>
  );
}

export default App;
