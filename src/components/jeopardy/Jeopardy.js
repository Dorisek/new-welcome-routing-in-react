import React, { Component } from 'react';
//import our service
import JeopardyService from "./JeopardyService";
class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0
        }
    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }
    //display the results on the screen
    render() {
        if (this.state.data.category) {
            return (
                <div>
                    <div>
                        {JSON.stringify(this.state.data.question)}
                    </div>
                    <div>
                        {this.state.data.value}
                    </div>
                    <div>
                        {this.state.data.category.title}
                    </div>
                    <div>
                        {this.state.score}
                    </div>
                    <div>
                        <input type="text" />
                        <button>Submit</button>
                    </div>
                </div>
            );
        } else { return "Loading..." }


    }
}
export default Jeopardy;