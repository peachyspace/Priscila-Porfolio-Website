import React, {useState} from 'react'
import PortfolioSliderData from './PortfolioSliderData'
import ButtonSlider from './ButtonSlider'

const PSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const nextSlide = () => {
    if (slideIndex !== PortfolioSliderData.length) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else {
      setSlideIndex(PortfolioSliderData.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }
  return (
    <div className="container-slider">
      {PortfolioSliderData.map((obj, index) => {
        return (
          <div
            className={
              slideIndex === index + 1 ? 'slider active-anim' : 'slider'
            }
            key={obj.id}
          >
            <img src={`/images/${obj.name}.png`} />
          </div>
        )
      })}
      <ButtonSlider moveSlider={nextSlide} direction="next" />
      <ButtonSlider moveSlider={prevSlide} direction="prev" />
      <div className="container-dots">
        {Array.from({length: PortfolioSliderData.length}).map((item, index) => (
          <div
            key={PortfolioSliderData[index].id}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          />
        ))}
      </div>
    </div>
  )
}
export default PSlider
