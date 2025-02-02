import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recomended from '../../Components/Recomended/Recomended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId} = useParams();

  return (
    <div className="play-container">
      <Playvideo videoId={videoId}></Playvideo>
      <Recomended categoryId={categoryId}></Recomended>
    </div>
  )
}

export default Video