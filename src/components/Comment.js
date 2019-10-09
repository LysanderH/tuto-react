import React, {Component} from 'react';
import CommentBox from "./CommentBox";

class Comment extends Component {
    render() {
        return (
            <section id={this.props.id}>
                <h2>{this.props.auteur}</h2>
                <p>{this.props.contenu}</p>
                <button onClick={CommentBox.deleteComment}>Delete this comment</button>
            </section>
        );
    }

    // deleteComment = () => {
    //     console.log('delete');
    // }
}

export default Comment;