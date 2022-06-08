// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {listItems, updatedSearchInput} = props
  const {suggestion} = listItems

  const onclickSuggestion = () => {
    updatedSearchInput(suggestion)
  }

  return (
    <li className="list-of-options">
      <p>{suggestion}</p>
      <button type="button" className="button" onClick={onclickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="left-arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
