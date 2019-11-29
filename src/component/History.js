import React from 'react'

import HisList from './Hislist'
import './Style.css'

class History extends React.Component{
    getHis = () => {
        return JSON.parse(localStorage.getItem("history")) || []
    }
    handleSearch = (term) => {
        this.props.newSearch(term)
    }
    render(){
        return(
            <div className="ui segment center aligned neat removeBg">
                <HisList list={this.getHis()} onExpand={this.handleSearch}/>
                <div className="ui blue bottom attached huge button"
                    onClick={this.props.exit}>
                    <i className="arrow left icon"></i>
                </div>
            </div>
        )
    }
}

export default History;