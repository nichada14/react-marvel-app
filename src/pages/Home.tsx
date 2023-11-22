import { FC } from "react"

export const Home: FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-800">
        <h1 className="mt-4 font-mono text-3xl font-bold text-center text-white">
            Marvel App
        </h1>

        <img 
            src="https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="marvel" 
            className="object-cover rounded shadow-sm md:h-6/12 lg:h-2/4 my-7 shadow-blue-400"
        />
    </div>
  )
}

export default Home