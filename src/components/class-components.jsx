import { Component } from "react";

class ClassComponent extends Component {
    state = {
        showText: false,
        changeColor: false
    }
    handleClick = () => {
        console.log("Clicked");
        const { showText, changeColor } = this.state
        this.setState({
            showText: !showText,
            changeColor: !changeColor
        })
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         showText: true
    //     }
    // }
    render() {
        console.log(this.state);
        const { showText, changeColor } = this.state
        return <div>
            {
                showText ? <h3 style={{ color: changeColor ? "red" : "blue" }}>First Class Component</h3>
                    : null
            }
            <button onClick={this.handleClick}>Toggle</button>
        </div>
    }
}
export default ClassComponent