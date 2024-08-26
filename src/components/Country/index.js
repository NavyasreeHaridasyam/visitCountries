import './index.css'

const Country = props => {
  const {countryDetails, changeVisitStatus} = props
  const {id, name, isVisited} = countryDetails

  const button = isVisited ? 'Visited' : 'Visit'

  const onClickButton = () => {
    changeVisitStatus(id)
  }

  return (
    <li className="country-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="para">{button}</p>
      ) : (
        <button type="button" className="button" onClick={onClickButton}>
          {button}
        </button>
      )}
    </li>
  )
}

export default Country
