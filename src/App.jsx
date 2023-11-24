import { useState } from "react"
import Form from "./components/Form"
import Items from "./components/Items"
import { ToastContainer, toast } from "react-toastify"

const setLocalStorage = (items) => {
  localStorage.setItem("itemList", JSON.stringify(items))
}
const App = () => {
  const defaultList = JSON.parse(localStorage.getItem("itemList") || "[]")
  const [items, setItems] = useState(defaultList)
  const addItem = (newItem) => {
    const temp = [...items, newItem]
    setItems(temp)
    toast.success("New Item added")
    setLocalStorage(temp)
  }
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    toast.success("Item removed")
    setLocalStorage(newItems)
  }

  const editItem = (id) => {
    const tempItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(tempItems)
    setLocalStorage(tempItems)
  }
  // console.log(items)
  return (
    <section className="section-center">
      {/* <h2>Grocery Bud - Starter</h2> */}
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  )
}

export default App
