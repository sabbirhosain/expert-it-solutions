import course_1 from '../../assets/course_1.jpg'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./CourseNameCard.css"
const CourseNameCard = () => {
    return (
        <div className="col-md-3 mb-4">
            <div className='card our_admission_sub_card'>
                <img src={course_1} className='card-img-top our_admission_sub_img' alt="" />
                <span className='our_admission_discount'>-10%</span>
                <div className='card-body our_admission_card_body'>
                    <Link to="" className='our_admission_card_title'>ডিপ্লোমা ইন গ্রাফিক্স এন্ড অ্যানিমেশন</Link>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='our_admission_card_star_box'>
                            <span><FaStar className='our_admission_card_star' /></span>
                            <span><FaStar className='our_admission_card_star' /></span>
                            <span><FaStar className='our_admission_card_star' /></span>
                            <span><FaStar className='our_admission_card_star' /></span>
                            <span><FaStar className='our_admission_card_star' /></span>
                            <span><FaStar className='our_admission_card_star' /></span>
                        </div>
                        <strong style={{ marginBottom: "-5px" }}>5K+</strong>
                    </div>
                    <h5 className='our_admission_card_amount'>কোর্স ফি ১০০,০০০ ৳</h5>
                    <div className='d-flex align-items-center gap-3 our_admission_card_btn'>
                        <Link to="/our-course-details" className='btn btn-outline-warning rounded-0 w-100'>Details</Link>
                        <Link to="#" className='btn btn-outline-warning rounded-0 w-100'>Buy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseNameCard