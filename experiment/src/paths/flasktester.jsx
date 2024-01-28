import React from 'react';

function Flasktester() {
    async function handleClick2(event) {
        try {
            const res = await fetch("http://localhost:8000/summary", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "data":[56,1,3,125,233,1,0,180,0,2.3,0,0,5]

                }),
            });

            if (res.ok) {
                const data = await res.text(); // Use text() instead of json()
                console.log("API Response:", data);
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return (
        <button onClick={handleClick2}>flasktester</button>
    );
}

export default Flasktester;
