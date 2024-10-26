import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesData} = props
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesData.map(movieItem => (
          <MovieItem key={movieItem.id} movieDetails={movieItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
