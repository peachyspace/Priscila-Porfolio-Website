import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SEND_EMAIL = 'SEND_EMAIL'

/**
 * INITIAL STATE
 */
const intialState = {}

/**
 * ACTION CREATORS
 */
const sendAnEmail = isSent => ({
  type: SEND_EMAIL,
  isSent
})

/**
 * THUNK CREATORS
 */
export const sendContactEmail = (name, email, messege) => async dispatch => {
  try {
    await axios.post('/api/sendEmail', {
      from_name: name,
      reply_to: email,
      messege
    })
    dispatch(sendAnEmail({emailSent: true}))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
const contactEmailReducer = (state = intialState, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return action.isSent
    default:
      return state
  }
}

export default contactEmailReducer
