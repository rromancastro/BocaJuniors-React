import { useParams } from "react-router"
import { useGetProductsSearch } from "../hooks"
import { FiltrarYOrdenar, ItemListContainer, Loader } from "../components"
import { Layout } from "../layouts"
import { useState, useEffect } from "react"

export const ProductsSearch = () => {
    const {searchValue} = useParams()
    const {items, loading} = useGetProductsSearch(searchValue)
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')

    const [productsFiltred, setProductsFiltred] = useState([])

    useEffect(() => {
        setProductsFiltred(items)
    }, [items])
    
    return (<>{
        loading ? <Loader /> : <Layout>
            <section id="productsSearch">
                {items.length !== 0 ? <ItemListContainer products={productsFiltred}/> : <h1 style={{minHeight: "80vh", textAlign: "center"}}>Sin resultados</h1>}
                <FiltrarYOrdenar itemsArray={items} setProductsFiltred={setProductsFiltred} setTitle={setTitle} setSubtitle={setSubtitle}/>
            </section>
        </Layout>
    }</>)
}