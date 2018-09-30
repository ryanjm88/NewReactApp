import React, {Component} from 'react';
import FoodDiv from './components/Food';
import MusicDiv from './components/Music';
import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';

class App extends Component  {
    state = {
        employees:  [
            {
                'name': 'Laurette',
                'job': 'Pinot Grigio Taste Tester'
            }
        ]
    };
    
    removeEmployee = index =>  {
        const { employees } = this.state;

        this.setState({
            employees: employees.filter((employee, i)   =>  {
                return i !== index;
            })
        });
    };

    handleSubmit = employee => {
        this.setState({employees: [...this.state.employees, employee]});
    }

    render() {
        return(
            <div className="container">
                <Header />
                <FoodDiv />
                <MusicDiv />
                <Table
                    employeeData={this.state.employees}
                    removeEmployee={this.removeEmployee}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;