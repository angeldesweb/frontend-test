import { useState, useEffect } from 'react'

export const usePoke = () => {
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState(null)
    const RandomId = Math.floor(Math.random() * 806 + 1)
    const [ pokeName, setPokeName ] = useState(RandomId)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => res.json())
            .then(data => {
            setPokemon(data)
            setLoading(false)
            setError(false)
        })

        .catch(err => {
            setLoading(false)
            setError(true)
        })
    }, [pokeName])

    return {
        error,
        loading,
        pokemon,
        setPokeName
    }
}