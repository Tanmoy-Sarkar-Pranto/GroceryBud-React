import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { nanoid } from "nanoid"

const Form = ({ addItem }) => {
  const [temp, setTemp] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!temp) {
      toast.error("Task is empty", {
        toastId: "error1",
      })
    } else {
      const item = { id: nanoid(), name: temp, completed: false }
      addItem(item)
    }
    setTemp("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Buddy</h4>
        <div className="form-control">
          <input
            type="text"
            name="item"
            id="item"
            className="form-input"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      {/* <ToastContainer position="top-center" /> */}
    </>
  )
}
export default Form
