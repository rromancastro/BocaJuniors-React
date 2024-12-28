import { useState } from "react"
import { ItemListContainer, Loader } from "../components"
import { useGetProductsSearch } from "../hooks"
import { Layout } from "../layouts"
import { Skeleton } from "@chakra-ui/react"

export const AdidasOriginals = () => {
    const {items, loading} = useGetProductsSearch('originals')
    const [loader, setLoader] = useState(true)
    

    return (
       <>
            {
                loading ? <Loader /> :  <Layout>
                    <section id="adidasOriginalsSection">
                        <h1>adidas Originals</h1>
                        <div id="imagesAdidasOriginals">
                            <Skeleton isLoaded={!loader} className="imageOriginalsSkeleton" startColor='white' endColor='grey' ><img src='https://assetsbocajuniorsstore.vercel.app/bocaOriginals0.avif' alt="adidas originals" onLoad={()=>setLoader(false)}/></Skeleton>
                            <Skeleton isLoaded={!loader} className="imageOriginalsSkeleton" startColor='white' endColor='grey' ><img src='https://assetsbocajuniorsstore.vercel.app/bocaOriginals1.avif' alt="adidas originals" onLoad={()=>setLoader(false)}/></Skeleton>
                            <Skeleton isLoaded={!loader} className="imageOriginalsSkeleton" startColor='white' endColor='grey' ><img src='https://assetsbocajuniorsstore.vercel.app/bocaOriginals2.avif' alt="adidas originals" onLoad={()=>setLoader(false)}/></Skeleton>
                            <Skeleton isLoaded={!loader} className="imageOriginalsSkeleton" startColor='white' endColor='grey' ><img src='https://assetsbocajuniorsstore.vercel.app/bocaoriginls.avif' alt="adidas originals" onLoad={()=>setLoader(false)}/></Skeleton>
                        </div>
                        <ItemListContainer products={items}/>
                    </section>
                    </Layout>
            }
        </>
    )
}