import React, { Component } from 'react';

class SearchBar extends React.Component {

    //how to define or initialize state 
    //constructor method
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        return (
            <div>
                <input
                  value={ this.state.term }
                  onChange={(event) => this.setState({ term: event.target.value }) } />
                </div>
        );
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;