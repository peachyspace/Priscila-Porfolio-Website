import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import GridList from '@material-ui/core/GridList'
import workSpace from '../../../public/images/workSpace.png'
import webPage from '../../../public/images/webPage.png'
import purpleCodeEditor from '../../../public/images/purpleCodeEditor.png'
import hourArrow from '../../../public/images/hourArrow.png'
import minArrow from '../../../public/images/minArrow.png'

const WorkSpaceSection = () => {
  return (
    <div className="workSpaceSection">
      <img
        src={workSpace}
        alt="3d illustration of work space"
        className="workSpaceImage"
      />
      <div className="webPageHolder">
        <img src={webPage} alt="floating webPage" className="pop" />
      </div>
      <div className="purpleCodeEditorHolder">
        <img
          src={purpleCodeEditor}
          alt="floating code editor"
          className="pop2"
        />
      </div>
      <div className="hourArrowHolder">
        <img src={hourArrow} alt="hourArrow" className="rotate" />
      </div>
      <div className="minArrowHolder">
        <img src={minArrow} alt="minArrow" className="rotate2" />
      </div>
    </div>
  )
}
export default WorkSpaceSection
