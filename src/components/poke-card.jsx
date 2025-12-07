
const Pokemon = ({data}) => {
  return ( <div>
    <div className='text-4xl font-bold duration-500 text-white'>name: {data.name}
     <img src={data.sprites?.other['official-artwork'].front_default} alt="" /> 
     </div>
</div>)
}

export default Pokemon