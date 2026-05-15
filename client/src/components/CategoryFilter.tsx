type CategoryFilterProps = {
    categories: string[]
    selectedCategory: string
    onSelectedCategory: (category:string) => void
}

function CategoryFilter({
    categories,
    selectedCategory,
    onSelectedCategory
} : CategoryFilterProps) {
  return (
    <div className="filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "filter__btn active"
                  : "filter__btn"
              }
              onClick={() => onSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
  )
}

export default CategoryFilter
