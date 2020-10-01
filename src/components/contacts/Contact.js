import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                // email: ""
            }
        }
    }
    handleChange = (event) => {
        const newformData = { ...this.state.form }
        newformData[event.target.name] = event

        this.setState({ newformData });
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setstate({
            submitted: true
        })
    }
    render() {
        if (this.state.submitted) {
            return (
                <div className="contact">
                    contact
                </div>
            );
        }
        return (
            <div className="Contact">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlfor="firstName">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                        />

                    </div>
                    <div>
                        <label htmlfor="lastName">last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.formData.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        {/* <label htmlfor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.formData.email}
                            onChange={this.handleChange}
                        /> */}
                        <div>
                            <div>
                                {this.state.formData.firstName}
                                <br />
                                {this.state.formData.lastName}
                            </div>
                            {/* <label htmlfor="getAnswer"></label>
                            <input
                                type="text"
                                name="answer"
                            /> */}
                        </div>

                    </div>
                </form>
            </div>
        )
    }

}
export default Contact