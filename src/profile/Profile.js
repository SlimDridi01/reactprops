import React from 'react';
import PropTypes from 'prop-types';



function Profile(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ backgroundColor: "grey", color: "white" }}> Hello my Name is <span style={{ color: "red" }}>  {props.FullName}  </span> . </h1>
            <h3 > I live in {props.bio} i have {props.age} and i'm a <span style={{ color: "red", backgroundColor: "black" }}> {props.profession} </span></h3>
            {props.children}
        </div >
    )
}

export default Profile

Profile.prototypes = {
    FullName: PropTypes.string

}