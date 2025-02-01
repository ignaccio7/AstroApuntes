import { useSearchStore } from "@/store/searchStore"
import { useEffect, useState } from "react"

export function SearchIcon() {
  return (
    <svg className="absolute top-0 bottom-0 left-3 flex items-center" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path></svg>
  )
}

export function SearchBox() {
  const { search, setSearch } = useSearchStore()
  const [location, setLocation] = useState('')

  const handleSearch = (event) => {
    const newSearch = event.target.value

    setSearch(newSearch)
    const url = new URL(location)

    if (newSearch === '') {
      url.searchParams.delete('q')      
    }else {
      url.searchParams.set('q', newSearch)
    }
    window.history.pushState({}, '', url)    
  }

  useEffect(() => {
    setLocation(window.location.href)

    const url = new URL(window.location.href)
    const search = url.searchParams.get('q')
    setSearch(search)
  }, [])

  return (
    <div className="w-full max-w-72">
      <label htmlFor="search" className="relative text-zinc-400">
        <input
          defaultValue={search}
          onChange={handleSearch}
          className="w-full bg-zinc-700 pr-4 pl-10 py-2 rounded-full text-white"
          id="search"
          type="search"
          placeholder="¿Que quieres escuchar?"
        />
        <SearchIcon />
      </label>
    </div>
  )
}