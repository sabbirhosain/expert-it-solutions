import Layout from "../Components/Layout/Layout"
import course_details_img from '../assets/course_1.jpg'
import "./CoursesDetails.css"
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
        </Layout>
    )
}

export default CoursesDetails