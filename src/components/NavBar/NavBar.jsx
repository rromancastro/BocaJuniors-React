import Logo from '../../assets/icons/escudo.png'
import Adidas from '../../assets/icons/adidas.svg'
import { FaSearch } from "react-icons/fa";
import arrayCategories from "../../helpers/categoriesArray"
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router';
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react"

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {

    //logica barra categorias
    const { isOpen, onOpen, onClose } = useDisclosure()

    //logica search
    const [searchValue, setSearchValue] = useState("")
    
    return (
        <>
        <nav id="nav">
            <div id='navBarBrand'>
                <Link to={'/'}><img src={Logo} alt="logo" /></Link>
                <div>
                    <h3>Boca</h3>
                    <h4>STORE</h4>
                </div>
            </div>
            <span id='laMitadMas1'>LA MITAD +1</span>
            <div id='navUtilities'>
                <div id='searchContainer'>
                    <input type="text" placeholder='Buscar' onKeyUpCapture={(event)=>{setSearchValue(event.target.value)}}/>
                    
                    <Link to={`/products/search/${searchValue}`}>
                    <FaSearch color='#fafafa' id='searchIcon'/>
                    </Link>
                </div>
                    <CartWidget/>
                <>
                    <GiHamburgerMenu onClick={onOpen} style={{cursor: 'pointer'}}/>
                    <Drawer isOpen={isOpen} placement='right' onClose={onClose} >
                        <DrawerOverlay />
                        <DrawerContent style={{backgroundColor: '#fafafa'}}>
                        <DrawerBody display={'flex'} flexDir={'column'}>
                            <div id='drawerHeader'>
                                <img src={Adidas} alt="" />
                                <img src={Logo} alt="" />
                                <DrawerCloseButton color="black"/>
                            </div>
                            <div id='searchContainerDrawer'>
                                <input type="text" placeholder='Buscar' onKeyUpCapture={(event)=>{setSearchValue(event.target.value)}}/>
                                
                                <Link to={`/products/search/${searchValue}`}>
                                <FaSearch fill='#000000' id='searchIcon'/>
                                </Link>
                            </div>
                            <div id='drawerBody'>{
                                arrayCategories.map((category) => {
                                    return <Link key={category.slug} to={category.link}><p>{category.name.toLowerCase()} <IoIosArrowForward /></p></Link>
                                })
                            }</div>
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    </>
            </div>
        </nav>
        <div style={{height: '3vh', backgroundColor: '#02236D'}}></div>
        </>
    )
} 