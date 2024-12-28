import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "../components"

export const Layout = ({children}) => {
    return (
        <Flex flexDir={'column'} backgroundColor={'#fafafa'}>
            <NavBar />
            {children}
            <Footer />
        </Flex>
    )
}