import React from 'react'

import "./Style.css"

class NewsDetail extends React.Component {
    render() {
        return (
            <div className="ui card fixWidth2">
                <h2 className="ui header">
                    <div className="content slightPad">
                        {this.props.Send.title}
                    </div>
                </h2>
                <div id="aut" className="content removeBg">
                    <div className="ui meta">{this.props.Send.author},</div>
                    <div className="ui meta">{this.props.Send.publishedAt}</div>
                </div>
                {console.log(this.props.Send)}
                <a href={this.props.Send.url} className="">
                    <img alt="related" className="ui centered massive image limHeight" src={this.props.Send.urlToImage}/>
                </a>
                <div className="content">
                    <h3 className="ui header">
                        <p>{this.props.Send.content}</p>
                    </h3>
                </div>
                <div
                    className="ui blue bottom attached huge button"
                    onClick={this.props.exit}>
                    <i className="arrow left icon"></i>
                </div>
                <div className="ui top right attached label">{this.props.Send.source.id}</div>
            </div>
        );
    }
}

export default NewsDetail;