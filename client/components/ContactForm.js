import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const ContactForm = ({
  name,
  handleNameChange,
  email,
  handleEmailChange,
  messege,
  handleMessegeChange
}) => {
  return (
    <div className="formDiv">
      <div className="pastelPurpleFlippedWave" />
      <div className="formHolder">
        <form className="contactForm">
          <Typography>Contact</Typography>
          <TextField
            /* error={errors.firstName.length !== 0} */
            value={name}
            onChange={e => handleNameChange(e)}
            required={true}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            /* onBlur={() => validate(validations, firstName, 'firstName')}
            helperText={
              errors.firstName.length === 0 ? null : errors.firstName.join(', ')
            } */
          />
          <TextField
            /* error={errors.firstName.length !== 0} */
            value={email}
            onChange={e => handleEmailChange(e)}
            required={true}
            variant="outlined"
            margin="normal"
            fullWidth
            /* className={classes.MuiInputLabel.outlined}
            id="email"
             */
            label="Email"
            name="email"
            /* onBlur={() => validate(validations, firstName, 'firstName')}
            helperText={
              errors.firstName.length === 0 ? null : errors.firstName.join(', ')
            } */
          />
          <TextField
            /* error={errors.firstName.length !== 0} */
            value={messege}
            onChange={e => handleMessegeChange(e)}
            required={true}
            variant="outlined"
            margin="normal"
            fullWidth
            id="Messege"
            label="Messege"
            name="Messege"
            multiline={true}
            minRows={4}

            /* onBlur={() => validate(validations, firstName, 'firstName')}
            helperText={
              errors.firstName.length === 0 ? null : errors.firstName.join(', ')
            } */
          />
          <Button
            type="submit"
            fullWidth={false}
            variant="contained"
            color="primary"
            className="contactButton"
          >
            <Typography component="h6" variant="h6">
              Submit
            </Typography>
          </Button>
        </form>
      </div>
      <div className="upsideDownPurpleWave" style={{marginBottom: '4.4rem'}} />
    </div>
  )
}

export default ContactForm
