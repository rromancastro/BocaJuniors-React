import { Layout } from "../layouts"
import { Loader } from "../components"
import { useGetProductsSearch } from "../hooks"
import { useState, useRef } from "react"
import { Link } from "react-router"
import arrayCategories from "../helpers/categoriesArray"
import  AdidasLogo  from '../assets/icons/adidas.svg'



export const Home = () => {

    const {loading, items} = useGetProductsSearch('24/25');

    //logica over mini banners
    const [originalsImage, setOriginalsImage] = useState(0);
    const [seasonImage, setSeasonImage] = useState(0);
    const [trainingImage, setTrainingImage] = useState(0);
    const [casualImage, setCasualImage] = useState(0);
    const intervalRef = useRef(null);

    const startRotation = (select) => {
    switch (select) {
        case 'season':
            
        if (!intervalRef.current) { 
            intervalRef.current = setInterval(() => {
                setSeasonImage((prev) => (prev + 1) % 3);
            }, 500);
        }
            break;
        
        case 'originals':
            if (!intervalRef.current) { 
            intervalRef.current = setInterval(() => {
                setOriginalsImage((prev) => (prev + 1) % 3);
            }, 500);
        }
            break;

        case 'training':
            if (!intervalRef.current) { 
            intervalRef.current = setInterval(() => {
            setTrainingImage((prev) => (prev + 1) % 3);
            }, 500);
        }
            break;

        case 'casual':
            if (!intervalRef.current) { 
            intervalRef.current = setInterval(() => {
            setCasualImage((prev) => (prev + 1) % 3);
            }, 500);
        }
            break;


        default:
            break;
    }
    };


    const stopRotation = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (<>
        {loading ? <Loader /> :  <Layout>
            
            <section id="homeBannerSection">
                <div>
                    <p>NUEVO</p>
                    <p>PERSONALIZÁ TU CAMISETA</p>
                    <p>con tu nombre y dorsal preferido</p>
                    <p><Link to='/products/category/jersey'>VAMOS</Link></p>
                </div>
            </section>
            <section id="homeSecondSection">
                <h2>Categorías</h2>
                <div id="categoriesHome">
                    {
                        arrayCategories.map((category) => {
                            return <Link to={category.link} key={category.slug}><p>{category.name.toLowerCase()} </p></Link>
                        })
                    }
                </div>
            </section>

            <section id="homeMiniBanners">
                <div>
                    <Link to={'/products/adiasOriginals'}>
                        <img src={`https://assetsbocajuniorsstore.vercel.app/bocaOriginals${originalsImage}.avif`} alt="bocaOriginals"  onMouseOver={() => {startRotation('originals')}} onMouseLeave={stopRotation}/>
                        <h3>originals edition</h3>
                    </Link>
                </div>
                <div>
                    <Link to={'/products/search/25'}>
                        <img src={`https://assetsbocajuniorsstore.vercel.app/newJersey${seasonImage}.jpeg`} alt="newJersey" onMouseOver={() => {startRotation('season')}} onMouseLeave={stopRotation}/>
                        <h3>new season 24/25</h3>
                    </Link>
                </div>
                <div>
                    <Link to={'/products/search/entrenamiento'}>
                        <img src={`https://assetsbocajuniorsstore.vercel.app/trainingClothes${trainingImage}.jpeg`} alt="trainingClothes"  onMouseOver={() => {startRotation('training')}} onMouseLeave={stopRotation}/>
                        <h3>training clothes</h3>
                    </Link>
                </div>
                <div>
                    <Link to={'/products/category/shirt'}>
                        <img src={`https://assetsbocajuniorsstore.vercel.app/casualClothes${casualImage}.jpeg`} alt="casualClothes"  onMouseOver={() => {startRotation('casual')}} onMouseLeave={stopRotation}/>
                        <h3>casual clothes</h3>
                    </Link>
                </div>
            </section>

            <section id="aeroReadyBanner">
                <div id="aeroReadyBannerContent">
                    <article id="aeroReadyBannerBrand">
                        <img src={AdidasLogo} alt="AdidasLogo" />
                        <h2>AEROREADY</h2>
                    </article>
                    <h3 id="aeroReadyBannerEslogan">mantente <span>fresco,</span> <span>seco,</span> y siempre en <span>movimiento.</span></h3>
                </div>
            </section>


        </Layout>}
        </>)
}