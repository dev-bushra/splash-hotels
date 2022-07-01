import hotelImg2 from '../assets/s2.jfif'

const HotelsList = () => {
    return (
        <div class="mt-5 pt-5">
            <h5 class="fs-5 my-3 text-center text-light letter-spacing">HOTAILS</h5>

            <div class="d-flex p-3 pb-5">
                <div class="container">
                    <div class="row row-cols-4">
                        <div class="col"><img class="img-fluid rounded" src={hotelImg2} width="300px" /><em class="ps-5 text-secondery">Lorem ipsum alomto</em></div>
                        <div class="col"><img class="img-fluid rounded" src={hotelImg2} width="300px" /><em class="ps-5 text-secondery">Lorem ipsum alomto</em></div>
                        <div class="col"><img class="img-fluid rounded" src={hotelImg2} width="300px" /><em class="ps-5 text-secondery">Lorem ipsum alomto</em></div>
                        <div class="col"><img class="img-fluid rounded" src={hotelImg2} width="300px" /><em class="ps-5 text-secondery">Lorem ipsum alomto</em></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelsList;