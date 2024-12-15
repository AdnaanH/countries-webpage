import ContinentSelector from "../ui/continent-selector"
import SearchInput from "../ui/search-input"
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <section className="search-bar">
      <SearchInput />
      <ContinentSelector />
    </section>
  )
}

export default SearchBar