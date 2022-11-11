import { useState } from "react"
import PropTypes from 'prop-types'

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
    <form onSubmit={onSumbit} aria-label="form">
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(event)=> inputChange(event)}
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}