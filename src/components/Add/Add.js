import React from 'react';

const Add = () => {

    const add = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const link = event.target.link.value;

        // const url = `http://localhost:5000/volunteers`;
        fetch('http://localhost:5000/volunteers', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(name, link) 

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("inserted");
            })
    }

    return (
        <div>
            <form onSubmit={add}>
                <input type="text" name='name' placeholder='Your name' />
                <br />
                <input type="text" name='link' placeholder='image Link' />
                <br />
                <input type="submit" value='submit' />

            </form>
        </div>
    );
};

export default Add;