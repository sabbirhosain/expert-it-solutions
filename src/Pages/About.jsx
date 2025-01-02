import Layout from '../Components/Layout/Layout'
import course_details_img from '../assets/course_1.jpg';
import expert_it_certificate_img from '../assets/expert_it_training_center.jpg';
import "./About.css"

const About = () => {
  return (
    <Layout>
      <section className='about_section'>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h2 className='about_sec_title'>আমাদের সম্পর্কে</h2>
              <p className='about_sec_peragraph'>ক্রিয়েটিভ আইটি ইনস্টিটিউট, আইটিতে সাফল্য সৃষ্টির লক্ষ্যে প্রতিষ্ঠিত একটি বিশ্বস্ত প্রতিষ্ঠান। প্রতিষ্ঠার পর থেকে, ক্রিয়েটিভ আইটি সুদীর্ঘ ১৫ বছর ধরে ডিজিটাল বাংলাদেশ বিনির্মাণে অবদান রেখে চলেছে এবং যুগান্তকারী পরিবর্তনের মাধ্যমে বহুমুখী সাফল্য অর্জন করছে। বাংলাদেশের অন্যতম এই আইটি প্রতিষ্ঠানটি ২০০৮ সাল থেকে বেকার সমস্যা দূর করতেও গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।</p>
            </div>
          </div>
        </div>
      </section>

      <section className='about_expert_it_section'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5">
              <h5 className="about_sub_heading">সাফল্যের ১৫ বছর</h5>
              <h1 className="about_heading">আইটি এক্সপার্ট তৈরির জগতে বিশ্বস্ত প্রতিষ্ঠান</h1>
              <p className="about_paragraph">আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে নিজেকে আপডেটেড রাখতে আপনার পাশে রয়েছে ক্রিয়েটিভ আইটি ইনস্টিটিউট। আইটি সেক্টর হোক বা নন-আইটি সেক্টর, সবখানেই এখন আইটি এক্সপার্টদের ভালো চাহিদা রয়েছে। এজন্যই আপডেটেড কারিকুলাম, অভিজ্ঞ মেন্টর আর আধুনিক ল্যাব নিয়ে দীর্ঘ ১৫ বছর যাবত আমরা তৈরি করে চলেছি আইটি এক্সপার্ট। এর ধারাবাহিকতায় আমরা পেয়েছি ৭০ হাজারেরও বেশি সফল মুখ</p>
              <div className="d-flex align-items-center gap-3">
                <a href="#" className="about_sec_btn">ব্রাউজ কোর্স</a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="aboout_sec_img_box">
                <img src={course_details_img} className="about_sec_img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about_expert_it_certificate'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="aboout_expert_img_box">
                <img src={expert_it_certificate_img} className="about_expert_img" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <h1 className="about_heading">দেশের অন্যতম TICTB সার্টিফাইড আইটি ট্রেনিং ইনস্টিটিউট</h1>
              <p className="about_paragraph">ক্রিয়েটিভ আইটি ২০১৫ সালে অর্জন করে দারুণ এক সম্মান। বাংলাদেশের অন্যতম ISO সার্টিফাইড ট্রেনিং ইনস্টিটিউট হিসেবে স্বীকৃতি লাভ করে। ISO এর প্রধান কাজ শিল্প ও বাণিজ্যের বিভিন্ন বিষয়ের উপর মান নির্ধারণ, প্রণয়ন এবং বিভিন্ন প্রতিষ্ঠানকে মানের সনদপত্র প্রদান। তাই ISO প্রদত্ত এই সার্টিফিকেট ক্রিয়েটিভ আইটির জন্য একটি বড় সম্মাননা। এতে প্রমাণিত হয় আমরা সময়ের চাহিদা অনুযায়ী মানসম্মত সার্ভিস, আন্তর্জাতিক কোর্স মডিউল এবং উন্নত পরিবেশ নিশ্চিত করছি। তাই শিক্ষার্থীদের যুগোপযোগী ক্যারিয়ারের পথ সুগম করার যাত্রায় ক্রিয়েটিভ আইটি এখন সবার সেরা।</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team-area">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8">
              <h1 className='our_cources_review_title'>আমাদের টিম</h1>
              <p className='our_cources_review_peragraph'>আমরা বিশ্বাস করি আমাদের প্রতিটি শিক্ষার্থী ক্রিয়েটিভ আইটি পরিবারের সদস্য। তাই শিক্ষার্থীদের যেকোনো গঠনমূলক মন্তব্য আমাদের ভুল-ত্রুটি শুধরে সামনে এগিয়ে চলার পথে প্রেরণা যোগায়।</p>
            </div>
          </div>
          <div className="row team-items">
            <div className="col-md-4 single-item">
              <div className="item">
                <div className="thumb">
                  <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                  <div className="overlay">
                    <h4>Lorem Ipsum</h4>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="social">
                      <ul>
                        <li className="twitter">
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li className="pinterest">
                          <a href="#"><i className="fab fa-pinterest" /></a>
                        </li>
                        <li className="instagram">
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li className="vimeo">
                          <a href="#"><i className="fab fa-vimeo-v" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <span className="message">
                    <a href="#"><i className="fas fa-envelope-open" /></a>
                  </span>
                  <h4>Lorem Ipsum</h4>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 single-item">
              <div className="item">
                <div className="thumb">
                  <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                  <div className="overlay">
                    <h4>Lorem Ipsum</h4>
                    <p>
                      kING.
                    </p>
                    <div className="social">
                      <ul>
                        <li className="twitter">
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li className="pinterest">
                          <a href="#"><i className="fab fa-pinterest" /></a>
                        </li>
                        <li className="instagram">
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li className="vimeo">
                          <a href="#"><i className="fab fa-vimeo-v" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <span className="message">
                    <a href="#"><i className="fas fa-envelope-open" /></a>
                  </span>
                  <h4>Lorem Ipsum</h4>
                  <span>App Developer</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 single-item">
              <div className="item">
                <div className="thumb">
                  <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                  <div className="overlay">
                    <h4>Lorem Ipsum</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="social">
                      <ul>
                        <li className="twitter">
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li className="pinterest">
                          <a href="#"><i className="fab fa-pinterest" /></a>
                        </li>
                        <li className="instagram">
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li className="vimeo">
                          <a href="#"><i className="fab fa-vimeo-v" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <span className="message">
                    <a href="#"><i className="fas fa-envelope-open" /></a>
                  </span>
                  <h4>Lorem Ipsum</h4>
                  <span>Web designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}

export default About