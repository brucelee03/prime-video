import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {moviesList: props.moviesList}
  }

  render() {
    const {moviesList} = this.state

    const actionMovies = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    const comedyMovies = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )

    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-img"
        />
        <div className="video-container">
          <div className="action-movies movies-container">
            <h1 className="genre">Action Movies</h1>
            <MoviesSlider moviesData={actionMovies} />
          </div>
          <div className="comedy-movies movies-container">
            <h1 className="genre">Comedy Movies</h1>
            <MoviesSlider moviesData={comedyMovies} />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
