import React, {Component} from 'react';

// différence entre stateless et statful

// class Enfant extends Component {
//     render() {
//         return (
//             <p>
//                 {this.props.contenu}
//             </p>
//         );
//     }
// }

const Enfant = (props) => {
    return (
        <p>
            {props.contenu}
        </p>
    )
};

export default Enfant;