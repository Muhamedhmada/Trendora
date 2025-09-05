import './Footer.css'
import logo from '../../Assets/Images/footerLogo.png'
import { Facebook, Instagram, Twitter } from '../../Assets/SVGs'
function Footer(){
  const date = new Date()
  let year = date.getFullYear()
  return (
    <div className='footer-container container'>
      <div className='footer-content content'>
        <div className='logo'>
          <div className='image'>
            <img src={logo} alt='' />
          </div>
          <h2>
            Timeless, modest fashion for all. Designed <br /> for comfort and
            everyday elegance.
          </h2>
        </div>
        <div className='lists'>
          <ul>
            <li>shop</li>
            <li>category</li>
            <li>occasion</li>
            <li>collection</li>
            <li>style</li>
          </ul>
          <ul>
            <li>collection</li>
            <li>women</li>
            <li>men</li>
            <li>kids</li>
          </ul>
          <ul>
            <li>seasonal collections</li>
            <li>summer '25</li>
            <li>ramadan collection</li>
            <li>winter warmers</li>
          </ul>
          <ul>
            <li>follow us</li>
            <li>
              <a href='/#'>
                <Facebook width='18px' />
                Facebook
              </a>
            </li>
            <li>
              <a href='/#'>
                <Twitter width='18px' />
                Twitter
              </a>
            </li>
            <li>
              <a href='/#'>
                <Instagram width='18px' />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='copy'>
        <p>Copyright &copy;{year}</p>
        <ul>
          <li>Terms & Conditions </li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}
export default Footer