import SearchForm from "../components/SearchForm"

import { useDataContext } from "../hooks/useDataContext"


const SearchPage = () => {
const { data, error, loading } = useDataContext();
console.log(data);
  return (
    <>
    <SearchForm petshops={data}/>
    </>
  )
}

export default SearchPage