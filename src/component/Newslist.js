import React from 'react'

const NewsList = props => {
    const renderList = props.list.map((e) => {
            return(
                <div key={e.title} className="card">
                    <div className="ui content">
                        <div className="header">{e.title}</div>
                        <div className="meta">{e.author}</div>
                    </div>
                </div>
            );
        })
        return(
            <div className="ui cards">
                {renderList}
            </div>
        );
}

export default NewsList;