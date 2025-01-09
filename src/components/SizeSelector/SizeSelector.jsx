import { useState } from "react"

export const SizeSelector = ({typeProduct, gender, sizeSelected, setSizeSelected}) => {


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
            ) : (
                gender !== 'kids' ? 
                    <section id="sizeSelector">
                        <div onClick={() => setSizeSelected('38')} className={sizeSelected == '38' ? 'sizeSelected' : ''}><p>38</p></div>
                        <div onClick={() => setSizeSelected('39')} className={sizeSelected == '39' ? 'sizeSelected' : ''}><p>39</p></div>
                        <div onClick={() => setSizeSelected('40')} className={sizeSelected == '40' ? 'sizeSelected' : ''}><p>40</p></div>
                        <div onClick={() => setSizeSelected('41')} className={sizeSelected == '41' ? 'sizeSelected' : ''}><p>41</p></div>
                        <div onClick={() => setSizeSelected('42')} className={sizeSelected == '42' ? 'sizeSelected' : ''}><p>42</p></div>
                        <div onClick={() => setSizeSelected('43')} className={sizeSelected == '43' ? 'sizeSelected' : ''}><p>43</p></div>
                        <div onClick={() => setSizeSelected('44')} className={sizeSelected == '44' ? 'sizeSelected' : ''}><p>44</p></div>
                    </section>
                : <section id="sizeSelector">
                        <div onClick={() => setSizeSelected('30')} className={sizeSelected == '30' ? 'sizeSelected' : ''}><p>30</p></div>
                        <div onClick={() => setSizeSelected('31')} className={sizeSelected == '31' ? 'sizeSelected' : ''}><p>31</p></div>
                        <div onClick={() => setSizeSelected('32')} className={sizeSelected == '32' ? 'sizeSelected' : ''}><p>32</p></div>
                        <div onClick={() => setSizeSelected('33')} className={sizeSelected == '33' ? 'sizeSelected' : ''}><p>33</p></div>
                        <div onClick={() => setSizeSelected('34')} className={sizeSelected == '34' ? 'sizeSelected' : ''}><p>34</p></div>
                        <div onClick={() => setSizeSelected('35')} className={sizeSelected == '35' ? 'sizeSelected' : ''}><p>35</p></div>
                        <div onClick={() => setSizeSelected('36')} className={sizeSelected == '36' ? 'sizeSelected' : ''}><p>36</p></div>
                        <div onClick={() => setSizeSelected('37')} className={sizeSelected == '37' ? 'sizeSelected' : ''}><p>37</p></div>
                </section>
            )
         }
        </>
    )
}