import React, {Component} from 'react';
import Enfant from "./Enfant";
class Parent extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    Hello
                </h1>
                <Enfant contenu="Lol" />
            </React.Fragment>

        );
    }
    faitQqc = () => {
        
    }
}

export default Parent;