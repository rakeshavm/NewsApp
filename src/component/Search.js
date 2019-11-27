import React from 'react'

class Searchbar extends React.Component{

    render(){
        return(
            <div className="ui icon input">
                <i className="search icon"></i>
                <input id="searchText" onChange={e => {this.props.onSubmit(e.target.value)}} type="text" placeholder="Search..."></input>
            </div>
        )
    }
}

export default Searchbar;