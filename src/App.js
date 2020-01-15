import React, { Component } from "react";
import "./App.css";
import SearchBar from './Components/SearchBar'
import AllEmployees from './Components/AllEmployees'
import EmployeeHighlight from './Components/EmployeeHighlight'

class App extends Component {
  constructor(){
    super()
    this.state = {
      employees: [],
      selectedFirstName: '',
      selectedLastName: '',
      selectedEmail: '',
      selectedGender: ''
    }
  }

	render() {
    const {
      employees,
      selectedFirstName,
      selectedLastName,
      selectedEmail,
      selectedGender
    } = this.state
		return (
			<div className="App">
				<SearchBar employees={employees}/>
				<AllEmployees />
				<EmployeeHighlight />
			</div>
		);
	}
}

export default App;
