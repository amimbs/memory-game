import React from "react";
import './MemoryCard.css';

class MemoryCard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { isFlipped: false };
    // };

    // clickeHandler = () => {
    //     this.setState({ isFlipped: !this.state.isFlipped })
    // };

    render() {
        // let memoryCardInnerClass = "";

        // if (this.state.isFlipped) {
        //     memoryCardInnerClass = "MemoryCardInner flipped";
        // } else {
        //     memoryCardInnerClass = "MemoryCardInner"
        // }
        
        // let memoryCardInnerClass = this.state.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";

        let memoryCardInnerClass = "MemoryCardInner";
        if (this.props.isFlipped === true) {
            memoryCardInnerClass += " flipped"
        }

        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.svgimages.com/svg-image/s5/human-brain-clipart.svg" alt="the thing"></img>
                    </div>
                    <div className="MemoryCardFront">
                        <br />
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        );
    };
};

export default MemoryCard