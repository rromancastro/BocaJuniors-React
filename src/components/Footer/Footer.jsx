import Youtube from '../../assets/icons/youtube.svg'
import Adidas from '../../assets/icons/adidas.svg'
import Betsson from '../../assets/icons/betsson.svg'
import Directv from '../../assets/icons/directv.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'

export const Footer = () => {
    return (<>
        <div style={{height: '3vh', backgroundColor: '#27344B'}}></div>
        <footer>
            <div>
                <a target='_blank' href="https://www.instagram.com/bocajrs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"><img src={Instagram} alt="Instagram" /></a>
                <a target='_blank' href="https://www.facebook.com/BocaJuniors/"><img src={Facebook} alt="Facebook" /></a>
                <a target='_blank' href="https://www.youtube.com/@ElCanaldeBoca"><img src={Youtube} alt="Youtube" /></a>
            </div>
            <div><h2>LA MITAD +1</h2></div>
            <div>
                <a target='_blank' href="https://caba.betsson.bet.ar/?_gl=1*10g65hf*_ga*MTc4NjU0MTIxNy4xNzMxNjgzODYy*_ga_R43MEQN512*MTczNDU1MDg3NS4yLjAuMTczNDU1MDg3NS4wLjAuMA.."><img src={Betsson} alt="betsson" /></a>
                <a target='_blank' href="https://www.adidas.com.ar/boca_juniors"><img src={Adidas} alt="adidas" /></a>
                <a target='_blank' href="https://www.directvgo.com/ar/home?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh2_lTDyjx0VAA4O4qs0fAtjWAkCHAEzdihS-uiARjz5C3jAc8TI8ukaAnPaEALw_wcB"><img src={Directv} alt="directv" /></a>
            </div>
        </footer>
        </>
    )
}