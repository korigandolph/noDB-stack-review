import React, { Component } from "react";

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            input: '',
        }
    }

    handleChange = e => {
        const {value} = e.target
        this.setState({
            input: value
        })
    }

	render() {
        console.log(this.props.employees)
		return (
            <div>SearchBar</div>
        );
	}
}

export default SearchBar;
