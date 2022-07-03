import { map, sun, arrow, cloud } from './svg'

const Header = () => {
    return ( 
        <div className="header container-lg my-3">
            <div class="input-group ">
                <input type="text" class="form-control" placeholder="Find your best hotail in Dubai" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-Success text-light outline-light" type="button" id="button-addon2"><span class="me-2 text-light">{map}</span>Search</button>
            </div>

            <div class="d-inline-flex my-3 justify-content-center me-5 pe-5">
                <p class="text-secondary d-inline-flex">Location:</p>
                <span class="d-inline-flex ms-2">{map}</span>
                <p class="text-light d-inline-flex ms-2">Dubai, UAE</p>
            </div>
            <span class="ps-5 pe-5 ms-5 me-5"></span>
            <span class="ms-5 me-3"></span>
            <div class="d-inline-flex my-3 justify-content-center ms-5 ps-5">
                <p class="text-secondary d-inline-flex">Location:</p>
                <span class="d-inline-flex ms-2">{map}</span>
                <p class="text-light d-inline-flex ms-2">Moscow, Russia</p>
            </div>

            <div class="my-3 justify-content-center">
                <p class="d-inline-flex justify-content-center">
                    <span class="me-3">{sun}</span>
                    +48 C
                    <span class="text-secondary mx-3"> | </span>
                    23:08
                    <span class="text-secondary ms-2">PM</span>
                    <span class="ms-5">1 USD</span>
                    <span class="ms-2 text-secondary">{arrow}</span>
                    <span class="ms-2">3.56 AED</span>
                </p>
                <span class="ms-5 me-5 text-dark">_</span>
                <span class="ms-5 me-5 text-dark">_</span>
                <p class="ms-5 d-inline-flex justify-content-center">
                    <span class="me-3">{cloud}</span>
                    +15 C
                    <span class="text-secondary mx-3"> | </span>
                    6:00
                    <span class="text-secondary ms-2">AM</span>
                    <span class="ms-5">1 USD</span>
                    <span class="ms-2 text-secondary">{arrow}</span>
                    <span class="ms-2">2.6 Rouble</span>
                </p>
            </div>
        </div>
     );
}
 
export default Header;