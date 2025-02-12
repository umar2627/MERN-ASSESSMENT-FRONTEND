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
          <div key={entry._id} className="data">
            <span>Title: {entry.title}</span>
            <p>Desc: {entry.desc}</p>
            <button onClick={() => editButtonHandler(entry, entry._id)}>
              Edit
            </button>
            <button onClick={() => onDeleteHandler(entry._id)}>Delete</button>
          </div>
        ))
      )}
    </>
  );
}
