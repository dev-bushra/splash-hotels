import { date, info, children } from '../svg'
import { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10 } from '../svg'

const Details = () => {
    return (
        <div class="d-flex mx-3">
        <div class="mx-5 px-5">
            <p class="" style={{ 'width': '70%' }}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
                visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used 
                as a placeholder before final copy is availableIn publishing and graphic design, Lorem ipsum is a 
                placeholder text commonly used to demonstrate the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>

            <h5 class="mt-5 fw-simbold">MOST POPULAR FACULITY</h5>
            <p class="mt-1 d-inline-flex">
                <span class="pe-3">{i1}<p class="fs-6 fw-lighter">title</p></span>
                <span class="pe-3">{i2}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i3}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i4}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i5}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i6}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i7}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i8}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i9}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i10}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i1}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i2}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i3}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i4}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i5}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i6}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i7}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i8}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i9}<p class="fs-6 fw-lighter text-center">title</p></span>
                <span class="pe-3">{i10}<p class="fs-6 fw-lighter text-center">title</p></span>
            </p>

            <h5 class="mt-5 fw-simbold">GOOD TO KNOW</h5>
            <p class="fw-lighter" style={{ 'width': '70%' }}>
                Lorem ipsum is a placeholder text commonly used to demonstrate the 
                visual form of a document or a typeface without relying on meaningful conten.
            </p>
            <p class="mt-5">
                <span class="d-flex">
                    <span class="me-2">{date}</span>
                    <span class="me-5">Check-in</span>
                    <span class="ms-5">14:00 From 14:00 hours</span>
                </span>
                <span class="mt-2 d-flex">
                    <span class="me-2">{date}</span>
                    <span class="me-5">Check-in</span>
                    <span class="ms-5">14:00 From 14:00 hours</span>
                </span>
            </p>


            <h5 class="mt-5 fw-simbold"><span class="me-2">{info}</span>Cancellation / Prepayment</h5>
            <p class="fw-lighter" style={{ 'width': '70%' }}>
                Lorem ipsum is a placeholder text commonly used to demonstrate the 
                visual form of a document or a typeface without relying on meaningful conten.
                Lorem ipsum is a placeholder text commonly used to demonstrate the 
                visual form of a document or a typeface without relying on meaningful conten.
            </p>

            <h5 class="mt-5 fw-simbold"><span class="me-2">{children}</span>Children and extra beds</h5>
            <p class="fw-lighter" style={{ 'width': '30%' }}>
                Lorem ipsum is a placeholder text commonly used to demonstrate.
            </p>
        </div>
    </div>
    );
}
 
export default Details;