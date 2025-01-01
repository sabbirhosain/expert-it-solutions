import { FaPhoneAlt, FaFacebookF, FaEnvelope, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from '../../assets/expert-it-logo.png'
import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className='top_header d-none d-lg-flex'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-none d-lg-flex align-items-center gap-5">
                <span className="d-flex align-items-center gap-2 text-white"><FaPhoneAlt /><strong>+880 123 456 789</strong></span>
                <span className="d-flex align-items-center gap-2 text-white"><FaEnvelope /><strong>info@gmail.com</strong></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-none d-lg-flex align-items-center justify-content-end gap-2">
                <a href="/" target="_blank" className="socail_media_box"><FaFacebookF /></a>
                <a href="/" target="_blank" className="socail_media_box"><FaTwitter /></a>
                <a href="/" target="_blank" className="socail_media_box"><FaInstagram /></a>
                <a href="/" target="_blank" className="socail_media_box"><FaLinkedinIn /></a>
                <a href="/" target="_blank" className="socail_media_box"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="main_navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} style={{ maxWidth: '180px' }} alt="site logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-3 p-md-0" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-lg-3">
                  <NavLink to='/' className="nav-link header_nav_link">হোম</NavLink>
                </li>
                <li className="nav-item me-lg-3">
                  <NavLink to='/about' className="nav-link header_nav_link">আমাদের সম্পর্কে</NavLink>
                </li>
                <li className="nav-item me-lg-3">
                  <NavLink to='/our-courses' className="nav-link header_nav_link" href="">কোর্স সমূহ</NavLink>
                </li>
                <li className="nav-item me-lg-3">
                  <NavLink to='/contact' className="nav-link header_nav_link">যোগাযোগ</NavLink>
                </li>
              </ul>
              <NavLink to='/application-from' className="registation_btn d-block d-md-inline-block">রেজিস্ট্রেশন</NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header