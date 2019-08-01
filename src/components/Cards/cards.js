import React, {Component} from "react";
import img from "../../img.json";


class Cards extends Component {

    state = {
        img,
        score: 0,
        cardsClicked: []
    }

     startOver = () => {
        this.setState({
                score: 0,
                cardsClicked: [],
        });
    };

    shuffle = () => {

        this.state.img.sort(function() {
            Math.random() - 0.5},
            
            this.setState({cards:shuffle}));

            this.state.cardsClicked.push(id);

    }






    render() {
        return(
            <>



            </>
        );
    };
};

export default Cards;