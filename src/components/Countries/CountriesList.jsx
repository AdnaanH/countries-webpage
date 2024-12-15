import Card from "../ui/card"
import "./CountriesList.css"
import useStore from "../../store/useStore"

const CountriesList = () => {
  const filteredCountries = useStore((state) => state.filteredCountries)

  return (
    <section className="countries">
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
          <Card key={country.name} country={country} />
        ))
      ) : (
        <p>No countries found matching your criteria.</p>
      )}
    </section>
  )
}

export default CountriesList