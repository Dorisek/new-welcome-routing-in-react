import React from "react"

function Display(props) {

    return <div>
        <div>
            Question:{props.data.question}
            <br />
                    point Value:{props.data.value}
            <br />
                    Title:{props.data.category.title}
            <br />

        </div>


        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlfor="userAnswer">Answer</label>
                <input
                    type="text"
                    name="userAnswer"
                    value={props.formData.userAnswer}
                    onChange={props.handleChange}
                />
            </div>
            <button>Submit</button>
                    Score={props.score}
        </form>
    </div>

}
export default Display
