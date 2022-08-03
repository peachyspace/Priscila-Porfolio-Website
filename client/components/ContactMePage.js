import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import ContactForm from './ContactForm'

const ContactMePage = ({}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messege, setMessege] = useState('')
  return (
    <div className="contactFormContainer ">
      <ContactForm
        name={name}
        handleNameChange={e => {
          setName(e.target.value)
        }}
        email={email}
        handleEmailChange={e => {
          setEmail(e.target.value)
        }}
        messege={messege}
        handleMessegeChange={e => {
          setMessege(e.target.value)
        }}
      />
    </div>
  )
}
export default ContactMePage
