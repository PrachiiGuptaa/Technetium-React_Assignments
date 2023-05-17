import React, { useState} from 'react';

export default function CreateUser({ addUser }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addUser(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new user"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}