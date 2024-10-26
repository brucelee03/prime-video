import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="movie-item">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <div className="video-item">
              <ReactPlayer
                url={videoUrl}
                controls
                className="video-player"
                width="100%"
              />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
