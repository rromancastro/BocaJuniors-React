import { ItemCard } from "../ItemCard/ItemCard"

export const ItemListContainer = ({products}) => {
    return (
        <section id='itemListContainer'>
            {products.map((product) => {
                return <ItemCard data={product} key={product.id}/>
            })}
        </section>
    )
}