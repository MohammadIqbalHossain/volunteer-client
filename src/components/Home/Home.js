import React, { useEffect, useState } from 'react';
import DisplayVolunteer from '../DisplayVolunteer/DisplayVolunteer';


const Home = () => {
    const [volunteers, setVolunteer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/volunteer')
        .then(res => res.json())
        .then(data => setVolunteer(data))
    }, [])

    return (
        <div>
            <div>
                {
                    volunteers.map(volunteer =>  <DisplayVolunteer
                    key={volunteer._id}
                    volunteer={volunteer}
                    ></DisplayVolunteer>)
                }
            </div>
        </div>
    );
};

export default Home;