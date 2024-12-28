import { Flex, Spinner } from "@chakra-ui/react"
import EscudoBoca from '../../assets/icons/escudo.png'

export const Loader = () => {
    return (
        <Flex width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'} backgroundColor={'white'}>
            <Spinner id="loaderSpinner"/>
            <img src={EscudoBoca} alt="escudoBoca" id="loaderEscudo"/>
        </Flex>
    )
}