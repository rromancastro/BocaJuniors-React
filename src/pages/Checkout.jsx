import { CartContext } from "../contexts/CartContext";
import { useContext } from "react"
import {Layout} from "../layouts"

export const Checkout = () => {
    
    const {cartState} = useContext(CartContext)
    const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);

    return (
        <Layout>
            <section id="checkoutSection"> 
                <form>
                    <div>
                        <h2>Datos Personales</h2>
                        <label htmlFor="nombreUser">Nombre</label>
                        <input type="text" id="nombreUser" />
                        <label htmlFor="apellidoUser">Apellido</label>
                        <input type="text" id="apellidoUser" />
                        <label htmlFor="documentoUser">DNI</label>
                        <input type="text" id="documentoUser" />
                    </div>
                    <div>
                    <h2>Datos de Envío</h2>
                        <label htmlFor="direccionUser">Calle / Barrio</label>
                        <input type="text" id="direccionUser" />
                        <label htmlFor="nroUser">Numero</label>
                        <input type="text" id="nroUser" />
                        <label htmlFor="cpUser">Código Postal</label>
                        <input type="text" id="cpUser" />
                    </div>
                </form>
                    <div id="checkoutSectionResumenPedido">
                        <h2>Resumen del pedido</h2>
                        <div>
                            <p>{totalItems} productos</p>
                            <p>${cartState.reduce((acumulador, item) => acumulador + item.price * item.qtyCartItem , 0)}</p>
                        </div>
                        <div>
                            <p>Costo Envio</p>
                            <p>GRATIS</p>
                        </div>
                        <h3>Total: ${cartState.reduce((acumulador, item) => acumulador + item.price * item.qtyCartItem , 0)}</h3>
                    </div>
                    <input type="button" />
            </section>
        </Layout>
    )
}