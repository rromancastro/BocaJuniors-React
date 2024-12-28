import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router";

export const CartWidget = () => {
    
    const { cartState } = useContext(CartContext);

    const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);

    return (
        <Link to={'/cartView'}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={'3px'}>
                <FaShoppingCart color="#fafafa" />
                <p style={{color: '#fafafa', lineHeight: '1', fontFamily: "adineue PRO"}}>{totalItems}</p>
            </Flex>
        </Link>
    )
}