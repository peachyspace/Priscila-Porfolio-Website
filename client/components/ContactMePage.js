import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux'
import ContactForm from './ContactForm'
import {sendContactEmail} from '../store'

const intialErrors = {
  name: [],
  email: [],
  messege: []
}

const isRequried = val => {
  return val.length > 0 ? '' : 'cannot be blank'
}
const isEmail = val => {
  const atIndex = val.indexOf('@')
  //if current char is a dot then retun the current index otherwise we will return the accumulator
  //acc value of starting accumulator
  const greatestDotIndex = val
    .split('')
    .reduce((acc, char, index) => (char === '.' ? index : acc), 0)
  return atIndex > -1 && greatestDotIndex > atIndex ? '' : 'must be an email'
}
const ContactMePage = ({sendingEmail}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messege, setMessege] = useState('')
  const [errors, setErrors] = useState(intialErrors)
  const [submitMsg, setSubmitMsg] = useState('')

  const onSubmitnClick = async e => {
    e.preventDefault()
    if (
      name.length !== 0 &&
      email.length !== 0 &&
      messege.length !== 0 &&
      errors.email.length === 0
    ) {
      console.log('did it')
    } else {
      e.preventDefault()
      setSubmitMsg('Submission Failed')
    }
    try {
      await sendingEmail(name, email, messege)
    } catch (error) {
      console.error(error)
      console.log('error occured')
    }
  }

  return (
    <div className="main" style={{backgroundColor: '#f1eafc'}}>
      <ContactForm
        name={name}
        handleNameChange={e => {
          setName(e.target.value)
        }}
        email={email}
        handleEmailChange={e => {
          setEmail(e.target.value)
        }}
        errors={errors}
        setErrors={setErrors}
        validations={[isRequried]}
        emailValidation={[isRequried, isEmail]}
        messege={messege}
        handleMessegeChange={e => {
          setMessege(e.target.value)
        }}
        submitMsg={submitMsg}
        onSubmitnClick={onSubmitnClick}
      />
    </div>
  )
}

/* const mapState = state  => {
  return {
      sendStatus: state.contactEmail
  }
} */
const mapDispatch = dispatch => {
  return {
    sendingEmail: (name, email, messege) => {
      dispatch(sendContactEmail(name, email, messege))
    }
  }
}
export default connect(null, mapDispatch)(ContactMePage)
