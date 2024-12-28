import { useParams } from "react-router"
import { Layout } from "../layouts"
import { useGetProductsByCategory } from "../hooks"
import { FiltrarYOrdenar, ItemListContainer, Loader } from "../components"
import { useState, useEffect } from "react"

export const ProductsbyCategory = () => {

    const {category} = useParams()

    const {loading, items} = useGetProductsByCategory(category)
    const [productsFiltred, setProductsFiltred] = useState([])

    useEffect(() => {
        setProductsFiltred(items)
    }, [items])

    

    // logica titulo
    const [title, setTitle] = useState('')
    const [subTitle, setSubtitle] = useState('')
    useEffect(() => {
    switch (category) {
        case 'jersey':
            setTitle('Camisetas')
            break;

        case 'jacket':
            setTitle('Camperas')
            break;
            
        case 'short':
            setTitle('Shorts')
            break;

        case 'trouser':
            setTitle('Pantalones')
            break;

        case 'shirt':
            setTitle('Remeras y Chombas')
            break;

        case 'tracksuit&hoodies':
            setTitle('Buzos')
            break;

        case 'football-boots':
            setTitle('Botines')
            break;
    
        default:
            break;
    }
    }, [])

    return (<>
        {
            loading ? <Loader /> : <Layout>
            
                <section id="productsByCategory">
                    <h2 id="productsByCategoryTitle">{title} {subTitle}</h2>
                    <section id="filterAndProducts">
                        <ItemListContainer products={productsFiltred} id={'itemListContainer'}/>
                        <FiltrarYOrdenar itemsArray={items} setProductsFiltred={setProductsFiltred} setSubtitle={setSubtitle} setTitle={setTitle}/>
                    </section>
                </section>
        </Layout>}
        </>)
}