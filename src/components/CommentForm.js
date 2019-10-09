import React, {Component} from 'react';
import CommentBox from "./CommentBox";

class CommentForm extends Component {
    render() {
        return (
            <form onSubmit={this.saveComment}>
                <label htmlFor="nom">Votre nom</label>
                <input type="text" id="nom" ref="name" />
                <label htmlFor="contenu">Le commentaire</label>
                <textarea id="contenu" ref="comment" placeholder="Votre commentaire"></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
        );
    }

    saveComment = () => {
        CommentBox.setState({})
    }
}

export default CommentForm;