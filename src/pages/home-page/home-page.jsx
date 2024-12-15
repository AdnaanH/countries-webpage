import CountriesList from "../../components/Countries/CountriesList"
import SearchBar from "../../components/Search/SearchBar"
import "./home-page.css"

const HomePage = () => {
  return (
    <main>
      <SearchBar />
      <CountriesList />
    </main>
  )
}

export default HomePage