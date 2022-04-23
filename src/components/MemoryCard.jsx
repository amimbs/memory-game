import React from "react";
import './MemoryCard.css';

class MemoryCard extends React.Component {
    clickeHandler() {
        alert("card clicked");
    }

    render() {
        return (
        <div className="MemoryCard" onClick={this.clickeHandler}>
            <div className="MemoryCardInner">
                <div className="MemoryCardBack">
                    <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="the thing"></img>
                </div>
                <div className="MemoryCardFront">
                    ▲
                </div>
            </div>
        </div>
        )
    } 
}

export default MemoryCard