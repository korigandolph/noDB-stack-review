import React from 'react'
import Employee from './Employee'

function AllEmployees(props){
    return(
        <div>
            {props.filteredEmployees.map(employee => {
                return <Employee
                            key={employee.id}
                            employee={employee}
                            selectEmployee={props.selectEmployee}
                        />
            })}
        </div>
    )
}

export default AllEmployees