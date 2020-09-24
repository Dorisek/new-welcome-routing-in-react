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
}
export default Contact