import Layout from '../Components/Layout/Layout'
import { GoChecklist } from "react-icons/go";
import { RiBookOpenLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import CourseName from '../Components/CourseName/CourseName';
import CourseNameCard from '../Components/CourseNameCard/CourseNameCard';
import "./Home.css";
const Home = () => {
    return (
        <Layout>
            <section className='hero_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div>
                                <p className='hero_pera_1'><GoChecklist style={{ color: 'red', fontSize: '25px' }} />দেশ সেরা আইটি ট্রেনিং ইনস্টিটিউটে</p>
                                <h1 className='hero_heading'>ক্যারিয়ার শুরু হোক<span>দক্ষতার আত্মবিশ্বাসে</span></h1>
                                <p className='hero_pera_2'>অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ক্রিয়েটিভ আইটি ইনস্টিটিউট প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।</p>
                                <div className='d-flex align-items-center gap-3'>
                                    <a href="" className='hero_btn'><RiBookOpenLine />ব্রাউজ কোর্স</a>
                                    <a href="" className='hero_btn'><RiBookOpenLine />জয়েন ফ্রি সেমিনার</a>
                                </div>
                                <p className='hero_pera_3'><GrCertificate style={{ color: '#ff1e1e', fontSize: '35px' }} />কোর্স শেষে আইটি ট্রেনিং ইনস্টিটিউট এর পক্ষ থেকে <br /> সার্টিফিকেট তো থাকছেই ।</p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>

            <section className='course_section'>
                <div className="container">
                    <CourseName />
                </div>
            </section>

            <section className=''>
                <div className="container">
                    <div className="row">
                        <h2 className='our_admission_sub_title'>ডিজাইন এন্ড মাল্টিমিডিয়া</h2>
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home