
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Pokemon from './component/poke-card'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
 
 
  const fetchData = async () => {
    setLoading(true)
    try {
 await new Promise(res => setTimeout(res, 10000))
      const poke = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      const poked = await poke.json()
      setData(poked)
      console.log(poked)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  

  return <div className='h-screen w-screen flex justify-center items-center text-center bg-orange-400'>

    {loading && <div className='text-4xl font-bold animate-bounce text-white'>Loading...</div>}
    {data && <Pokemon data={data} /> } 

    </div>
}
export default App
