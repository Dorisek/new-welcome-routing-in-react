import React, { Component } from 'react';
//import our service
import JeopardyService from "./JeopardyService";
import Display from "../display/Display"

class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: { category: {} },
            score: 0,
            formData: {
                userAnswer: ""
            }
        }
    }
    componentDidMount() {
        this.getNewQuestion();
    }

    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            console.log(result.data[0].answer)
            this.setState({
                data: result.data[0]
            })
        })
    }

    handleChange = (event) => {
        const newformData = { ...this.state.formData }
        newformData[event.target.name] = event.target.value;

        this.setState({ formData: newformData });
    }
    handleSubmit = (event) => {
        const formData = { userAnswer: "" }
        event.preventDefault();
        let userAnswer = this.state.formData.userAnswer
        let realAnswer = this.state.data.answer
        let isCorrectAnswer = userAnswer === realAnswer

        if (isCorrectAnswer) {
            console.log("correct answer")
            this.setState((state) => {
                return { score: state.score + state.data.value, formData }
            })
        } else {
            this.setState((state) => {
                return { score: state.score - state.data.value, formData }
            })
        } this.getNewQuestion();
    }

    //when the component mounts, get a the first question

    //display the results on the screen
    render() {

        return (
            <div>
                <Display data={this.state.data} handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange} formData={this.state.formData}
                    score={this.state.score} />

            </div>

        )
    }
}


export default Jeopardy;