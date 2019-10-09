import React, {Component} from 'react';
import CommentBox from "./CommentBox";

class CommentForm extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="nom">Votre nom</label>
                <input type="text" id="nom" ref={input => this.nom = input}/>
                <label htmlFor="contenu">Le commentaire</label>
                <textarea id="contenu" ref={textarea => this.comment = textarea} placeholder="Votre commentaire">Votre commentaire</textarea>
                <input type="submit" value="Envoyer"/>
            </form>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let nom = this.nom;
        let comment = this.comment;
        this.props.addComment(nom.value, comment.value);
    }
    // saveComment = () => {
    //     CommentBox.setState({})
    // }
}

export default CommentForm;