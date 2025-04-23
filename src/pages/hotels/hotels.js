import React, { useEffect } from "react";

const Hotels = () => {

    useEffect(() => {
        fetch('/static/db.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return (
        <div>
            <h2>Hotels page</h2>
            <div>Loading...</div>
        </div>

    )


}

export default Hotels;