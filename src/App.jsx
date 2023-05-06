import { useState } from 'react'
import { usePoke } from './hooks/pokeapi';
import Search from './components/Search';
import Pokemon from './components/Pokemon';

export default () => {
    const [value,setValue] = useState('');
    const { setPokeName, pokemon , loading , error } = usePoke();

    const handleChange = (e) => setValue(e.target.value);

    const handleClick = async () => {
        await setPokeName(value.toLowerCase());
        setValue('')
    }
    return (
        <>
            <Search handleChange={handleChange} handleClick={handleClick} value={value} />
            <Pokemon pokemon={pokemon} loading={loading} error={error}  />
        </>
    )
}