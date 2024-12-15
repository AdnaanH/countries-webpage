import { create } from 'zustand'
import { countries } from '../../data'

const useStore = create((set) => ({
  searchTerm: '',
  regionFilter: 'all',
  
  filteredCountries: countries,
  
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredCountries: filterCountries(countries, term, state.regionFilter)
  })),
  
  setRegionFilter: (region) => set((state) => ({
    regionFilter: region,
    filteredCountries: filterCountries(countries, state.searchTerm, region)
  })),
  
  getCountryByCode: (code) => {
    const country = countries.find(country => country.numericCode === code);
    return country || null;
  }
}))

// Helper function to filter countries
const filterCountries = (countries, searchTerm, regionFilter) => {
  return countries
    .filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((country) => {
      if (regionFilter === 'all') return true
      return country.region.toLowerCase() === regionFilter.toLowerCase()
    })
}

export default useStore 