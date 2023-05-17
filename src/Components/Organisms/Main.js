import React, { useState } from 'react';
import CreateUser from './../Molecules/CreateUser';
import Button from '../Atoms/Button';
import './Main.css'

function Main() {
    const [name, setName] = useState([
        {
            title: "Prachi",
        },
        {
            title: "Shweta"
        },
        {
            title: "Ankita",
        }
    ]);

    const addUser = title => {
        const newName = [...name, {title}];
        setName(newName);
    };

    const removeName = index => {
        const newName = [...name];
        newName.splice(index, 1);
        setName(newName);
    };

    return (
        <div className="container">
            <div className="header">Remove Names</div>
            <div>
                {name.map((user, index) => (
                    <Button
                    user={user}
                    index={index}
                    removeName={removeName}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-user" >
                <CreateUser addUser={addUser} />
            </div>
        </div>
    );
}

export default Main;