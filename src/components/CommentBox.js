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

    render(callbackfn, thisArg) {
        return (
            <React.Fragment>
                <h1>
                    {this.countComments()>1?'Les commentaires':'Le commentaire'}
                </h1>
                <span>{this.countComments()}</span>
                {this.state.comment.map((obj,index) => {
                        return <Comment id={index} auteur={obj.nom} contenu={obj.comment}/>
                    }
                )}
                <CommentForm/>
            </React.Fragment>
        );
    }

    countComments = () => {
        return this.state.comment.length;
    };
    deleteComment = () => {
        console.log('delete');
    };
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