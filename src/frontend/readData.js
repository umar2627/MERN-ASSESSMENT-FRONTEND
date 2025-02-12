
import './frontend.css';
export default function ReadData({ entries, handleDelete, handleEdit}) {
console.log(entries,'entries');

    return (
        <>
            {entries.length === 0 ? (
                <p className='data'>No data available</p>
            ) : (
                entries.map((entry, index) => (
                    <div key={index} className="data">
                        <span>Title: {entry.title}</span>
                        <p>Desc: {entry.desc}</p>
                        <button 
                        onClick={() => handleEdit(entry, index)}
                        >Edit</button> 
                        <button onClick={() => handleDelete(index)} >Delete</button>
                    </div>
                ))
            )}
        </>
    );
}
