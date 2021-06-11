import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
const StyledImagePeli = styled.img`
    width: 220px;
    height: 330px;
`
const StyledEtiquetaPEli = styled.span`
    background: #000000 !important;
    opacity: 0.64 !important;
    border: 3px solid #0E3FA9 !important;
    box-sizing: border-box !important;
    backdrop-filter: blur(130px) !important;
    bottom: 240px !important;
    height: 64px !important; 
    width: 114px !important;

`

const CardPelis = ({ portada }) => {
    return (
        // <div style={{ width: "220px", height: "330px" }}>
        //     <div className="card card-content" style={{ borderRadius: "8px" }}>
        //         <div className="card-image waves-effect waves-block waves-light activator" >
        //             <StyledImagePeli className="activator" src={portada} />
        //         </div>
        //         <div className="card-content" style={{ height: "30px", paddingTop: "5px", background: "#00000057" }}>
        //             <span className="card-title activator grey-text text-darken-4">Hard Kill<i className="material-icons right">more_vert</i></span>
        //         </div>
        //         <div className="card-reveal" style={{ background: "rgb(255 255 255 / 78%)" }}>
        //             <span className="card-title grey-text text-darken-4">Descripción<i className="material-icons right">close</i></span>
        //             <p>Traducción del inglés-Hard Kill es una película de suspenso de acción estadounidense de 2020 dirigida por Matt Eskandari y protagonizada por Jesse Metcalfe, Bruce Willis y Natalie Eva Marie. Fue lanzado el 21 de agosto de 2020 por Vertical Entertainment..</p>
        //         </div>
        //     </div>
        // </div>


        <div class="row">
            <div class="col s12 m7" style={{ width: "220px", height: "330px"}}>
                <div class="card" style={{ borderRadius: "8px" }}>
                    <div class="card-image" >
                        <StyledImagePeli src={portada} />
                        <span class="card-title" style={{
                            background: "#000000",
                            opacity: "0.64",
                            borderRadius: "0px 30px 30px 0px",
                            border: "solid #0E3FA9",
                            // border: "solid #FED941",
                            boxSizing: "border-box",
                            backdropFilter: "blur(130px)",
                            bottom: "240px",
                            height: "64px",
                            width: "114px",

                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "28px",
                            lineHeight: "34px",
                            textAlign: "center",
                            letterSpacing: "0.01em",
                            color: "#FFFFFE",

                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "0px"
                        }}> <FaStar style={{ color: "#FED941", marginRight:"8px" }} /> 7.1</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardPelis
