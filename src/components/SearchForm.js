import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { SetSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const searchCocktail = () => {
    SetSearchTerm(searchValue.current.value)
  }
  const handelSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handelSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>
            Search your favorite cocktail
          </label>
          <input type='text' id='name' ref={searchValue} onChange={searchCocktail} />
        </div>

      </form>
    </section>
  )
}

export default SearchForm
