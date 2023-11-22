import React, {Component} from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        //state holds all information of application 
        this.state = {
            //this array will be filled with data from backend
            contacts: [],
        };
    }

    //fetch data before rendering component
    componentDidMount() {
        fetch('http://localhost:8080/api/contacts')
        .then(response => response.json())
        .then(data => this.setState({contacts: data}))
    }

    //from component classs
    render() {
        return (
            <div>
                <div className="row">
                    <AddContacts />
                </div>
                <h3>List of Current Contacts:</h3>
                <div className="row">
                    { this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}