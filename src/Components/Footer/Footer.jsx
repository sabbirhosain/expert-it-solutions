import './Footer.css'
import { FaPhoneAlt, FaFacebookF, FaEnvelope, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { TbNorthStar } from "react-icons/tb";
import logo from '../../assets/expert-it-logo.png'

const Footer = () => {
  return (
    <>
      <section className='next_batch_counter'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className='next_batch_title'>সকল কোর্সে ভর্তি চলছে </h2>
              <p className='next_batch_peragraph'>ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। অনলাইন বা অফলাইন যেকোনো কোর্সে আপনার সুবিধামতো সময়ে ভর্তি হয়ে যান এখনই।</p>
              <div className='d-flex align-items-center gap-3'>
                <a href="#" className='next_batch_btn'>জয়েন ফ্রি সেমিনার</a>
                <a href="#" className='next_batch_btn'>ব্রাউজ কোর্স</a>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* ===== Footer Top Section ===== */}
      <section className='footer_section'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="contact">
                <h5 className='footer_title'>যোগাযোগ</h5>
                <div className='pt-3'>
                  <div className='d-flex align-items-center gap-3 mb-3'>
                    <span className='contact_icon_box'><IoLocation /></span>
                    <p className='contact_pera'>জামনগর বাজার, বাগাতিপাড়া, নাটোর।</p>
                  </div>
                  <div className='d-flex align-items-center gap-3 mb-2'>
                    <span className='contact_icon_box'><FaRegEnvelope /></span>
                    <p className='contact_pera'>info@gmail.com</p>
                  </div>
                  <div className='d-flex align-items-center gap-3 mb-3'>
                    <span className='contact_icon_box'><MdLocalPhone /></span>
                    <div>
                      <p className='contact_pera'>+880 1234 567 890</p>
                      <p className='contact_pera'>+880 1234 567 890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="quick_link">
                <h5 className='footer_title'>কুইক লিংক</h5>
                <ul className='pt-3'>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>ফ্রি সেমিনারের সময়সূচি</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>মেন্টরস</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>সাফল্যের গল্প</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>আমাদের গ্যালারী</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>আপনার প্রশ্নসমূহ</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link'>ব্লগ</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="quick_link">
                <h5 className='footer_title'>কোর্স</h5>
                <ul className='pt-3'>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>বেসিক কম্পিউটার ও এম.এস অফিস  </a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>ওয়েব ডিজাইন</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>গ্রাফিক ডিজাইন</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>গ্রাফিক ডিজাইন</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>গ্রাফিক ডিজাইন</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link'>গ্রাফিক ডিজাইন</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="quick_link">
                <h5 className='footer_title'>অন্যান্য</h5>
                <ul className='pt-3'>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>ফ্রি সেমিনারের সময়সূচি</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>মেন্টরস</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>সাফল্যের গল্প</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>আমাদের গ্যালারী</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link mb-1'>আপনার প্রশ্নসমূহ</a></li>
                  <li className='contact_pera'><TbNorthStar /><a href="" className='contact_pera_link'>ব্লগ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer Bottom Section ===== */}
      <div className='footer_bottom'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-3">
              <a href=""><img src={logo} alt="" style={{ maxWidth: '200px' }} /></a>
            </div>
            <div className="col-md-4">
              <p className='text-center'>Copyright © 2024 Expert It Solution. All right reserved Development By : Sabbir Hosain</p>
            </div>
            <div className="col-md-3">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <a href="/" target="_blank" className="footer_socail_media_box"><FaFacebookF /></a>
                <a href="/" target="_blank" className="footer_socail_media_box"><FaTwitter /></a>
                <a href="/" target="_blank" className="footer_socail_media_box"><FaInstagram /></a>
                <a href="/" target="_blank" className="footer_socail_media_box"><FaLinkedinIn /></a>
                <a href="/" target="_blank" className="footer_socail_media_box"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer