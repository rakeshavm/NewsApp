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
                    let srch = e.target.value.toLowerCase()
                    let check = JSON.parse(localStorage.getItem("mynews")) || []
                    let flag = 0
                    clearTimeout(timer)
                    if(srch !==""){
                        if (check) {
                            check.forEach(ele => {
                            if (ele.key === srch) {
                                this.props.onSubmit(srch)
                                flag=1
                            }
                            });
                        }
                        if(flag ===0){
                        clearTimeout(timer)
                        timer = setTimeout(()=>{
                            this.props.onSubmit(srch)
                        },2000)
                    }
                    }
                    }}
                    type="text" placeholder="Search news"></input>
                <button className="ui button blue right attached white rightBor" onClick={this.props.onHis}>HISTORY</button>
            </div>
        )
    }
}

export default Searchbar;