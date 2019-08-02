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
            score: 0
        });
    };


    // Shuffle Cards
    shuffle = () => {

        this.state.img.sort(function () {
            return Math.random() - 0.5
        },

        )
    };


    // Click Event
    userClick = event => {
        var click = event;
        var doubleClick = this.state.picked.indexOf(click) > -1;

        if (doubleClick) {
            alert("You Lost");
            this.startOver();
            this.shuffle();

        } else {
            this.setState({ cardsClicked: this.state.cardsClicked.concat(click) });
            this.scored();
            this.shuffle();
        };
    };


    // Scoring
    Scored = () => {
        this.setState({ score: this.state.score = 1 });
    };

    render() {

        var allImages = img.map(img => {
            return (
                <>
                    <div className="card" key={img.id} id={img.id}>
                        <div className="img-container">
                            <img alt={img.name} src={require("../../img/" + img.img)} onClick={this.imgClick.bind(this, img.id)} />
                        </div>
                    </div>

                </>
            );
        });

        return (
            <>
                <div>Score:{this.state.score}</div>
                <div className="container image-list">{allImages}</div>

            </>
        );
    };
};

export default Cards;