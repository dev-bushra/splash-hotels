import userImg from '../assets/user-img.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">SPLASH</a>
                <button class="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <img class=" mt-2 ms-4" src={ userImg } alt="User Profile Image" width="30px" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;