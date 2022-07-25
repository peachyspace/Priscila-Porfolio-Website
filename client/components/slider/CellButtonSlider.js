import React from 'react'
import leftArrowIcon from '../../../public/images/leftArrowIcon.png'
import rightArrowIcon from '../../../public/images/rightArrowIcon.png'

const CellButtonSlider = ({moveSlider, direction}) => {
  return (
    <button
      type="button"
      onClick={moveSlider}
      className={
        direction === 'next' ? 'btn-slider cell-next' : 'btn-slider cell-prev'
      }
    >
      <img src={direction === 'next' ? rightArrowIcon : leftArrowIcon} />
    </button>
  )
}

export default CellButtonSlider
