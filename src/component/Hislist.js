import React from 'react'

import './Style.css'

const HisList = props => {
    const renderList = props.list.map((e) => {
            return (
                <div
                    key={e}
                    style={{
                    border: "4px solid black",
                    cursor: "pointer"
                }}
                    className="card"
                    onClick={() => {
                    props.onExpand(e)
                }}>
                    <div className="ui content">
                        <div className="header">{e}</div>
                    </div>
                </div>
            );
        })

    return (
        <div className="ui segment removeBg">
            <div className="ui blue top left attached label">
                Top Search :
            </div>
            <div className="ui cards">
                {renderList}
            </div>
        </div>
    );
}

export default HisList;