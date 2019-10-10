import React from "react";
import {connect} from "react-redux";


export const Cat = (props) => {
    console.log("props from cat", props);

    return (
        <div className="cats">
            
            <img alt="image of a person" src={props.cat.avatar}/>
            <h1>First Name: {props.cat.first_name}</h1>
            <h1>Last Name: {props.cat.last_name}</h1>
            <h1>Email: {props.cat.email}</h1>
        </div>
    )

};

export default connect(state => state)(Cat);