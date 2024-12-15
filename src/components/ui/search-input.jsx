import { FaSearch } from "react-icons/fa"
import "./search-input.css"
import useStore from "../../store/useStore"

const SearchInput = () => {
  const searchTerm = useStore((state) => state.searchTerm)
  const setSearchTerm = useStore((state) => state.setSearchTerm)

  return (
    <div className="search-input">
      <FaSearch />
      <input 
        type="search" 
        placeholder="Search for a country..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchInput