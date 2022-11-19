import {useState} from "react";
import { nanoid } from 'nanoid';

export default function ListInput(props) {
  
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  console.log("", value)
  return(
      <form className="list-input-form" onSubmit={(e) => (props.handleSubmit(value, e), setValue(""))}>
        <input className="list-input" type="text" autoComplete="off" autoFocus placeholder="Add an item" onChange={handleChange} value={value}/>
        <input className="btn btn-list-input" type="submit" value="Submit" />
      </form>
  )
}