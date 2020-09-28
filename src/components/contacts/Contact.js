import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""

            }
        }
    }
    handleChange = (event) => {
        const formData = { ...this.state.form }
        formData[event.target.name] = event

        this.setState({ formData });
    }
    handleSubmitted = (event) => {
        event.preventDefault();

        this.setstate({
            submitted: true
        })
    }
    render() {
        if (this.state.submitted) {
            return (
                <div className="contact">

                </div>       
            }
        return (
            <div className="Contact">
                <form onSubmit={this.handleChange}>
                    <div>
                        <label htmlfor="firstName">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.formData.firstName} />

                    </div>
                    <div>
                        <label htmlfor="lastName">last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.formData.value}
                        />
                    </div>
                    <div>
                        <label htmlfor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.formData.email}
                        />
                        <div>
                            <label htmlfor="getAnswer"></label>
                            <input
                                type="text"
                                name="answer"
                            />
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}
export default Contact