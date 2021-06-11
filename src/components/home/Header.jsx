import React from 'react'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import styled from 'styled-components'
import img1 from '../../images/mulan.png'
import img2 from '../../images/raya.png'
import img3 from '../../images/unidos.png'

import { FaPlay } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

const StyledButtomVerAhora = styled.a`
    padding: 10px 24px 10px 24px;
    width: 195px;
    height: 48px;
    margin-left: 24px;
    margin-bottom: 62px;
    border-radius: 4px;
    background: #FED941;

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #000000;
`
const StyledButtomVerDespues = styled.a`
    padding: 10px 24px 10px 24px;
    width: 213px;
    height: 48px;
    margin-left: 16px;
    margin-bottom: 62px;
    left: 211px;
    border-radius: 4px;
    background: #0C0E16;

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #FED941;
`

const Header = () => {

    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.carousel');
    //     // var instances = M.Carousel.init(elems, options);
    //     var instance = M.Carousel.init({
    //     fullWidth: true
    //   });
    // });

    // var elem = document.querySelector('.carousel');
    // var instance = M.Carousel.init({
    //     fullWidth: true
    //   });
    // var instance = M.Carousel.init(elem, {
    //     indicators: true,
    //     duration: 400,
    //     fullWidth: true
    // })
    // $(document).ready(function(){
    //     $('.carousel').carousel()
    // })
    // setInterval(() => {
    //     console.log(instance.pressed);
    //     if (!instance.pressed) {
    //         instance.next();
    //     }
    // }, 2000)
    // var instance = M.Carousel.init({
    //     fullWidth: true,
    //     indicators: true
    //   });
    // var instance = M.Carousel.getInstance(elem);

    // setInterval(function () {
    //     instance.next();
    // }, 2000)

    var elem = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elem, {
        fullWidth: true,
        indicators: true,
        shift: -1200,
    })

    const handleClick = () =>{
        console.log("mulan1");
    }

    return (
        <div style={{ marginLeft: "78px", marginRight: "54px", marginTop: "24px" }}>
            <div className="carousel carousel-slider" style={{ height: "310px", borderRadius: "8px" }} data-indicators="true">
                <div className="carousel-item" href="#one!" style={{ borderRadius: "8px" }}>
                    <img src={img1} />
                    <div className="carousel-fixed-item " id="boton1" onClick={() => console.log("mulan1")}>
                        <StyledButtomVerAhora style={{ display: "flex" }} className="btn waves-effect amber lighten-1"><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtomVerAhora>
                    </div>
                    <div className="carousel-fixed-item" id="boton2" onClick={() => console.log("mulan2")}>
                        <StyledButtomVerDespues style={{ display: "flex" }} className="btn waves-effect darken-text-2"><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtomVerDespues>
                    </div>
                </div>
                <div className="carousel-item" href="#two!" style={{ borderRadius: "8px" }}>
                    <img src={img2} />
                    <div className="carousel-fixed-item " onClick={() => console.log("raya1")}>
                        <StyledButtomVerAhora style={{ display: "flex" }} className="btn waves-effect darken-text-2"><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtomVerAhora>
                    </div>
                    <div className="carousel-fixed-item " onClick={() => console.log("raya2")}>
                        <StyledButtomVerDespues style={{ display: "flex" }} className="btn waves-effect darken-text-2"><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtomVerDespues>
                    </div>
                </div>
                <div className="carousel-item" href="#three!" style={{ borderRadius: "8px" }}>
                    <img src={img3} />
                    <div className="carousel-fixed-item " onClick={() => console.log("unidos1")}>
                        <StyledButtomVerAhora style={{ display: "flex" }} className="btn waves-effect darken-text-2"><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtomVerAhora>
                    </div>
                    <div className="carousel-fixed-item " onClick={() => console.log("unidos2")}>
                        <StyledButtomVerDespues style={{ display: "flex" }} className="btn waves-effect darken-text-2"><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtomVerDespues>
                    </div>
                </div>
                {/* <div class="carousel-item ">
                    <a class="btn waves-effect white grey-text darken-text-2">button</a>
                </div> */}
                {/* <div class="carousel-item" href="#two!">
                    <img src={img2} />
                </div>
                <div class="carousel-item" href="#three!">
                    <img src={img3} />
                </div> */}
                {/* <a className="carousel-item" href="#one!">
                    <img src={img1} />
                </a>
                <a className="carousel-item" href="#two!">
                    <img src={img2} />
                </a>
                <a className="carousel-item" href="#three!">
                    <img src={img3} />
                </a> */}
            </div>
        </div>
    )
}

export default Header