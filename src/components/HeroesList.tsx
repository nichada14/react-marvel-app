import { useHeroes } from "../hooks/useHeroes";
import { HeroesItem } from "./HeroesItem";


export const HeroesList = () => {
    const { loading, heroes } = useHeroes();

    return (
        <div className="min-h-screen p-3 bg-gray-800">
            <h1 className="py-4 font-mono text-3xl font-semibold text-center text-white">
                Heroes
            </h1>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    heroes.map((data, i) => <HeroesItem key={i} heroes={data} />)
                )}
            </div>
        </div>
    )
}