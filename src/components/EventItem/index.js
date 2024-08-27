// Write your code here
import './index.css'

const EventItem = props => {
  const {details, changeStatus} = props
  const {imageUrl, name, location} = details
  const buttonClikced = () => {
    changeStatus(details)
  }

  return (
    <div className="card-styling">
      <button type="button" className="button-styles" onClick={buttonClikced}>
        <img src={imageUrl} alt="event" className="image-styling" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </div>
  )
}

export default EventItem
