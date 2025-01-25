
import PropTypes from 'prop-types';

function SearchInput({value , onChange}) {
   // console.log('Search input rendred');
  return (
    <section className="w-full md:w-1/2 mx-auto">
          <form className="w-full"  onSubmit={(e)=>(e.preventDefault())}>
            <input
              type="search"
              className="p-3 outline-none w-full ring-0 bg-slate-100 focus:ring-4 rounded focus:ring-primary-color"
              placeholder="Search Product"
              onChange={onChange}
              value={value}
              aria-label="Search Products"
            />
          </form>
        </section>

  )
}
SearchInput.propTypes = {
        value : PropTypes.string.isRequired,
        onChange : PropTypes.func.isRequired
}

export default SearchInput