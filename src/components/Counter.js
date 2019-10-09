import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <h1>{this.formatCount()}</h1>
                <button onClick={this.addOne}>+</button>
                <button onClick={this.deleteOne}>-</button>
            </div>
        )
    };

    addOne = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    deleteOne = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zéro" : count;
    };
}

export default Counter;