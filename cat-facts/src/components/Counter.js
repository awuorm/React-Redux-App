import  React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Counter = ({store, increment, decrement}) => {
    return (
        <div>
            <h1>Count is {store}</h1>
            <button onClick={increment}
            >Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
};

export default connect(state => state,actionCreators)(Counter);

