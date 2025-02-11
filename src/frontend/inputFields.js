import { useState } from 'react';
import './frontend.css';

export default function InputFields() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const addButton = () => {
        if (title.trim() === "" || desc.trim() === "") {
            alert("Both fields are required!");
            return;
        }

        const newEntry = { title, desc };
        console.log(newEntry);

        setTitle("");
        setDesc("");
    }

    return (
        <>
            <div>
                <label><b>Title:</b> </label>
                <input className="inputs" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label><b>Desc:</b> </label>
                <textarea className="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div>
                <button onClick={addButton}>ADD</button>
            </div>
        </>
    );
}