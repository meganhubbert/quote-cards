import React from 'react';

class SearchBar extends React.Component {

  

  inputHandler = (event) => {
    this.props.updateFilterState(event.target.value)
    
  }
 


  render() {
  
    
    return (
      <div className="search">
        <input type="text" className="searchTerm" onChange={this.inputHandler} value={this.props.filter}/>
      </div>

    );
  }

}

export default SearchBar;
