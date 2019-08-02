import React, { Component } from "react";
import img from "../../img.json";


class Cards extends Component {

    state = {
        img,
        score: 0,
        cardsClicked: []
    }

// Reset Game
    startOver = () => {
        this.setState({
            cardsClicked: [],
        });
    };


// Shuffle Cards
    shuffle = () => {

        this.state.img.sort(function () {
           return Math.random() - 0.5
        },

        )};


// Click Event
    userClick = event => {
        var click= event;
        var doubleClick = this.state.picked.indexOf(click) > -1;

        if (doubleClick) {
            alert("You Lost");
            this.shuffle();

        } else {
            this.setState({cardsClicked: this.state.cardsClicked.concat(click)});
            this.shuffle(); 
        }

    };
    // Component end





    render() {
        return (
            <>



            </>
        );
    };
};

export default Cards;