import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class VideosList extends Component {
  constructor () {
    super()

    this.state = {
      videos: []
    }
  }

  componentDidMount () {
    axios.get('/api/videos').then(response => {
      this.setState({
        videos: response.data
      })
    })
  }

  render () {
    const { videos } = this.state

    return (
      <div className='video-container'>
        {videos.map(video => (
          <div
            className='float-left text-center font-weight-bold p-4'
            to={`/${video.vid}`}
            key={video.vid}
          >
            <Link
              className='align-items-center'
              to={`/${video.vid}`}
              key={video.vid}
            >
              <img src={"https://img.youtube.com/vi/" + video.vid + "/mqdefault.jpg"} />
              <br />
              {video.title}
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default VideosList
