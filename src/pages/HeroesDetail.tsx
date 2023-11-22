import { useRoute } from "wouter"
import { useHeroes } from "../hooks/useHeroes"
import { useLocation } from 'wouter'

const HeroesDetail = () => {

    const [, params] = useRoute('/heroes/:heroesName')
    const heroesName = decodeURI(params!.heroesName)
    const { getHeroesByName } = useHeroes()
    const { img, link, biography } = getHeroesByName(heroesName)
    const [, setLocation] = useLocation()

  return (
    <div className="flex flex-col items-center min-h-screen p-8 text-white bg-gray-800">
        <div className="flex flex-col md:flex-row md:gap-4 md:w-[calc(80%+1rem)] lg:w-[calc(70%+1rem)] items-center py-5 px-2 border-dashed border-2 rounded-xl">
            <div className="flex flex-col items-center w-full">
                <a href={link} target="_blank">
                    <p className="font-mono text-center font-bold-text-2xl lg:text-3xl hover:text-gray-300">
                        {heroesName}
                    </p>
                </a>
                <img src={img} className="object-cover my-3 lg:h-40 md:h-28" alt={heroesName} />
            </div>

            <p className="p-3 font-mono md:text-base lg:text-lg lg:p-0">
                {biography}
            </p>
        </div>
        <div className="py-3">
        <button className="btn btn-accent btn-outline" onClick={() => setLocation(`/heroes`)}>Back</button>
        </div>
    </div>
  )
}

export default HeroesDetail