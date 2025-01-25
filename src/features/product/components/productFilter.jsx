import PropTypes from "prop-types";

function ProductFilter({ onSortChange, sortOptions }) {
  return (
    <select
      className="p-2 px-5 focus:ring-4 outline-none focus:ring-primary-color rounded bg-slate-100"
      aria-label="Sort Products"
      onChange={onSortChange}
    >
      <option value="" disabled>
        Sort By
      </option>

      {sortOptions.map((obj, i) => (
        <option key={obj.id || i} value={obj.value}>
          {obj.name}
        </option>
      ))}
    </select>
  );
}

ProductFilter.propTypes = {
onSortChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default ProductFilter;
