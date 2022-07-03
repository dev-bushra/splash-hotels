import Footer from "./Footer";
import '../about.css'
import img from '../assets/2.jpg'

const About = () => {
  return (
    <div class="body">
      <h1 class="m-5 p-5">Splash Hotels</h1>
      <div id="carousel-wrapper">
        <div id="menu">
          <div id="current-option">
            <span id="current-option-text1" data-previous-text="Hotel rooms separate moral universe." data-next-text="">
              Hotel rooms separate moral universe.
            </span>
            <span id="current-option-text2" data-previous-text="Splash" data-next-text="">Splash Hotels</span>
          </div>

          <button id="previous-option"></button>
          <button id="next-option"></button>

        </div>
        <img id="image" src={img} />
      </div>
      <Footer />
    </div>
  );
}

export default About;