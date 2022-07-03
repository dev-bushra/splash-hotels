import { useState } from "react";
import { fillStar, halfFillStar, Star } from './svg'

const HotelsList = () => {
    const [hotels, setHotels] = useState({
        dubai: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        sharga: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        ain: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
        abudabi: "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
        jblali: "https://images.unsplash.com/photo-1594072702031-f0e2a602dd2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    });

    return (
        <div class="mt-5 pt-5">
            <h5 class="fs-5 my-3 text-center text-light letter-spacing">HOTAILS</h5>

            <div class="d-flex p-3 pb-5">
                <div class="container ">
                    <div class="row row-cols-4">
                        <div class="col hotels-list ">
                            <img class="img-fluid rounded" src={hotels.dubai} width="300px" />
                            <hr class="ms-2" width="90%" />
                            <span class="fs-6 fw-bold">Royal King Hotalil</span>
                            <em class="fw-lighter ms-3">Dubai, UEA</em>
                            <div class="stars text-yellow-500">
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{halfFillStar}</span>
                                <span class="me-1">{Star}</span>
                                <span class="me-1">{Star}</span>
                                <span class="ms-3 text-light fw-semibold">(2.9)</span>
                            </div>
                        </div>

                        <div class="col hotels-list ">
                            <img class="img-fluid rounded" src={hotels.abudabi} width="300px" />
                            <hr class="ms-2" width="90%" />
                            <span class="fs-6 fw-bold">Salma Hotels</span>
                            <em class="fw-lighter ms-3">Sharga, UEA</em>
                            <div class="stars text-yellow-500">
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{Star}</span>
                                <span class="ms-3 text-light fw-semibold">(7.5)</span>
                            </div>
                        </div>

                        <div class="col hotels-list ">
                            <img class="img-fluid rounded" src={hotels.sharga} width="300px" />
                            <hr class="ms-2" width="90%" />
                            <span class="fs-6 fw-bold">Mama Queen</span>
                            <em class="fw-lighter ms-3">Ain, UEA</em>
                            <div class="stars text-yellow-500">
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="ms-3 text-light fw-semibold">(9.9)</span>
                            </div>
                        </div>

                        <div class="col hotels-list ">
                            <img class="img-fluid rounded" src={hotels.dubai} width="300px" />
                            <hr class="ms-2" width="90%" />
                            <span class="fs-6 fw-bold">Splash Hotels</span>
                            <em class="fw-lighter ms-3">Dubai, UEA</em>
                            <div class="stars text-yellow-500">
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{fillStar}</span>
                                <span class="me-1">{Star}</span>
                                <span class="me-1">{Star}</span>
                                <span class="me-1">{Star}</span>
                                <span class="ms-3 text-light fw-semibold">(4.0)</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HotelsList;