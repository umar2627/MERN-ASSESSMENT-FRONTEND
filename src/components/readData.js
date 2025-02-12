import "./frontend.css";
export default function ReadData({
  entries,
  onDeleteHandler,
  editButtonHandler,
}) {
  return (
    <>
      {entries.length === 0 ? (
        <p className="data">No data available</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} className="data">
            <span>Title: {entry.title}</span>
            <p>Desc: {entry.desc}</p>
            <button onClick={() => editButtonHandler(entry, index)}>
              Edit
            </button>
            <button onClick={() => onDeleteHandler(index)}>Delete</button>
          </div>
        ))
      )}
    </>
  );
}
