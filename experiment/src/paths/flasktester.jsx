import React, { useEffect, useState } from 'react';

function Flasktester() {
    async function handleClick2(event) {
        try {
            const res = await fetch("http://localhost:8000/hello", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: 'Hello',
                    password: 'password',
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
        <button >flasktester</button>
    );
}

export default Flasktester;
