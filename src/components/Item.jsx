export default function Item({
  item: { id, isEditing, value },
  handleDelete,
  handleDoubleClickOnBlur,
  handleEdit,
}) {
  return (
    <li id={id}>
      <div className="padding-div">&#62;</div>
      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={value}
          onBlur={(e) => handleDoubleClickOnBlur(e, true)}
          onChange={(e) => handleEdit(e)}
          autoFocus
        />
      ) : (
        <span
          className="list-item"
          title="Double Click to Edit"
          onDoubleClick={(e) => handleDoubleClickOnBlur(e, false)}
        >
          {value}
        </span>
      )}
      <button className="btn btn-del" onClick={(event) => handleDelete(event)}>
        X
      </button>
    </li>
  );
}
