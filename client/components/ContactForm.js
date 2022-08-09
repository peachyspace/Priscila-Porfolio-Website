import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const ContactForm = ({
  validations,
  name,
  handleNameChange,
  email,
  handleEmailChange,
  errors,
  setErrors,
  emailValidation,
  messege,
  handleMessegeChange,
  submitMsg,
  onSubmitnClick
}) => {
  const validate = (validationsArray, value, string) => {
    //map over the validationsArray
    //validationsArray is an array of validators and those validators return error messeges

    setErrors(() => ({
      ...errors,
      [string]: validationsArray
        .map(errorFor => errorFor(value))
        .filter(errorMsg => errorMsg.length > 0)
    }))
  }
  return (
    <div className="formDiv">
      <div className="pastelPurpleFlippedWave" />
      <div className="formHolder">
        <form className="contactForm">
          <Typography>Contact</Typography>
          <TextField
            error={errors.name.length !== 0}
            value={name}
            onChange={e => handleNameChange(e)}
            required={true}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Name"
            id="name"
            name="name"
            onBlur={() => validate(validations, name, 'name')}
            helperText={
              errors.name.length === 0 ? null : errors.name.join(', ')
            }
          />
          <TextField
            error={errors.email.length !== 0}
            value={email}
            onChange={e => handleEmailChange(e)}
            required={true}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            id="email"
            name="email"
            onBlur={() => validate(emailValidation, email, 'email')}
            helperText={
              errors.email.length === 0 ? null : errors.email.join(', ')
            }
          />
          <TextField
            error={errors.messege.length !== 0}
            value={messege}
            onChange={e => handleMessegeChange(e)}
            required={true}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Messege"
            id="messege"
            name="messege"
            multiline={true}
            /* minRows={1} */
            onBlur={() => validate(validations, messege, 'messege')}
            helperText={
              errors.messege.length === 0 ? null : errors.messege.join(', ')
            }
          />
          <Grid>
            <Grid>
              {submitMsg === '' ? null : (
                <Typography className="failedSubmit">{submitMsg}</Typography>
              )}
              <Button
                type="submit"
                fullWidth={false}
                variant="contained"
                color="primary"
                className="contactButton"
                onClick={e => onSubmitnClick(e)}
              >
                <Typography component="h6" variant="h6">
                  Submit
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className="upsideDownPurpleWave" style={{marginBottom: '1.4rem'}} />
    </div>
  )
}

export default ContactForm
