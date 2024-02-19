// Write your code h
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="bg">
      <h1 className="heading">PLANETS</h1>
      <Slider className="slider" {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} item={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
