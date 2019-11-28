import React from 'react'

import './Style.css'

class Searchbar extends React.Component{
    render(){
        let timer;
        return(
            <div className="ui icon input large">
                <i className="black search icon opa"></i>
                <input autoFocus id="searchText" 
                    onChange={e => {
                    clearTimeout(timer)
                    timer = setTimeout(()=>{
                        this.props.onSubmit(document.querySelector("#searchText").value)
                    },2000) 
                }}
                    type="text" placeholder="Search news"></input>
            </div>
        )
    }
}

export default Searchbar;