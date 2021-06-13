import React, { useEffect } from 'react'
import M from "materialize-css";
import styled from 'styled-components'
import img1 from '../../images/mulan.png'
import img2 from '../../images/raya.png'
import img3 from '../../images/unidos.png'

import { FaPlay } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

const StyledButtom = styled.a`
    padding: 10px 24px 10px 24px;
    height: 48px;
    margin-bottom: 62px;
    border-radius: 4px;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    display: flex;

    /* @media(max-width:460px){
        position: absolute;
        top:"0";
    } */
`

const StyledContainerCarousel = styled.div`
    margin-left: 78px;
    margin-right: 54px;
    margin-top: 24px;
    
    border-radius: 8px !important;
    @media(max-width:460px){
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
    }
`

const StyledCarouserSlider = styled.div`
    height: 365px !important;
    @media(max-width:460px){
        height: 150px !important;
    }
`
const Header = () => {
    useEffect(() => {
        // document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true,
                shift: -1200,
            })
        // })
    }, [])


    return (
        <StyledContainerCarousel>
            <StyledCarouserSlider className="carousel carousel-slider" data-indicators="true">
                <div className="carousel-item active" style={{ borderRadius: "8px" }}>
                    <img src={img1} />
                    <div className="carousel-fixed-item" style={{ display: "flex" }}>
                        <StyledButtom onClick={() => console.log("mulan1")} className="btn" style={{ width: "195px", marginLeft: "24px", background: "#FED941", color: "#000000" }}
                        ><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtom>
                        <StyledButtom onClick={() => console.log("mulan2")} className="btn " style={{ width: "213px", marginLeft: "16px", background: "#0C0E16", color: "#FED941" }}><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtom>
                    </div>
                </div>
                <div className="carousel-item" href="#two!" style={{ borderRadius: "8px" }}>
                    <img src={img2} />
                    <div className="carousel-fixed-item " style={{ display: "flex" }}>
                        <StyledButtom onClick={() => console.log("raya1")} className="btn" style={{ width: "195px", marginLeft: "24px", background: "#FED941", color: "#000000" }}><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtom>
                        <StyledButtom onClick={() => console.log("raya2")} className="btn" style={{ width: "213px", marginLeft: "16px", background: "#0C0E16", color: "#FED941" }}><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtom>
                    </div>
                </div>
                <div className="carousel-item" href="#three!" style={{ borderRadius: "8px" }}>
                    <img src={img3} />
                    <div className="carousel-fixed-item " style={{ display: "flex" }}>
                        <StyledButtom onClick={() => console.log("unidos1")} className="btn" style={{ width: "195px", marginLeft: "24px", background: "#FED941", color: "#000000" }}><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtom>
                        <StyledButtom onClick={() => console.log("unidos2")} className="btn" style={{ width: "213px", marginLeft: "16px", background: "#0C0E16", color: "#FED941" }}><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtom>
                    </div>
                </div>
            </StyledCarouserSlider>
        </StyledContainerCarousel>
    )
}

export default Header