import React from "react";

export default function Button({user, index, removeName }) {
    return (
        <div
            className="user">
            {user.title}

            <button onClick={() => removeName(index)}>Delete</button>

        </div>
    );
}