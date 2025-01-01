import Layout from '../Components/Layout/Layout'
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import "./Contact.css"
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <Layout>
      <div className="our_contect_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className='our_contact_title'>যোগাযোগ</h2>
              <p className='our_contact_pera'>যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে পারেন। তাছাড়া হটলাইন নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং সংক্রান্ত যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক ম্যাসেঞ্জারেও নক দিতে পারেন।</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between my-5">
            <div className="col-md-4">
              <div className="contact_box">
                <div className="d-flex justify-content-center w-100">
                  <div className='contact_icon_box'>
                    <FaMapLocationDot />
                  </div>
                </div>
                <h3 className='contact_box_title'>ঠিকানা</h3>
                <p className='contact_box_peragraph'>জামনগর বাজার, বাগাতিপাড়া, নাটোর।</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_box">
                <div className="d-flex justify-content-center w-100">
                  <div className='contact_icon_box'>
                    <FaEnvelope />
                  </div>
                </div>
                <h3 className='contact_box_title'>ইমেইল</h3>
                <p className='contact_box_peragraph'>sabbirhosainbd59@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_box">
                <div className="d-flex justify-content-center w-100">
                  <div className='contact_icon_box'>
                    <FaPhone />
                  </div>
                </div>
                <h3 className='contact_box_title'>যোগাযোগ</h3>
                <div className="d-flex align-items-center justify-content-center">
                  <p className='contact_box_peragraph'>01793273702</p>&ensp;/&ensp;
                  <p className='contact_box_peragraph'>01774988485</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact_google_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.858121352867!2d88.86959999999999!3d24.316583499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc05201d20284d%3A0x358f65a951fa9eb6!2sExpert%20IT%20Solution%20%26%20Training%20Center!5e0!3m2!1sen!2sbd!4v1735309485290!5m2!1sen!2sbd" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
            <div className="col-md-6">
              <h3 className='our_contact_asking_title'>আপনাদের জিজ্ঞাসা ইনবক্স করুন</h3>
              <form className='row'>
                <div className="col-md-6 mb-3">
                  <input type="text" className='form-control rounded-0' placeholder='Your Name' required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className='form-control rounded-0' placeholder='Your Email' required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className='form-control rounded-0' placeholder='Your Number' required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className='form-control rounded-0' placeholder='Your Address' />
                </div>
                <div className="col-md-12 mb-3">
                  <input type="text" className='form-control rounded-0' placeholder='Subject..' required />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea className='form-control rounded-0' rows="4" required></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" className='our_contact_asking_btn'>সাবমিট</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact