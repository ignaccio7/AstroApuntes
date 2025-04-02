import { useEffect, useState } from "react"
import data from '../data/editions-vote.json'

export function Arrow({ rotated }: { rotated?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className={`${rotated ?? '-rotate-180'}`}><path fill="currentColor" stroke="transparent" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m13.04 1.429 10.218 10.216a.5.5 0 0 1 0 .708L13.04 22.571a.5.5 0 0 1-.707 0l-2.756-2.756a.5.5 0 0 1-.014-.693L14.1 14.5h-13a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h13L9.566 4.878a.5.5 0 0 1 .012-.7l2.755-2.754a.5.5 0 0 1 .707.005Z"></path></svg>
  )
}


interface Candidate {
  name: string,
  image: string,
  link: string,
  id: string
}

interface CategoryInfo {
  categoryName: string
  candidates: Candidate[]
  id: string
}

type Votes = Array<Array<number>>

export function VoteSystem() {

  const [category, setCategory] = useState(0)
  const [pageInfo, setPageInfo] = useState<CategoryInfo | undefined>()
  const [votes, setVotes] = useState<Votes>(Array.from({ length: 12 }, () => []))
  const [votesDB, setVotesDB] = useState(false)

  useEffect(() => {

    async function fetchCantidates() {
      const response = await fetch(`/api/candidates.json?category=${category}`)
      const data = await response.json()
      console.log(data);
      setPageInfo(data)
    }

    fetchCantidates()

  }, [category])

  const handleNavigation = (categoryIndex: number) => {
    if (categoryIndex < 0) categoryIndex = 11
    // if (categoryIndex > 11) categoryIndex = 0
    if (categoryIndex > 11) {
      categoryIndex = 0
      setVotesDB(true)
    }
    setCategory(categoryIndex)
  }

  const candidates = pageInfo?.candidates || []
  const categoryName = pageInfo?.categoryName || ''

  const handleVote = (
    { category, candidate }
      : { category: number, candidate: number }
  ) => {
    console.log(category);
    console.log(candidate);

    const votesCategory = votes[category]

    // if it was already voted the item, remove it
    if (votesCategory.includes(candidate)) {
      const newVotes = votesCategory.filter((vote) => vote !== candidate)
      setVotes(prevVotes => {
        // de los votos anteriores, la posicion en la que teniamos esa categoria pondra esos nuevos votos y devolvera un nuevo array con esos votos
        return prevVotes.with(category, newVotes)
      })
      return
    }

    // check if the user has already voted for this category 4 times
    if (votesCategory.length >= 4) return

    // otherwise, add the vote
    const newVotes = [...votesCategory, candidate]
    setVotes(prevVotes => prevVotes.with(category, newVotes))
  }

  const votesCategory = votes[category]

  const selectedCandidates = votes.map((vote, index) => {
    const candidate = vote.flatMap((c => data[index].candidates[c].image))
    return [data[index].categoryName, ...candidate ]
  })

  console.log('selectedCandidates');  
  console.log(selectedCandidates);
  

  return (
    <>
      <div className="relative flex flex-col items-center px-2 justify-center gap-8 mt-8 w-full">
        {
          !votesDB ? (
            <div className="votes-section flex flex-col gap-4 w-full">
              <h1 className="text-3xl text-center font-tomaso font-extralight">{categoryName}</h1>
              <h3 className="text-center">Votos Realizados {votesCategory.length} / {4} </h3>
              <div className="min-w-full grid grid-cols-2 sm:grid-cols-4 mt-4 md:grid-cols-5 gap-2 min-h-96">
                {
                  candidates.map((candidate, index) => {
                    return (
                      <button
                        key={candidate.id}
                        onClick={() => handleVote({ category, candidate: index })}
                        className={` ${votesCategory.includes(index) ? 'bg-yellow-400' : 'bg-[#1682c7] hover:bg-blue-400'} p-1 rounded-md group animate-fade-up`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* href={candidate.link} target="_blank" */}
                        <figure className=" w-full h-full flex flex-col">
                          <img
                            className=" grow w-full h-full object-cover object-center mix-blend-luminosity group-hover:mix-blend-normal"
                            src={candidate.image}
                            alt={`Imagen de ${candidate.name}`}
                          />
                          <figcaption className="text-nowrap line-clamp-1">{candidate.name}</figcaption>
                        </figure>
                      </button>
                    )
                  })
                }
              </div>
              <nav className="bg-black/50 px-4 py-2 text-white min-w-full w-full flex justify-between items-center">
                <div className="user">
                  Usuario
                </div>
                <div className="actions flex items-center gap-2">
                  <button className="cursor-pointer" onClick={() => handleNavigation(category - 1)}>
                    <Arrow />
                  </button>
                  <span className="text-xl font-semibold">
                    Categoria {category + 1} / 12
                  </span>
                  <button className="cursor-pointer" onClick={() => handleNavigation(category + 1)}>
                    <Arrow rotated />
                  </button>
                </div>
              </nav>
            </div>
          ) : (
            <div className="vota-db">
              <h1 className="text-3xl font-tomaso font-extralight text-center">Tus Votos Finales</h1>
              <div className="min-w-full grid grid-cols-2 sm:grid-cols-4 mt-4 md:grid-cols-7 gap-2 min-h-96">
                {
                  selectedCandidates.map((candidate, index) => {
                    return (
                      <button key={index} className="bg-[#1682c7] flex flex-col">
                        <div className="images grid grid-cols-2 grid-rows-2 h-56 max-h-32 overflow-hidden">
                          <img src={candidate[1]} alt="Image" className="w-full h-full object-cover" />
                          <img src={candidate[2]} alt="Image" className="w-full h-full object-cover" />
                          <img src={candidate[3]} alt="Image" className="w-full h-full object-cover" />
                          <img src={candidate[4]} alt="Image" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="grow items-center flex flex-col justify-center">{candidate[0]}</h3>
                      </button>
                    )
                  })
                }
              </div>
              <div className="actions flex flex-col mt-4 gap-2">
                <button className="bg-white text-black px-4 py-2 rounded-full w-fit mx-auto"  onClick={() => {}}>Enviar mis botos</button>
                <button onClick={() => { setVotesDB(false) }} >Quiero editar mis botos</button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}