import Footer from "./Footer";
import Navbar from "./Navbar";
import Gallary from "./Taps/Gallary";
import Details from "./Taps/Details";
import hotelImg from '../assets/4.jpg'
import { fillStar, halfFillStar, Star, map } from './svg'
import { useState } from "react";

const HotelsDetails = () => {
    const [tab,setTab] = useState(true);

    const toggleTab = () => {
        setTab(!tab);
    }
    const rate = '(5.2)';
    return (
        <div class="bg-dark text-light">
            <Navbar />
            <div class="">
                <img class="" src={hotelImg} width="100%" />
                <div class="m-5">
                    <h3 class="text-light">Sloane Square Hotel</h3>
                    <div class="stars text-yellow-500" style={{'color':'#ffc107'}}>
                        <span class="me-1">{fillStar}</span>
                        <span class="me-1">{fillStar}</span>
                        <span class="me-1">{fillStar}</span>
                        <span class="me-1">{halfFillStar}</span>
                        <span class="me-1">{Star}</span>
                        <span class="me-1">{Star}</span>
                        <span class="ms-3 text-light fw-semibold">{rate}</span>
                    </div>
                    <div class="">
                        {map}
                        <span class="ps-3 text-light fw-lighter">
                            7.21 Solone Square, Dubai, London SW1W 8EG
                        </span>
                    </div>
                    <div class="d-flex mt-3 mb-5">
                        <span class=" tag me-2 border border-light rounded-1">TOWN</span>
                        <span class=" tag me-2 border border-light rounded-1">CITY</span>
                        <span class=" tag me-2 border border-light rounded-1">SQUARE</span>
                        <span class=" tag me-2 border border-light rounded-1">PLACE</span>
                        <span class=" tag me-2 border border-light rounded-1">CENTER</span>
                    </div>
                </div>
            </div>

            <div class="m-5 my-5">
            <ul class="nav nav-tabs tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onClick={toggleTab}>Gallary</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={toggleTab}>Details</a>
                </li>
            </ul>
            </div>

            { tab ? <Gallary /> : <Details />}

            <div class="mt-5"><hr /></div>
            
            <Footer />
        </div>
    );
}
 
export default HotelsDetails;