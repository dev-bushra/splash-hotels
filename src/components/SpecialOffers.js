import hotelImg1 from '../assets/s1.jpg'
import { circle, filledCircle } from './svg'

const SpecialOffers = () => {
    return (
        <div class="mt-5 pt-5">
            <h5 class="fs-5 my-3 text-center text-light letter-spacing">SPECIAL OFFERS</h5>

            <div class="d-flex p-3 ms-5">
                <div class="container">
                    <div class="row row-cols-1">
                        <div class="col"><img class="img-fluid rounded" src={hotelImg1} /></div>
                        <div class="col fw-light fs-6 text-center mt-3" style={{ 'width': '85%' }}>
                            Lorem ipsum is a placeholder text commonly used to
                            demonstrate the visual form of a document.
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row row-cols-1">
                        <div class="col"><img class="img-fluid rounded" src={hotelImg1} /></div>
                        <div class="col fw-light fs-6 text-center mt-3" style={{ 'width': '85%' }}>
                            Lorem ipsum is a placeholder text commonly used to
                            demonstrate the visual form of a document.
                        </div>
                    </div>
                </div>
            </div>

            <h5 class="fs-5 my-3 text-center text-light">{filledCircle} {circle} {circle} {circle}</h5>
            <p></p>
        </div>
    );
}

export default SpecialOffers;