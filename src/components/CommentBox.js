import React, {Component} from 'react';
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentBox extends Component {
    state = {
        comment: [
            {id: 1, nom: "Jean", comment: "commentaire"},
            {id: 2, nom: "Jean", comment: "commentaire"},
            {id: 3, nom: "Jean", comment: "commentaire"},
            {id: 4, nom: "Jean", comment: "commentaire"}
        ],
        numberOfComments: 0,
    };

    addComment = (nom, comment) => {
        const newComment = {
            id: this.state.comment.length + 1,
            nom,
            comment,
        };
        this.setState({
            comment: this.state.comment.concat([newComment])
        })
    }
    getComments = () => {
        return (this.state.comment.map((obj) => {
                return <Comment key={obj.id} auteur={obj.nom} contenu={obj.comment}/>
            }
        ))

    }

    render(callbackfn, thisArg) {
        return (
            <React.Fragment>
                <h1>
                    {this.countComments() > 1 ? 'Les commentaires' : 'Le commentaire'}
                </h1>
                <span>{this.countComments()}</span>
                {this.getComments()}
                <CommentForm addComment={this.addComment}/>
            </React.Fragment>
        );
    }

    countComments = () => {
        return this.state.comment.length;
    };

    deleteComment = () => {
        console.log('delete');
    };
    toggleComment = () => {
        this.setState({
            showComments: !this.state.showComments
        });
    }
}

export default CommentBox;

/*
- Créer 3 composants
    - CommentBox
        - des commentaires (comment)
        - le formulaire d'ajout
        - Contient/Reçoit les données des commentaires
        [
            {id:1,nom:"Jean",comment:"commentaire"}
        ]
    - Comment
        - titre
        - Contenu
        - bouton effacer
    - CommentForm
        - Nom
        - Contenu
        - Envoi
 */