import React from 'react';

const DisplayVolunteer = ({volunteer}) => {
    const {name, picture} = volunteer;
    return (
        <div>
            <img src={picture} alt="anImage" />
            <h4>{name}</h4>
        </div>
    );
};

export default DisplayVolunteer;