import './Pokemon.css'
import Stats from './Stats'

export default ({pokemon , error , loading }) => {

    
    if(error) return <h2 className="info__text text-danger" >Hubo un error en la petición</h2>

    if(loading) return <h2 className="info__text text-info">Loading...</h2>
    
    if(pokemon) return (
        <div className="pokedex">
            <div className="card mb-3">
                <h3 className="card-header">{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <ul className="pokemon-stats">
                    {pokemon.stats.map((item,i) => <Stats key={i} item={item}/> )}
                </ul>
            </div>
        </div>
    )
}