import React from 'react';
import { createRoot } from 'react-dom/client';

import Header from './header';
import Body from './Body';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(term) {
        this.setState({ searchTerm: term });
    }
    render(){
        return(
            <>
                <Header onSearch = {this.handleSearch}/>
                <Body searchTerm={this.state.searchTerm}/>
            </>
        )
    }
}
export default Main;