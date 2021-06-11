import React from 'react'
import logo from '../../images/logo-blockBuster.png'
import styled from 'styled-components'
import { Button, Input } from '@chakra-ui/react'
import { IoMdSearch } from 'react-icons/io'

const StyledNavLogo = styled.img`
    width: 106.81px;
    height: 64px;
    margin-left: 83px;
    margin-top: 24px;
    margin-bottom: 24px;
`

const StyledNavLinks = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin-top: 46px;
    margin-bottom: 46px;
    margin-left:48px;
    &:active{
        color: #FED941;
        text-decoration-line: underline;
    }
    
`

const NavBar = () => {
    return (
        <>
            <nav style={{ height: "112px", background: "#0F0E17", border: "none" }}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><StyledNavLogo src={logo} /></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><StyledNavLinks href="#">Todas</StyledNavLinks></li>
                        <li><StyledNavLinks href="#">Más valoradas</StyledNavLinks></li>
                        <li><StyledNavLinks href="#" style={{ marginRight: "48px" }}>Menos valoradas</StyledNavLinks></li>
                        <li>
                            <form>
                                <div className="input-field" style={{ display: "flex", marginTop: "34px", marginBottom: "34px", height: "22px" }}>
                                    <Input variant="outline" placeholder="Busca tu pelicula favorita" style={{ background: "white", padding: "11px 12px", width: "358px", borderRadius: "8px 0px 0px 8px", color: "black" }} />
                                    <Button style={{ marginRight: "83px", background: "#FED941", width: "72px", height: "44px", borderRadius: "0px 4px 4px 0px" }}><IoMdSearch style={{ color: "black", fontSize: "24px" }} /></Button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </>
    )
}

export default NavBar
