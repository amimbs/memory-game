import React from "react";
import './MemoryCard.css';

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    };

    // clickeHandler = () => {
    //     alert("card clicked");
    //     this.setState(prevState => {
    //         console.log(prevState)
    //         return {isFlipped: !prevState.isFlipped}
    //     },
    //     () => console.log(this.state))
    // };

    clickeHandler = (props) => {
        console.log(this.state.isFlipped)
        this.setState({isFlipped: !this.state.isFlipped})
        console.log(this.state.isFlipped, "wtf")
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