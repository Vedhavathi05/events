// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const checkTheStatus = () => {
    switch (eventStatus) {
      case 'INACTIVE':
        return (
          <div>
            <p>Click on an event, to view its registration details</p>
          </div>
        )
      case 'YET_TO_REGISTER':
        return (
          <div className="yet-to-register-class">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="yet-to-register-styling"
            />
            <p>
              A live performance brings so much to your relationship with dance
              Seeing dance live can often make you fall totally in love with
              beautiful art form.
            </p>
            <button type="button">Register Here</button>
          </div>
        )
      case 'REGISTERED':
        return (
          <div className="yet-to-register-class">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
              className="image-styling-for-registered"
            />
            <h1>You have already registered for the event</h1>
          </div>
        )

      case 'REGISTRATIONS_CLOSED':
        return (
          <div className="yet-to-register-class">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
              className="yet-to-register-styling"
            />
            <h1>Registrations Are Closed Now!</h1>
            <p>
              Stay tuned. We will reopen <br /> the registrations soon!
            </p>
          </div>
        )

      default:
        return null
    }
  }

  return <div>{checkTheStatus()}</div>
}
export default ActiveEventRegistrationDetails
