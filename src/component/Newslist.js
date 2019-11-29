import React from 'react'

import './Style.css'

const NewsList = props => {
    const renderList = props.list.map((e) => {
            return(
                <div key={e.title} style={{border: "4px solid black", cursor: "pointer"}} className="card" onClick={() => {props.onExpand(e)}} >
                    <div className="ui content">
                        <div className="header">{e.title}</div>
                        <div className="meta">{e.author}</div>
                    </div>
                </div>
            );
        })

        return(
            <div className="ui segment removeBg">
                <div className="ui red top left attached label">
                     Top Finds :
                </div>
                <div className="ui cards">
                    {renderList}
                </div>
            </div>
        );
}

export default NewsList;