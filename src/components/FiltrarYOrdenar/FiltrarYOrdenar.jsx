import { useState} from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { VscSettings } from "react-icons/vsc";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";


export const FiltrarYOrdenar = ({ itemsArray, setProductsFiltred, setSubtitle, setTitle}) => {
    const [value, setValue] = useState('1');
    const {items} = useGetAllProducts()
    const [tipoProductoGenero, setTipoProductoGenero] = useState('')

    // logica para ordenar productos
    const ordenarPor = (orden) => {
        const productosOrdenados = [...itemsArray];
        if (orden === 'menor') {
            productosOrdenados.sort((a, b) => a.price - b.price);
        } else if (orden === 'mayor') {
            productosOrdenados.sort((a, b) => b.price - a.price);
        } else if (orden === 'rating') {
            productosOrdenados.sort((a, b) => b.rating - a.rating);
        }
        setProductsFiltred(productosOrdenados);
    };

    // logica para filtrar productos por género
    const filtrarPorGenero = (genero, subTitle) => {
        let productosFiltrados = [...items];
        if (genero == 'man' || genero == 'woman') {
            productosFiltrados = productosFiltrados.filter(item => (item.gender === genero || item.gender === 'unisex') && item.category === tipoProductoGenero);
            }
        if (genero == 'kids') {
        productosFiltrados = productosFiltrados.filter(item => item.gender === genero && item.category === tipoProductoGenero);
        }
        if (genero == 'all') {
            productosFiltrados = productosFiltrados.filter(item => item.category === tipoProductoGenero);
            }
        setSubtitle(`/ ${subTitle}`);
        setProductsFiltred(productosFiltrados);
    };

    // lgica para filtrar productos por tipo
    const filtrarPorTipoProducto = (tipoProducto, title) => {
        let productosFiltrados = [...items];
        setTitle(`${title}`)
        setSubtitle('');
        productosFiltrados = productosFiltrados.filter(item => item.category === tipoProducto);
        setTipoProductoGenero(`${tipoProducto}`)
        setProductsFiltred(productosFiltrados)
        if (tipoProducto == 'Todos') {setProductsFiltred(items)};
    };

    return (
        <div id="containerFiltrarYOrdenar">
            <h3>FILTRAR Y ORDENAR<VscSettings /></h3>
            <Accordion allowToggle>
                <AccordionItem style={{ backgroundColor: 'white', border: '1px solid black', borderTop: 'none' }}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontSize={'13px'}>ORDENAR POR</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='column'>
                                <div onClick={() => ordenarPor('menor')}>
                                    <Radio value='1' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Menor a Mayor (PRECIO)</Radio>
                                </div>
                                <div onClick={() => ordenarPor('mayor')}>
                                    <Radio value='2' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Mayor a Menor (PRECIO)</Radio>
                                </div>
                                <div onClick={() => ordenarPor('rating')}>
                                    <Radio value='3' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Valoración</Radio>
                                </div>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={{ backgroundColor: 'white', border: '1px solid black', borderTop: 'none' }}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontSize={'13px'}>FILTRAR POR GENERO</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='column'>
                                <div onClick={() => filtrarPorGenero('man', 'Hombres')}>
                                    <Radio value='4' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Hombre</Radio>
                                </div>
                                <div onClick={() => filtrarPorGenero('woman', 'Mujeres')}>
                                    <Radio value='5' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Mujer</Radio>
                                </div>
                                <div onClick={() => filtrarPorGenero('kids', 'Niños')}>
                                    <Radio value='6' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Niños</Radio>
                                </div>
                                <div onClick={() => filtrarPorGenero('all', 'Todos')}>
                                    <Radio value='7' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Todos</Radio>
                                </div>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={{ backgroundColor: 'white', border: '1px solid black', borderTop: 'none' }}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontSize={'13px'}>FILTRAR POR TIPO DE PRODUCTO</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='column'>
                                <div onClick={() => filtrarPorTipoProducto('Todos', 'Todos')}>
                                    <Radio value='8' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Todos</Radio>
                                </div>
                                <div onClick={() => filtrarPorTipoProducto('jersey', 'Camisetas')}>
                                    <Radio value='9' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Camisetas</Radio>
                                </div>
                                <div onClick={() => filtrarPorTipoProducto('short', 'Shorts')}>
                                    <Radio value='10' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Shorts</Radio>
                                </div>
                                <div onClick={() => filtrarPorTipoProducto('shirt', 'Remeras y Chombas')}>
                                    <Radio value='11' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Remeras y Chombas</Radio>
                                </div>
                                <div onClick={() => filtrarPorTipoProducto('jacket', 'Camperas')}>
                                    <Radio value='12' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Camperas</Radio>
                                </div>
                                <div onClick={() => filtrarPorTipoProducto('tracksuit&hoodies', 'Buzos')}>
                                    <Radio value='13' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Buzos</Radio>
                                </div>
                                <div onClick={() => filtrarPorTipoProducto('trouser', 'Pantalones')}>
                                    <Radio value='14' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Pantalones</Radio>
                                </div>
                                <div onClick={() => filtrarPorTipoProducto('football-boots', 'Botines')}>
                                    <Radio value='15' style={{ border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}}>Botines</Radio>
                                </div>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};
