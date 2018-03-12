// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors:[],
      user:null,
      settings: {
        bitrate:8,
        video: {
          resolution:'1080p'
        }
      }
    }
  }

  incrementBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate:12
      }
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution:'720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.incrementBitrate} className="bitrate">Bitrate {this.state.settings.bitrate}</button>
        <button onClick={this.changeResolution} className="resolution">Resolution {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
