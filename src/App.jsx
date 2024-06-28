import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      
      <h1 className='text-6xl text-purple-600'>Coffee Store: {coffees.length}</h1>
      <div className='p-24 grid md:grid-cols-2'>
        {
          loadedCoffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
      
    </>
  )
}

export default App
