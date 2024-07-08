import React, { useState } from "react";
import "./Playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const Playvideo = ({videoId}) => {
  const [apiData,setApiData] = useState(null);

  const fetchVideoData = async () => {
    
  }

  return (
    <div className="play-video">
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Best channel t learn the React JS web development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            124
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <spam>1M Subscribers</spam>
        </div>
        <button>Subscribed</button>
      </div>
      <div className="vid-description">
        <p>Very easy and learning is always the fun</p>
        <p>Subscribe to stay updated and learn more and more!</p>
        <h4>130 Comments</h4>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>A global computer network that workes with every one to make their ay special with all the love and support we are all here and there to make the days of everyone awesome.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
    
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>A global computer network that workes with every one to make their ay special with all the love and support we are all here and there to make the days of everyone awesome.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
    
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>A global computer network that workes with every one to make their ay special with all the love and support we are all here and there to make the days of everyone awesome.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
    
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>A global computer network that workes with every one to make their ay special with all the love and support we are all here and there to make the days of everyone awesome.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
    
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>A global computer network that workes with every one to make their ay special with all the love and support we are all here and there to make the days of everyone awesome.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
