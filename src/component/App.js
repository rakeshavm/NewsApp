import React from 'react'

import './Style.css'
import Searchbar from './Search'
import NewsList from './Newslist'
import NewsDetail from './NewsDetail'
import History from './History'
import {newsAPI} from "../api/newsApi"

class App extends React.Component {
    state = {
        searchText: "",
        title: {},
        news: [],
        hist: false
    }

    onSearch = async(term) => {
        //Converting to lowercase
        const newTerm = term.toLowerCase()

        //resetting state
        this.setState({searchText: newTerm, title: {}, news: [], hist: false})

        //Setting up history
        let a = JSON.parse(localStorage.getItem("history")) || []
        console.log(a.indexOf(newTerm));
        if(a.indexOf(newTerm) !== -1)
            a.splice(a.indexOf(newTerm),1)
        a.unshift(newTerm)
        localStorage.setItem("history",JSON.stringify(a))

        //Checking response from API
        let res = null;
        let response = JSON.parse(localStorage.getItem("mynews")) || []
        if (response) 
            response.forEach(e => {
                if (e.key === newTerm) {
                    res = e.articles
                }
            });
        if (!res) {
            res = await newsAPI.get('/everything', {
                params: {
                    qInTitle: newTerm,
                    pageSize: 10,
                    sortBy: "relevancy"
                }
            })
            const obj = {
                key: newTerm,
                articles: res
            }
            if (response.length === 5) 
                response.shift()
            response.push(obj)
            localStorage.setItem("mynews", JSON.stringify(response))
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
        this.setState({title: {}, hist: false})
    }

    renderHis = () => {
        this.setState({hist:true})
    }

    handleRender = () => {
        if ((Object.keys(this.state.title).length === 0)&&(this.state.hist === false)) {
            return (
                <div id="Mainframe" className="ui segments neat">
                    <div className="ui segment padded center aligned radius removeBg padTop">
                        <Searchbar onSubmit={this.onSearch} onHis={this.renderHis}/>
                    </div>
                    <div className="ui segment center aligned neat removeBg">
                        <NewsList list={this.state.news} onExpand={this.handleDetail}/>
                    </div>
                </div>
            );
        } else if(this.state.hist){
            return (
                <div className="ui segment center aligned neat removeBg">
                    <History newSearch={this.onSearch} exit={this.handleExit}/>
                </div>
            )
        }
        else {
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