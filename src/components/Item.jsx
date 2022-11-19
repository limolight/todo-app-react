export default function Item(props) {
  return (
    <li id={props.id}>
      {props.isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={props.value}
          onBlur={(e) => props.handleBlur(e)}
          onChange={(e) => props.handleEdit(e)}
          autoFocus
        />
      ) : (
        <span title="Double Click to Edit" onDoubleClick={(e) => props.handleDoubleClick(e)} >
          {props.value}
        </span>
      )}
      <button
        className="btn-del"
        onClick={(event) => props.handleDelete(event)}
      >
        X
      </button>
    </li>
  );
}
