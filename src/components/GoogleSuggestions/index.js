// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionsItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {inputSearch: ''}

  onChangeInputSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  updatedSearchInput = value => {
    this.setState({inputSearch: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputSearch} = this.state
    const searchResult = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="img"
          />
        </div>
        <div className="box-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-image"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              onChange={this.onChangeInputSearch}
              value={inputSearch}
            />
          </div>
          <ul className="un-order">
            {searchResult.map(eachList => (
              <SuggestionsItem
                listItems={eachList}
                key={eachList.id}
                updatedSearchInput={this.updatedSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
