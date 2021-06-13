import React from 'react'
import styled from 'styled-components'
import { Box, Grid } from '@chakra-ui/layout'
import CardPelis from './CardPelis'
import { useSelector } from 'react-redux'
import imgPeli1 from '../../images/Hard Kill.png'
import imgPeli2 from '../../images/Rogue.png'
import imgPeli3 from '../../images/Santana.png'
import imgPeli4 from '../../images/Unknown Origins.png'
import imgPeli5 from '../../images/Project Power.png'

const StyledBoxPeli = styled(Box)`
    width: 220px;
    height: 330px;
    margin-bottom:48px;
`

const StyledTitulo = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    text-align: left;
    letter-spacing: -0.005em;
    color: #FFFFFE;
    margin-left: 83px;
    margin-top: 56px;
`
// , display: "flex", flexWrap: "wrap" 
const ContainerMovies = () => {
    const { movies } = useSelector(state => state.movies)
    return (
        <>
            <StyledTitulo>Todas las peliculas</StyledTitulo>
            <Grid templateColumns="repeat(5, 1fr)" gap={5} style={{ marginLeft: "83px", marginRight: "83px", marginTop: "48px"}}>
                {movies.map(m => {
                    return (
                        <StyledBoxPeli key={`${m.id}`}>
                            <CardPelis portada={m.image} />
                        </StyledBoxPeli>
                    )
                })}
                {/* <StyledBoxPeli ><CardPelis portada={imgPeli2} /></StyledBoxPeli>
            <StyledBoxPeli ><CardPelis portada={imgPeli3} /></StyledBoxPeli>
            <StyledBoxPeli ><CardPelis portada={imgPeli4} /></StyledBoxPeli>
            <StyledBoxPeli ><CardPelis portada={imgPeli5} /></StyledBoxPeli>
            <StyledBoxPeli ><CardPelis portada={imgPeli1} /></StyledBoxPeli>
            <StyledBoxPeli ><CardPelis portada={imgPeli2} /></StyledBoxPeli>
            <StyledBoxPeli ><CardPelis portada={imgPeli3} /></StyledBoxPeli>
            <StyledBoxPeli ><CardPelis portada={imgPeli4} /></StyledBoxPeli>
            <StyledBoxPeli ><CardPelis portada={imgPeli5} /></StyledBoxPeli> */}
            </Grid>
        </>
    )
}

export default ContainerMovies
