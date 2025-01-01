import Layout from '../Components/Layout/Layout'
import image1 from '../assets/cources-icons/pc.png'
import image2 from '../assets/cources-icons/web-design.png'
import image3 from '../assets/cources-icons/video-editing-app.png'
import image4 from '../assets/cources-icons/vector.png'
import image5 from '../assets/cources-icons/search-engine-optimization.png'
import image6 from '../assets/cources-icons/computer-networks.png'
import image7 from '../assets/cources-icons/social-media.png'
import image8 from '../assets/cources-icons/engineer.png'
import CourseNameCard from '../Components/CourseNameCard/CourseNameCard'
import CourseReview from '../Components/CourseReview/CourseReview'
import "./Courses.css"

const Courses = () => {
    return (
        <Layout>
            <section className='our_couces_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h2 className='our_cource_title'>কোর্স সমূহ</h2>
                            <p className='our_cource_pera'>বর্তমান বিশ্বের সব ট্রেন্ডি এবং চাহিদাসম্পন্ন সব কোর্স রয়েছে ক্রিয়েটিভ আইটি ইনস্টিটিউটে। কোর্স করার সময় যে প্রয়োজনীয় কনফিগারেশনের কম্পিউটার দরকার, তার সবই রয়েছে আমাদের ল্যাবে। আপনি চাইলেই ক্লাসের পরে ল্যাবে বসে কোর্স বিষয়ক যেকোনো কিছু প্র্যাকটিস করতে পারেন। প্রতিটি কোর্স এমনভাবে ডিজাইন করা হয়েছে যাতে আপনি কোর্স শেষে প্রতিটি টপিকে কাজ করার আত্মবিশ্বাস পান।</p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image1} alt="image-1" /></div>
                                    <a href="#" className="course_name_title">বেসিক কম্পিউটার এন্ড এম.এস অফিস</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image2} alt="image-1" /></div>
                                    <a href="#" className="course_name_title">ওয়েব এন্ড সফটওয়্যার</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image3} alt="image-1" /></div>
                                    <a href="" className="course_name_title">ভিডিও এডিটিং</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image4} alt="image-1" /></div>
                                    <a href="" className="course_name_title">গ্রাফিক ডিজাইন</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image5} alt="image-1" /></div>
                                    <a href="" className="course_name_title">সার্চ ইঞ্জিন অপ্টিমাইজেশান(SEO)</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image6} alt="image-1" /></div>
                                    <a href="" className="course_name_title">ওবেসিক নেটওয়ার্কিং</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image7} alt="image-1" /></div>
                                    <a href="" className="course_name_title">ডিজিটাল মার্কেটিং</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image8} alt="image-1" /></div>
                                    <a href="" className="course_name_title">আইটি এডমিনিস্টেশন</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image8} alt="image-1" /></div>
                                    <a href="" className="course_name_title">আইটি এডমিনিস্টেশন</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image8} alt="image-1" /></div>
                                    <a href="" className="course_name_title">আইটি এডমিনিস্টেশন</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image8} alt="image-1" /></div>
                                    <a href="" className="course_name_title">আইটি এডমিনিস্টেশন</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div className="course_name_box">
                                <div className="text-center">
                                    <div className="course_name_icon"> <img src={image8} alt="image-1" /></div>
                                    <a href="" className="course_name_title">আইটি এডমিনিস্টেশন</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our_admission_section'>
                <div className="container">
                    <div className="row align-items-center justify-content-center pb-5">
                        <div className="col-md-10">
                            <h1 className='our_admission_title'>সকল কোর্সে ভর্তি চলছে</h1>
                            <p className='our_admisson_peragraph'>দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেগুলো অন্তর্ভুক্ত করেই সাজানো হয়েছে আমাদের কোর্সের তালিকা। এখান থেকে আপনার সুবিধামত অনলাইন বা অফলাইনে কোর্সে এনরোল করতে পারবেন যেকোনো সময়।</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <h2 className='our_admission_sub_title'>ডিজাইন এন্ড মাল্টিমিডিয়া</h2>
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                    </div>
                    <div className="row mb-5">
                        <h2 className='our_admission_sub_title'>ডিজাইন এন্ড মাল্টিমিডিয়া</h2>
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                    </div>
                    <div className="row mb-5">
                        <h2 className='our_admission_sub_title'>ডিজাইন এন্ড মাল্টিমিডিয়া</h2>
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                    </div>
                    <div className="row mb-5">
                        <h2 className='our_admission_sub_title'>ডিজাইন এন্ড মাল্টিমিডিয়া</h2>
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                    </div>
                    <div className="row">
                        <h2 className='our_admission_sub_title'>ডিজাইন এন্ড মাল্টিমিডিয়া</h2>
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
                        <CourseNameCard />
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
        </Layout>
    )
}

export default Courses