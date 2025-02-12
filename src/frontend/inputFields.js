import { useEffect, useState } from 'react';
import './frontend.css';

export default function InputFields({onAdd, editObj, onEdit, setEditObj}) {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState("");

    const addButton = () => {
        if (title.trim() === "" || desc.trim() === "") {
            alert("Both fields are required!");
            return;
        }

        const newEntry = { title, desc };
        console.log(newEntry);
        onAdd(newEntry);

        setTitle("");
        setDesc("");
     
    }

    const updateButton = () => {
        if (title.trim() === "" || desc.trim() === "") {
            alert("Both fields are required!");
            return;
        }

        const newEntry = { title, desc };
        onEdit(newEntry, editObj.index);

        setTitle("");
        setDesc("");
        setEditObj({})
    }

    useEffect(()=>{
        setTitle(editObj?.title || "");
        setDesc(editObj?.desc|| '');
    },[editObj?.title, editObj?.desc])

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
                <button className='button-add' onClick={Object.entries(editObj).length ? updateButton : addButton   }>
                {Object.entries(editObj).length ? "UPDATE" : "ADD"}
                
                </button>
            </div>
        </>
    );
}