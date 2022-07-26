import React from 'react'
import leftArrowIcon from '../../../public/images/leftArrowIcon.png'
import rightArrowIcon from '../../../public/images/rightArrowIcon.png'
const ButtonSlider = ({moveSlider, direction}) => {
  return (
    <button
      type="button"
      onClick={moveSlider}
      className={direction === 'next' ? 'btn-slider next' : 'btn-slider prev'}
    >
      <img src={direction === 'next' ? rightArrowIcon : leftArrowIcon} />
    </button>
  )
}

export default ButtonSlider
