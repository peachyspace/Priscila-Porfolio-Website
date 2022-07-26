import React, {useState} from 'react'
import VitamonSliderData from './VitamonSliderData'
import ButtonSlider from './ButtonSlider'
import CellButtonSlider from './CellButtonSlider'
const VMSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const nextSlide = () => {
    if (slideIndex !== VitamonSliderData.length) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else {
      setSlideIndex(VitamonSliderData.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }
  return (
    <div className="container-slider">
      {VitamonSliderData.map((obj, index) => {
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
      <CellButtonSlider moveSlider={nextSlide} direction="next" />
      <CellButtonSlider moveSlider={prevSlide} direction="prev" />
      <div className="container-dots">
        {Array.from({length: VitamonSliderData.length}).map((item, index) => (
          <div
            key={VitamonSliderData[index].id}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          />
        ))}
      </div>
    </div>
  )
}
export default VMSlider
