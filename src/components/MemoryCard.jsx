import React from "react";
import './MemoryCard.css';

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    };

    clickeHandler = () => {
        this.setState({isFlipped: !this.state.isFlipped})
    };

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