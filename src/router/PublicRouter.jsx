import { BrowserRouter as Router, Routes, Route} from "react-router";
import { AdidasOriginals, Home, ProductsbyCategory, ProductDetail, ProductsSearch, CartView, Checkout } from '../pages'

export const PublicRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/products/category/:category" element={<ProductsbyCategory />}/>
                <Route exact path="/products/adiasOriginals" element={<AdidasOriginals />}/>
                <Route exact path="/product/:category/:id" element={<ProductDetail />}/>
                <Route exact path="/products/search/:searchValue" element={<ProductsSearch />}/>
                <Route exact path="/products/search/" element={<ProductsSearch />}/>
                <Route exact path="/cartView" element={<CartView />}/>
                <Route exact path="/checkout" element={<Checkout />}/>
            </Routes>
        </Router>
    )
}