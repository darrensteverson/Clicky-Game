import React from "react";


function Header(props) {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">DBZ Clicky Game</h1>
                    <p className="lead">Test how good your memory is. Be sure to click an image only once!!!</p>
                    <div className="score"></div>
                </div>
            </div>
        </>
    )};

export default Header;