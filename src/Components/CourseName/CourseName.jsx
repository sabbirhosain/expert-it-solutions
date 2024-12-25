import Slider from "react-slick";
import './CourseName.css'
import image1 from '../../assets/cources-icons/pc.png'
import image2 from '../../assets/cources-icons/web-design.png'
import image3 from '../../assets/cources-icons/video-editing-app.png'
import image4 from '../../assets/cources-icons/vector.png'
import image5 from '../../assets/cources-icons/search-engine-optimization.png'
import image6 from '../../assets/cources-icons/computer-networks.png'
import image7 from '../../assets/cources-icons/social-media.png'
import image8 from '../../assets/cources-icons/engineer.png'

const CourseName = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="course_name_box">
                    <div className="text-center">
                        <div className="course_name_icon"> <img src={image1} alt="image-1" /></div>
                        <a href="#" className="course_name_title">বেসিক কম্পিউটার এন্ড এম.এস অফিস</a>
                    </div>
                </div>
                <div className="course_name_box">
                    <div className="text-center">
                        <div className="course_name_icon"> <img src={image2} alt="image-1" /></div>
                        <a href="#" className="course_name_title">ওয়েব এন্ড সফটওয়্যার</a>
                    </div>
                </div>
                <div className="course_name_box">
                    <div className="text-center">
                        <div className="course_name_icon"> <img src={image3} alt="image-1" /></div>
                        <a href="" className="course_name_title">ভিডিও এডিটিং</a>
                    </div>
                </div>
                <div className="course_name_box">
                    <div className="text-center">
                        <div className="course_name_icon"> <img src={image4} alt="image-1" /></div>
                        <a href="" className="course_name_title">গ্রাফিক ডিজাইন</a>
                    </div>
                </div>
                <div className="course_name_box">
                    <div className="text-center">
                        <div className="course_name_icon"> <img src={image5} alt="image-1" /></div>
                        <a href="" className="course_name_title">সার্চ ইঞ্জিন অপ্টিমাইজেশান(SEO)</a>
                    </div>
                </div>
                <div className="course_name_box">
                    <div className="text-center">
                        <div className="course_name_icon"> <img src={image6} alt="image-1" /></div>
                        <a href="" className="course_name_title">ওবেসিক নেটওয়ার্কিং</a>
                    </div>
                </div>
                <div className="course_name_box">
                    <div className="text-center">
                        <div className="course_name_icon"> <img src={image7} alt="image-1" /></div>
                        <a href="" className="course_name_title">ডিজিটাল মার্কেটিং</a>
                    </div>
                </div>
                <div className="course_name_box">
                    <div className="text-center">
                        <div className="course_name_icon"> <img src={image8} alt="image-1" /></div>
                        <a href="" className="course_name_title">আইটি এডমিনিস্টেশন</a>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default CourseName