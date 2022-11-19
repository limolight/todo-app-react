export default function Item(props) {
  return (
    <li id={props.id}>
      <div className="padding-div">&#62;</div>
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
        <span className="list-item" title="Double Click to Edit" onDoubleClick={(e) => props.handleDoubleClick(e)} >
          {props.value}
        </span>
      )}
      <div
        className="btn btn-del"
        onClick={(event) => props.handleDelete(event)}
      >X
      </div>
    </li>
  );
}
