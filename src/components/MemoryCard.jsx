import React from "react";

class MemoryCard extends React.Component {
    render() {
        return (
        <div className="MemoryCard">

            <div className="MemoryCardInner">

                <div className="MemoryCardBack">
                    <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"></img>
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