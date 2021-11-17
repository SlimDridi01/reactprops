import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';


function Profile({ FullName, bio, age, profession }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ backgroundColor: "grey", color: "white" }}> Hello my Name is <span style={{ color: "red" }}>  {FullName}  </span> . </h1>
            <h3 > I live in {bio} i have {age} and i'm a <span style={{ color: "red", backgroundColor: "black" }}> {profession} </span></h3>
            <Photo />

        </div >
    )
}

export default Profile

Profile.prototypes = {
    FullName: PropTypes.string

}