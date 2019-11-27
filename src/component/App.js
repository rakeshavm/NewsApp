import React from 'react'

import Searchbar from './Search'
import NewsList from './Newslist'
import {newsAPI} from "../api/newsApi"

class App extends React.Component {
    state = { searchText: "", title: "" ,news:[]}
    onSearch = async (term) => {
        this.setState({
            searchText: term,
            title : "",
            news: []
        })
        // console.log("SUccess!")
        const response = await newsAPI.get('/everything',{
            params: {
                qInTitle: term,
                pageSize: 10,
                sortBy: "relevancy"
            }
        })
        console.log(response.data.articles);
        this.setState({
            news : response.data.articles
        })
    }
    render(){
        return(
            <div className="ui container">
                <Searchbar onSubmit={this.onSearch}/> 
                <NewsList list={this.state.news}/> 
            </div>
        );

    }
}

export default App;