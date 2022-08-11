import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const ThankYouPage = () => {
  return (
    <div className="thankYouPage" style={{backgroundColor: '#fbecff'}}>
      <div className="pastelPurpleFlippedWave" />
      <div className="messageHolder" style={{backgroundColor: '#e5d5ff'}}>
        <div className="message">
          <Typography className="line1">
            Thank you for getting in touch!
          </Typography>

          <Typography className="line2">
            I appreciate you contacting me
          </Typography>
          <div>
            <Button
              type="button"
              fullWidth={false}
              color="primary"
              variant="contained"
              className="returnButton"
              href="/"
            >
              <Typography className="returnHomeBut">
                Return to Home Page
              </Typography>
            </Button>
          </div>
        </div>
      </div>
      <div className="upsideDownPurpleWave" style={{marginBottom: '1.4rem'}} />
    </div>
  )
}

export default ThankYouPage
