import { useState } from 'react'
import { circle, filledCircle } from './svg'

const SpecialOffers = () => {
    const [hotels, setHotels] = useState({
        dubai: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        sharga: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        ain: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
        abudabi: "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
        jblali: "https://images.unsplash.com/photo-1594072702031-f0e2a602dd2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    });

    return (
        <div class="mt-5 pt-5">
            <h5 class="fs-3 text-center text-light letter-spacing">SPECIAL OFFERS</h5>

            <div class="d-flex ms-3 special-offer-container">
                <div class="carousel">

                    <div class="carousel--wrap">
                        <div class="carousel--item ">
                            <figure class="hover-effect"><img src={hotels.dubai} alt="" /></figure>
                            <h2>Dubai</h2>
                        </div>

                        <div class="carousel--item">
                            <figure class="hover-effect"><img src={hotels.sharga} alt="" /></figure>
                            <h2>Sharga</h2>
                        </div>

                        <div class="carousel--item">
                            <figure class="hover-effect"><img src={hotels.ain} alt="" /></figure>
                            <h2>Al Ain</h2>
                        </div>
                        
                        <div class="carousel--item">
                            <figure class="hover-effect"><img src={hotels.abudabi} alt="" /></figure>
                            <h2>Abu Dahbi</h2>
                        </div>

                    </div>

                </div>
            </div>

            <h5 class="fs-5 mb-3 text-center text-light">{circle} {filledCircle} {circle} {circle}</h5>
            <p></p>
        </div>
    );
}

export default SpecialOffers;