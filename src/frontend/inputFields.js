
import './frontend.css';

export default function InputFields() {

    return (
        <>
            <div>
                <label><b>Title:</b> </label>
                <input className="inputs" />
            </div>
            <div>
                <label><b>Desc:</b> </label>
                <textarea className="textarea" />
            </div>
            <div>
                <button>ADD</button>
            </div>
        </>
    );
}