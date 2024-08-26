import './index.css'

const VisitCountry = props => {
  const {details, removeCountry} = props
  const {id, imageUrl, name} = details

  const removeButton = () => {
    removeCountry(id)
  }

  return (
    <li className="image-container">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="image-bottom">
        <p className="name">{name}</p>
        <button type="button" className="remove-button" onClick={removeButton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitCountry
