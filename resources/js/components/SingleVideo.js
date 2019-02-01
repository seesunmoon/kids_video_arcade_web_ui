import axios from 'axios'
import React, { Component } from 'react';
import YouTube from 'react-youtube';

class SingleVideo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      video: []
    }
  }

  componentDidMount () {
    const vid = this.props.match.params.vid

    // increase counter for this video
    axios.put(`/api/videos/${vid}`)
  }

  render () {
    const opts = {
      width: '100%',
      height: '1073',
      playerVars: {
        autoplay: 1,
        controls: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
	enablejsapi: 1
      }
    };

    return (
      <div className='video-container black-bg'>
        <YouTube
            videoId={this.props.match.params.vid}
            opts={opts}
            onReady={this._onReady}
            onEnd={this._onEnd}
        />
      </div>
    )
  }

  _onReady(event) {
    event.target.playVideo();

    // TODO: go to full screen, this is not working now
    var iframe = document.getElementById("widget2");
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
        requestFullScreen.bind(iframe)();
    }
  }

  _onEnd(event) {
    window.location.replace("./bye");
  }
}

export default SingleVideo
