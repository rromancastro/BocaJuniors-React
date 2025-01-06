import { CartContext } from "../contexts/CartContext";
import { useContext } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Layout} from "../layouts"
import { Link } from "react-router";

export const Checkout = () => {
    
    const { cartState, setCartState } = useContext(CartContext)
    const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);

    const MySwal = withReactContent(Swal)

    function finalizarCompra() {
        setCartState([])
        MySwal.fire({
            title: <p>¡Gracias por tu compra!</p>,
            text: "Te enviaremos el seguimiento del envío por correo electronico.",
            icon: "success",
            showConfirmButton: false,
            footer: '<a href="/">Volver al inicio.</a>'
          })
    }

    return (
        <Layout>
            <section id="checkoutSection"> 
                <form>
                    <div>
                        <h2>Datos Personales</h2>
                        <label htmlFor="nombreUser">Nombre</label>
                        <input required type="text" id="nombreUser" />
                        <label htmlFor="apellidoUser">Apellido</label>
                        <input required type="text" id="apellidoUser" />
                        <label htmlFor="documentoUser">DNI</label>
                        <input required type="text" id="documentoUser" />
                        <label htmlFor="emailUser">Correo Electronico</label>
                        <input required type="email" id="emailUser" />
                    </div>
                    <div>
                    <h2>Datos de Envío</h2>
                        <label htmlFor="direccionUser">Calle / Barrio</label>
                        <input required type="text" id="direccionUser" />
                        <label htmlFor="nroUser">Numero</label>
                        <input required type="text" id="nroUser" />
                        <label htmlFor="cpUser">Código Postal</label>
                        <input required type="text" id="cpUser" />
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
                        <button onClick={()=>{finalizarCompra()}}>Finalizar Compra</button>
                    </div>
            </section>
        </Layout>
    )
}