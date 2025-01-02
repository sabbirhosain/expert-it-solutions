import Layout from "../Components/Layout/Layout"
import course_details_img from '../assets/course_1.jpg';
import { AiOutlineCheckSquare } from "react-icons/ai";
import "./CoursesDetails.css"
import CourseReview from "../Components/CourseReview/CourseReview";
const CoursesDetails = () => {
    return (
        <Layout>
            <section className="courses_details_hero_sec">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5">
                            <h5 className="courses_details_hero_sub_heading">ডিজাইন আর রঙের খেলায় ক্যারিয়ার গড়তে</h5>
                            <h1 className="courses_details_hero_heading">প্রফেশনাল গ্রাফিক ডিজাইন</h1>
                            <div className="d-flex align-items-center gap-3">
                                <div className="courses_details_hero_box">
                                    <span>কোর্সের মেয়াদ</span>
                                    <h4>৬ মাস</h4>
                                </div>
                                <div className="courses_details_hero_box">
                                    <span>লেকচার</span>
                                    <h4>৪৮ টি</h4>
                                </div>
                                <div className="courses_details_hero_box">
                                    <span>প্রজেক্ট</span>
                                    <h4>৩০+</h4>
                                </div>
                            </div>
                            <p className="courses_details_hero_paragraph">ভিজ্যুয়াল কনটেন্টের চাহিদা বেড়ে যাওয়ায় এখন মার্কেটাররা গ্রাফিক্যাল কনটেন্টের দিকে ঝুঁকেছেন। তাই বিশ্বজুড়ে গ্রাফিক ডিজাইনারদের চাহিদা এখন আকাশচুম্বী। এক জরিপে দেখা যায়, ভালো একটা লোগোর জন্য একটি ছোট প্রতিষ্ঠানও ৫০০ ডলার পর্যন্ত খরচ করে। আপনি কি ডিজাইনের কাজ করতে ভালোবাসেন? তাহলে আপডেটেড মডিউলে দক্ষ প্রশিক্ষকের সাথে আমাদের Graphics Design Course-টি আপনার জন্যই।</p>
                            <div className="d-flex align-items-center gap-3">
                                <a href="#" className="courses_details_hero_btn">Admission</a>
                                <a href="#" className="courses_details_hero_btn">Free Seminar</a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="course_details_hero_img_box">
                                <img src={course_details_img} className="course_details_hero_img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="course_curriculum_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="course_curriculum">
                                <div className="row">
                                    <h2 className="course_curriculum_title">কোর্স কারিকুলাম</h2>
                                    <div className="col-md-6">
                                        <ul>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">Raster To Vector</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">Certificate Template Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">Brochure Layout</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">Desk & Wall Calendar Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">Raster To Vector</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">Certificate Template Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">Brochure Layout</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">Desk & Wall Calendar Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                            <li className="d-flex align-items-center gap-2 mb-1"><AiOutlineCheckSquare /> <span className="">T-Shirt Design</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="course_admission">
                                <div className="row">
                                    <h2 className="course_admission_title">ভর্তি চলছে!</h2>
                                    <p className="course_admission_paragrph">অফলাইন (সরাসরি ইনস্টিটিউট) বা অনলাইন (লাইভ ক্লাস)- যে কোন ব্যাচে সুবিধামতো সময় বেছে নিয়ে ভর্তি হতে পারেন এখনই।</p>
                                    <div className="col-md-6">
                                        <div className="course_admission_online">
                                            <h4 className="course_admission_online_title">কোর্স ফি (অফলাইন)</h4>
                                            <h6 className="course_admission_online_sub_title">৳ ৫০,০০০ টাকা</h6>
                                            <button type="submit" className="course_admission_online_btn">Enroll Now</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="course_admission_online">
                                            <h4 className="course_admission_online_title">কোর্স ফি (অফলাইন)</h4>
                                            <h6 className="course_admission_online_sub_title">৳ ৫০,০০০ টাকা</h6>
                                            <button type="submit" className="course_admission_online_btn">Enroll Now</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="course_admission_online_saminar_btn">ফ্রি সেমিনার</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our_cources_review_section'>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8">
                            <h1 className='our_cources_review_title'>মন্তব্য</h1>
                            <p className='our_cources_review_peragraph'>আমরা বিশ্বাস করি আমাদের প্রতিটি শিক্ষার্থী ক্রিয়েটিভ আইটি পরিবারের সদস্য। তাই শিক্ষার্থীদের যেকোনো গঠনমূলক মন্তব্য আমাদের ভুল-ত্রুটি শুধরে সামনে এগিয়ে চলার পথে প্রেরণা যোগায়।</p>
                        </div>
                    </div>
                    <CourseReview />
                </div>
            </section>
        </Layout >
    )
}

export default CoursesDetails