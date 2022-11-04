import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const inputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSumbit = (e) => {
        e.preventDefault()
        if( inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim()) // Esto sería como esto: onAddCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={onSumbit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(event)=> inputChange(event)}
        />
    </form>
  )
}
