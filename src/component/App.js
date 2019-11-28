import React from 'react'

import './Style.css'
import Searchbar from './Search'
import NewsList from './Newslist'
import NewsDetail from './NewsDetail'
import {newsAPI} from "../api/newsApi"

class App extends React.Component {
    state = {
        searchText: "",
        title: {},
        news: []
    }

    onSearch = async(term) => {

        this.setState({searchText: term, title: {}, news: []})
        let res = null;
        let response = JSON.parse(localStorage.getItem("mynews")) || []
        if (response) 
            response.forEach(e => {
                if (e.key === term) {
                    res = e.articles
                }
            });
        if (!res) {
            res = await newsAPI.get('/everything', {
                params: {
                    qInTitle: term,
                    pageSize: 10,
                    sortBy: "relevancy"
                }
            })
            const obj = {
                key: term,
                articles: res
            }
            if (response.length === 5) 
                response.shift()
            response.push(obj)
            localStorage.setItem("mynews", JSON.stringify(response))
            console.log(response)
        }
        //Remove duplicate news articles....if any
        let newResponse = res.data.articles;
        var removeDups = [];
        for (var i = 0; i < newResponse.length; i++) {
            if (removeDups.indexOf(newResponse[i]) === -1) {
                removeDups.push(newResponse[i]);
            }
        }
        this.setState({news: removeDups})
    }

    handleDetail = (obj) => {
        this.setState({title: obj})
    }

    handleExit = () => {
        this.setState({title: {}})
    }

    handleRender = () => {
        if ((Object.keys(this.state.title).length === 0)) {
            return (
                <div id="Mainframe" className="ui segments neat">
                    <div className="ui segment padded center aligned radius removeBg padTop">
                        <Searchbar onSubmit={this.onSearch}/>
                    </div>
                    <div className="ui segment center aligned neat removeBg">
                        <NewsList list={this.state.news} onExpand={this.handleDetail}/>
                    </div>
                </div>
            );
        } else {
            console.log(this.state.title)
            return (
                <div className="ui basic segment center aligned">
                    <NewsDetail Send={this.state.title} exit={this.handleExit}/>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="ui container fixWidth">
                {this.handleRender()}
            </div>
        );

    }
}

export default App;