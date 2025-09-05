import "./Experience.css";
import img from "../../Assets/Images/ExperienceImg1.png";
import img2 from "../../Assets/Images/ExperienceImg2.png";
import img3 from "../../Assets/Images/ExperienceImg3.png";
import img4 from "../../Assets/Images/ExperienceImg4.png";
function Experience() {
  return (
    <div className='experience-container container'>
      <div className='experience-content'>
        <div className='one'>
          <div className='image'>
            <div className="image-container">
              <img src={img} alt='' />
            </div>
          </div>
          <div className='info'>
            <div className='header'>
              <h4>Experience</h4>
              <h2> Timeless Experience</h2>
            </div>
            <p>
              We design pieces that elevate everyday moments. From the fit to
              the feel, every detail is made to offer confidence, ease, and a
              touch of quiet luxur.
            </p>
          </div>
        </div>
        <div className='two'>
          <div className='info'>
            <div className='header'>
              <h4>Quality</h4>
              <h2> curated Quality</h2>
            </div>
            <p>
              Crafted from soft, breathable fabrics and handpicked materials ,
              each item is made to last, move, and feel like a second skin.
            </p>
          </div>
          <div className='images'>
            <div className='twoImage'>
              <img src={img2} alt='' />
              <img src={img3} alt='' />
            </div>
            <div className="image-container">
              <img src={img4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
