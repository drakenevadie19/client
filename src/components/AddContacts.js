import React, { Component } from 'react';

export default class AddContacts extends Component {
    constructor(props) {
        super(props);

        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
    }

    submitContact(event) {
        event.preventDefault();
        
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.email);

        let contact = {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            email: this.email.current.value,
        };

        fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contact),
        })
        .then(response => response.json());

        window.location.reload();
    }


    render() {
        return (
            <div class="row">
                <form class="col s12" onSubmit={this.submitContact.bind(this)}>
                <div class="row">
                    <div class="input-field col s6">
                        <input ref={this.firstName} type="text" class="validate" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input ref={this.lastName} type="text" class="validate" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input ref={this.email} type="email" class="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}