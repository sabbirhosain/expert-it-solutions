import "./ApplicationFrom.css"
import Layout from '../Components/Layout/Layout'
import { useState } from "react"

const ApplicationFrom = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [education, setEducation] = useState("")
  const [selectCourse, setSelectCourse] = useState("")
  const [selectTime, setSelectTime] = useState("")

  return (
    <Layout>
      <section className='registation_from'>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h2 className='our_cource_title'>রেজিস্ট্রেশন করুন</h2>
              <p className='our_cource_pera'>কোর্স সম্পর্কে আরও জানতে এখানে আপনার সঠিক তথ্য দিয়ে রেজিস্ট্রেশন করুন।</p>
            </div>
          </div>
          <form className='row p-5 my-5 shadow-sm bg-light'>
            <div className="col-md-6 mb-3">
              <label htmlFor="first_name" className='from-label'>First Name</label>
              <input type="text" className='form-control rounded-0' id='first_name' required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="last_name" className='from-label'>Last Name</label>
              <input type="text" className='form-control rounded-0' id='last_name' required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone_number" className='from-label'>Phone Number</label>
              <input type="text" className='form-control rounded-0' id='phone_number' required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className='from-label'>Email</label>
              <input type="email" className='form-control rounded-0' id='email' required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className='from-label'>Address</label>
              <input type="text" className='form-control rounded-0' id='address' required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="education" className='from-label'>Education</label>
              <input type="text" className='form-control rounded-0' id='education' required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="first_name" className='from-label'>Select Course Name</label>
              <select className='form-control rounded-0'>
                <option value="">Select Course Name</option>
                <option value="">Computer Basic with Ms Office</option>
                <option value="">Graphic Design</option>
                <option value="">Degital Marketing</option>
                <option value="">Video Editing</option>
                <option value="">Basic Networking</option>
                <option value="">IT Administration</option>
                <option value="">Web Design with WordPress</option>
                <option value="">Search Engine Optimization (SEO)</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="first_name" className='from-label'>Select Course Time</label>
              <select className='form-control rounded-0'>
                <option value="">Select Course Time</option>
                <option value="">OFLINE - DAY</option>
                <option value="">ONLINE - NIGHT</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <button type="reset" className='our_contact_asking_btn'>মুছুন</button>
            </div>
            <div className="col-md-6 mt-3">
              <button type="submit" className='our_contact_asking_btn'>সাবমিট</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default ApplicationFrom