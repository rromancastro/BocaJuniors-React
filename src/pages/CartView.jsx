import { useContext } from "react"
import { FaTrash } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import { CartContext } from "../contexts/CartContext";
import { Layout } from "../layouts";

export const CartView = () => {

    const {cartState, addItem, removeItem, deleteItem} = useContext(CartContext)
    const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);

    function handleAddItem(product) {
        addItem(product)
    }

    function handleRemoveItem(product) {
        product.qtyCartItem > 1 ? removeItem(product) : null
    }

    function handleDeleteItem(productId) {
        deleteItem(productId)
    }

    return (
        <Layout>
            {cartState.reduce((acumulador, item) => acumulador + item.price * item.qtyCartItem , 0) == 0 ? 
            <Flex width={'100%'} height={'90vh'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#F5F5F5'}>
                <h1 style={{color: 'black'}}>
                Tu carrito esta vacio, vamos a llenarlo!</h1>
            </Flex> :
            <section id="cartView">
            <h1 id="cartViewTitle">TU CARRITO</h1>
                <div id="cartViewInfo">
                    <div id="productsView">
                        {
                            cartState.map((data) => {
                                return (
                                    <article id="productCartView" key={data.id}>
                                        <img src={data.images[0]} alt={data.id} />
                                        <div id="productCartViewInfo">
                                            <h2>{data.title}</h2>
                                            <h3>${data.price}</h3>
                                            <div id="quantitySelect"><button onClick={() => {handleRemoveItem(data)}}>-</button><p>{data.qtyCartItem}</p><button onClick={() => {handleAddItem(data)}}>+</button></div>
                                        </div>
                                        <div id="subtotal">
                                            <h3>Subtotal: ${data.price * data.qtyCartItem}</h3>
                                            <button onClick={() => {handleDeleteItem(data.id)}}><FaTrash color="red"/></button>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                    <div id="resumenPedido">
                        <h2>RESUMEN DEL PEDIDO</h2>
                        <div>
                            <p>{totalItems} productos</p>
                            <p>${cartState.reduce((acumulador, item) => acumulador + item.price * item.qtyCartItem , 0)}</p>
                        </div>
                        <div>
                            <p>Costo Envio</p>
                            <p>GRATIS</p>
                        </div>
                        <h3>Total: ${cartState.reduce((acumulador, item) => acumulador + item.price * item.qtyCartItem , 0)}</h3>
                        <button>CONTINUAR COMPRA</button>
                    </div>
                </div>
            </section>}
        </Layout>
    )
}