import { Skeleton } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router"

export const ItemCard = ({data}) => {
    
    const [image, setImage] = useState(0)
    const [loading, setLoading] = useState(true)

    

    return (
        <Link to={`/product/${data.category}/${data.id}`}>
            <article id="itemCard">
                <Skeleton isLoaded={!loading} startColor='white' endColor='grey' width={'100%'} height={'100%'}>
                    <img src={data.images[image]} alt={data.title} onLoad={() => {setLoading(false)}} onMouseOver={() => {setImage(1)}} onMouseLeave={() => {setImage(0)}}/>
                </Skeleton>
                <div>
                    <h3>{data.category} - {data.gender}</h3>
                    <h2>{data.title}</h2>
                    <h4>${data.price}</h4>
                </div>
            </article>
        </Link>
    )
}