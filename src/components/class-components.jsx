import { Component } from "react";

class ClassComponent extends Component {
    state = {
        showText: false,
        changeColor: false,
        count: 0,
        changeCountStyle: false
    }
    handleClick = () => {
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
    handleCount = () => {
        const { count } = this.state
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`componentDidUpdate: `, prevProps, prevState);
        if (prevState && prevState.count !== this.state.count && this.state.count === 10) {
            this.setState({
                ...this.state,
                changeCountStyle: true
            })
        }
    }
    componentWillUnmount() {
        console.log(`unmounted component`);
    }
    componentDidMount() {

        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        })
        console.log(`componentDidMount : `, this.showText, this.changeColor);
    }
    render() {

        const { showText, changeColor, count, changeCountStyle } = this.state
        console.log(`changeCountStyle: `, changeCountStyle);
        return <div>
            {
                showText ? <h3 style={{ color: changeColor ? "red" : "blue" }}>First Class Component</h3>
                    : null
            }
            <button onClick={this.handleClick}>Toggle</button>
            <button onClick={this.handleCount}>Count increasing by clicked</button>
            <h3 style={{ color: changeCountStyle ? 'magenta' : 'black', fontSize: changeCountStyle ? '30px' : '12px' }}>{count}</h3>
        </div>
    }
}
export default ClassComponent