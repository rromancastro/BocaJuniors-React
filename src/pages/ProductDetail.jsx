import { useParams } from "react-router"
import { Layout } from "../layouts"
import { useGetProductById, useGetProductsByCategory } from "../hooks"
import { ItemListContainer, Loader, SizeSelector } from "../components"
import AdidasLogo from '../assets/icons/adidas.svg'
import { FaCartPlus } from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"

export const ProductDetail = () => {
    const {id, category} = useParams()
    const {product, loading} = useGetProductById(id)
    const {items} = useGetProductsByCategory(category)

    const [nombrePersonalizarCamiseta, setNombrePersonalizarCamiseta] = useState('')
    const [numeroPersonalizarCamiseta, setNumeroPersonalizarCamiseta] = useState('')
    const [colorPersonalizarCamiseta, setColorPersonalizarCamiseta] = useState('#fafafa')
    const [advertenciaNumero, setAdvertenciaNumero] = useState('')

    //logica rating
    function Rating({ rating}) {
        return (
          <Box display="flex" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => {
                const roundedRating = Math.round(rating * 2) / 2
                if (roundedRating - i >= 1) {
                  return (
                    <BsStarFill
                      key={i}
                      style={{ marginLeft: '1' }}
                      color={i < rating ? '#2d2d2d' : '#b9b9b9'}
                    />
                  )
                }
                if (roundedRating - i === 0.5) {
                  return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
                }
                return <BsStar key={i} style={{ marginLeft: '1' }} />
              })}
          </Box>
        )
      }

      //LOGICA CARRITO
    const [count, setCount] = useState(0);
    const { addItem, removeItem } = useContext(CartContext);
  
    const handleAddProduct = () => {
      setCount(count + 1);
      addItem(product);
    };


    return (
        <>{
            loading ? <Loader /> :
            <Layout>
                <section id="productDetail">
                    <div id="productDetailImages">
                        <img src={product.images[0]} alt="" />
                        <img src={product.images[1]} alt="" />
                    </div>
                    <div id="productDetailInfo">
                        <div id="productDetailInfoBrand">
                            <img src={AdidasLogo} alt="" />
                            <h3>adidas</h3>
                        </div>
                        <div>
                            <h1>{product.title}</h1>
                            <p id="productDetailInfoCategoryAndGender">{product.category} - {product.gender}</p>
                        </div>
                        <Rating rating={product.rating}/>
                        <h2 id="productDetailInfoPrice">${product.price}</h2>
                        <div id="sizeSelectorContainer">
                            <h2>Size / Tamaño</h2>
                            <SizeSelector typeProduct={product.category} gender={product.gender}/>
                        </div>
                        <button id="productDetailInfoButton" onClick={() => handleAddProduct()}><FaCartPlus id="cartIcon" /><p>Agregar Al Carrito</p></button>
                    </div>
                </section>
                {
                  product.category == 'jersey' ? 
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton padding={'0'}>
                            <div id="personalizarJerseyButton">
                              <h2>Personalizar (GRATIS)</h2>
                              <AccordionIcon />
                            </div>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                              <section id="personalizarJersey">
                                <div>
                                  <img src={product.images[1]} alt="" />
                                    <div id="personalizarJerseyResultado">
                                      <p style={{color: colorPersonalizarCamiseta}}>{nombrePersonalizarCamiseta}</p>
                                      <p style={{color: colorPersonalizarCamiseta}}>{numeroPersonalizarCamiseta}</p>
                                    </div>
                                </div>
                                  <div id="personalizarJerseyUtilities">
                                      <p>Añadí un nombre o número para personalizar tu producto adidas o crear el regalo perfecto.</p>
                                      <h3>Nombre (Maximo 10 letras)</h3>
                                      <input type="text" maxLength="10" onKeyUpCapture={(event) => {setNombrePersonalizarCamiseta(event.target.value)}}/>
                                      <h3>Dorsal (0 - 99) <span>{advertenciaNumero}</span></h3>
                                      <input type="text" maxLength="2" step="1" onKeyUpCapture={(event) => {setNumeroPersonalizarCamiseta(event.target.value), !isNaN(event.target.value) ? setAdvertenciaNumero('') : setAdvertenciaNumero('Aviso: el dorsal seleccionado no es un numero')}} />
                                      <div id="personalizarJerseyColor">
                                        <h3>Color</h3>
                                        <div>
                                          <button onClick={() => setColorPersonalizarCamiseta('#fafafa')}></button>
                                          <button onClick={() => setColorPersonalizarCamiseta('#06338D')}></button>
                                          <button onClick={() => setColorPersonalizarCamiseta('black')}></button>
                                          <button onClick={() => setColorPersonalizarCamiseta('#EACC00')}></button>
                                        </div>
                                      </div>
                                  </div>
                              </section>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                   : null
                }
                <section id="productosRelacionados">
                  <h2>Productos Relacionados</h2>
                  <ItemListContainer products={items} id={'itemListContainerOriginals'}/>
                </section>



            </Layout>
        }</>
    )
}