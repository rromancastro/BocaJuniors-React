import { useState } from "react"

export const SizeSelector = ({typeProduct, gender}) => {

    const [sizeSelected, setSizeSelected] = useState('')

    return (
        <>
         {
            typeProduct !== 'football-boots' ? (
                gender !== 'kids' ? 
                    <section id="sizeSelector">
                        <div onClick={()=>setSizeSelected('XS')} className={sizeSelected == 'XS' ? 'sizeSelected' : ''}><p>XS</p></div>
                        <div onClick={()=>setSizeSelected('S')} className={sizeSelected == 'S' ? 'sizeSelected' : ''}><p>S</p></div>
                        <div onClick={()=>setSizeSelected('M')} className={sizeSelected == 'M' ? 'sizeSelected' : ''}><p>M</p></div>
                        <div onClick={()=>setSizeSelected('L')} className={sizeSelected == 'L' ? 'sizeSelected' : ''}><p>L</p></div>
                        <div onClick={()=>setSizeSelected('XL')} className={sizeSelected == 'XL' ? 'sizeSelected' : ''}><p>XL</p></div>
                        <div onClick={()=>setSizeSelected('XXL')} className={sizeSelected == 'XXL' ? 'sizeSelected' : ''}><p>XXL</p></div>
                        <div onClick={()=>setSizeSelected('XXXL')} className={sizeSelected == 'XXXL' ? 'sizeSelected' : ''}><p>XXXL</p></div>
                    </section>
                : <section id="sizeSelector">
                <div onClick={()=>setSizeSelected('XS')} className={sizeSelected == 'XS' ? 'sizeSelected' : ''}><p>8</p></div>
                <div onClick={()=>setSizeSelected('S')} className={sizeSelected == 'S' ? 'sizeSelected' : ''}><p>10</p></div>
                <div onClick={()=>setSizeSelected('M')} className={sizeSelected == 'M' ? 'sizeSelected' : ''}><p>12</p></div>
                <div onClick={()=>setSizeSelected('L')} className={sizeSelected == 'L' ? 'sizeSelected' : ''}><p>14</p></div>
                <div onClick={()=>setSizeSelected('XL')} className={sizeSelected == 'XL' ? 'sizeSelected' : ''}><p>16</p></div>
            </section>
            ) : null
         }
        </>
    )
}