import React, { useState } from 'react';
import { Navigate,Link } from 'react-router-dom';

function Experiment() {
    const [first, setFirst] = useState(false);

    const handleClick = () => {
        // Use the setFirst function to update the state
        setFirst(true);
    };

    if (first) {
        return <Navigate to="/afterlogin" />;
    }

    return (
        <>
            <Link class="text-success" to='/afterlogin' >Click me</Link>
        </>
    );
}

export default Experiment;

