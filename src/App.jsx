
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
 
 
  const fetchData = async () => {
    setLoading(true)
    try {
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
  

  return <div className='h-screen w-screen bg-orange-400'>

    <h1 className='text-4xl font-bold text-white'>Hello World</h1>
    {loading && <div className='text-4xl font-bold text-white'>Loading...</div>}
    {data && <div className='text-4xl font-bold text-white'>Data: {data.name}
     <img src={data.sprites?.other['official-artwork'].front_default} alt="" /> </div>}  

    </div>
}
export default App
