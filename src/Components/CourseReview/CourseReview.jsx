import Slider from "react-slick";
import userImg from "../../assets/user_image.jpg";
import { FaFacebookF } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { MdModeComment } from "react-icons/md";
import { FaShare } from "react-icons/fa6";
import "./CourseReview.css"

const CourseReview = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
                <div className="course_review_box">
                    <div className="d-flex align-items-center justify-content-between pt-2 ps-3 pe-3 pb-2 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <img src={userImg} className="course_review_user_image" alt="user image" />
                            <div>
                                <a href="" className="d-block fw-bold">Md Sabbir Hosain</a>
                                <small className="d-block" style={{ marginTop: "-5px" }}>about 1 month ago</small>
                            </div>
                        </div>
                        <div className="course_review_icon_box">
                            <a href="" className="course_review_icon_icon"><FaFacebookF /></a>
                        </div>
                    </div>
                    <p className="d-block p-2">Expert IT Solution and Traning Center is one of the top institutes for learning .they teach us in a highly informative manner while also providing a conducive learning environment.</p>
                    <div className="pt-2 ps-3 pe-3 pb-2 border-top">
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><BiSolidLike /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><MdModeComment /> 20</a>
                            <a href="" className="d-flex align-items-center gap-1 text-secondary"><FaShare /> 20</a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default CourseReview