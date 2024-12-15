import { FaGlobe } from "react-icons/fa"
import "./continent-selector.css"
import useStore from "../../store/useStore"

const ContinentSelector = () => {
  const regionFilter = useStore((state) => state.regionFilter)
  const setRegionFilter = useStore((state) => state.setRegionFilter)

  return (
    <div className="continent-selector">
      <FaGlobe />
      <select
        value={regionFilter} 
        onChange={(e) => setRegionFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}

export default ContinentSelector