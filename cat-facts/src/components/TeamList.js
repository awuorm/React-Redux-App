import React from "react";
import {connect} from "react-redux";
import Cat from "./Cat";


export const TeamList = (props) => {

    return (
        <div>
            <h1> Dream Team and their ability to count!</h1>
            {props.moreCats.catFacts.map((cat) => <Cat cat={cat} key={cat.id}/>)}

        </div>
    )

};

export default connect(state => state)(TeamList);

