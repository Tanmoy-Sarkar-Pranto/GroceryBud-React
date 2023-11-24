import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

const SingleItem = (item) => {
  // console.log(typeof item.removeItem)
  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => item.editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        onClick={() => item.removeItem(item.id)}
        className="btn remove-btn"
      >
        Remove
      </button>
      {/* <ToastContainer position="top-center" /> */}
    </article>
  )
}
export default SingleItem
