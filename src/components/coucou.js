import React, {Component} from 'react';

class Coucou extends Component {
    state = {
        count: 1,
    }

    render() {
        return <h1>{this.state.count + Math.random() * 3}</h1>
    }

}

export default Coucou;