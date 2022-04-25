import React from "react";
import './MemoryCard.css';

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    };

    clickeHandler = () => {
        this.setState({ isFlipped: !this.state.isFlipped })
    };

    render() {
        // let memoryCardInnerClass = "";

        // if (this.state.isFlipped) {
        //     memoryCardInnerClass = "MemoryCardInner flipped";
        // } else {
        //     memoryCardInnerClass = "MemoryCardInner"
        // }

        let memoryCardInnerClass = this.state.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner"

        return (
            <div className="MemoryCard" onClick={this.clickeHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="the thing"></img>
                    </div>
                    <div className="MemoryCardFront">
                        <br />
                        ▲
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard