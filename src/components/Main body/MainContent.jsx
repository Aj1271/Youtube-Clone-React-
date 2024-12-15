import React from "react";
import "./MainContent.css";

// Import images
import A from "../../assets/thumbnails/A.jpg";
import B from "../../assets/thumbnails/B.jpg";
import C from "../../assets/thumbnails/C.jpg";
import D from "../../assets/thumbnails/D.jpg";
import E from "../../assets/thumbnails/E.jpg";
import F from "../../assets/thumbnails/F.jpg";
import G from "../../assets/thumbnails/G.jpg";
import H from "../../assets/thumbnails/H.jpg";
import I from "../../assets/thumbnails/I.jpg";
import J from "../../assets/thumbnails/J.jpg";
import a from "../../assets/channel logo/a.jpg";
import b from "../../assets/channel logo/b.jpg";
import c from "../../assets/channel logo/c.jpg";

const videos = [
  { title: "Mastering React: Build Stunning UIs", thumbnailSrc: A, channelName: "CodeCraft Academy", channelLogo: a },
  { title: "JavaScript Tips and Tricks", thumbnailSrc: B, channelName: "Dev Guru", channelLogo: b },
  { title: "Python for Beginners", thumbnailSrc: C, channelName: "Tech Simplified", channelLogo: c },
  { title: "Top 10 VS Code Extensions", thumbnailSrc: D, channelName: "Code and Beyond", channelLogo: a },
  { title: "Debugging Made Easy", thumbnailSrc: E, channelName: "Bug Hunters", channelLogo: b },
  { title: "AI-Powered Coding: The Future", thumbnailSrc: F, channelName: "AI Coders Hub", channelLogo: a },
  { title: "Advanced CSS Animations", thumbnailSrc: G, channelName: "CSS Wizardry", channelLogo: b },
  { title: "Master Git in 30 Minutes", thumbnailSrc: H, channelName: "Version Control Pro", channelLogo: b },
  { title: "Best Practices for Clean Code", thumbnailSrc: I, channelName: "Clean Coders", channelLogo: a },
  { title: "Freelancing for Developers", thumbnailSrc: J, channelName: "Devpreneur", channelLogo: b },
];

const MainContent = () => {
  return (
    <div className="main-content-container">
      {videos.map((video, index) => (
        <div className="video-card" key={index}>
          <img src={video.thumbnailSrc} alt={video.title} className="thumbnail" />
          <div className="video-info">
            <img src={video.channelLogo} alt={video.channelName} className="channel-logo" />
            <h4 className="video-title">{video.title}</h4>
          </div>
            <p className="channel-name">{video.channelName}</p>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
