import React from 'react'

import './Style.css'

class Searchbar extends React.Component{
    render(){
        let timer;
        return(
            <div  id="searchDiv" className="ui icon input large">
                <i className="black search icon opa"></i>
                <input id="searchText" autoFocus
                    className="leftBor" 
                    onChange={e => {
                    let srch = e.target.value
                    let check = JSON.parse(localStorage.getItem("mynews")) || []
                    clearTimeout(timer)
                    if (check) {
                        check.forEach(ele => {
                        if (ele.key === srch) 
                            this.props.onSubmit(srch)
                        });
                    }
                    timer = setTimeout(()=>{
                        this.props.onSubmit(srch)
                    },2000)
                    }}
                    type="text" placeholder="Search news"></input>
                <button className="ui button blue right attached white rightBor" onClick={this.props.onHis}>HISTORY</button>
            </div>
        )
    }
}

export default Searchbar;