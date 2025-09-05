import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeader from "../SectionHeader/SectionHeader";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import "./Testimonials.css";
import img1 from "../../Assets/Images/user.png";
import img2 from "../../Assets/Images/user.png";
import img3 from "../../Assets/Images/user.png";
import img4 from "../../Assets/Images/user.png";
import img5 from "../../Assets/Images/018128f3e1ff3eb7fc7b835ab54067fedaec63dc.jpg";
import img6 from "../../Assets/Images/28100d5c03a705aca61bff3da2083f4232eaefb7.jpg";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import {ArrowLeft, ArrowRight} from "../../Assets/SVGs";
function Testimonials() {
  const backgrroundImages  = [img6 , img5]
  const reviewer = [
    {
      img: img1,
      name: "Ahmed Ali",
      job: "Web Developer",
      comment: "Great service and very fast delivery.",
    },
    {
      img: img2,
      name: "Sara Mohamed",
      job: "UI/UX Designer",
      comment: "The design quality exceeded my expectations.",
    },
    {
      img: img3,
      name: "Omar Hassan",
      job: "Backend Engineer",
      comment: "The platform is reliable and easy to use.",
    },
    {
      img: img4,
      name: "Mona Khaled",
      job: "Project Manager",
      comment: "Communication was smooth and professional.",
    },
    {
      img: img1,
      name: "Youssef Tarek",
      job: "Mobile Developer",
      comment: "The app works flawlessly on both iOS and Android.",
    },
    {
      img: img2,
      name: "Nour Adel",
      job: "Data Analyst",
      comment: "Reports are clear and very detailed.",
    },
    {
      img: img3,
      name: "Khaled Samir",
      job: "Digital Marketer",
      comment: "The marketing tools helped boost sales quickly.",
    },
    {
      img: img4,
      name: "Hana Ibrahim",
      job: "Content Writer",
      comment: "I loved how easy it was to publish and manage content.",
    },
  ];

  return (
    <div className='testimonials-container container'>
      <div className='testimonials-content content'>
        <div className='header'>
          <h2>Testimonials</h2>
          <SectionHeader header='our client reviews' />
        </div>
          <button className='prevButton'>
            <ArrowLeft width='30' />
          </button>
          <button className='nextButton'>
            <ArrowRight width='30' />
          </button>
          <Swiper
            navigation={{
              prevEl: ".prevButton",
              nextEl: ".nextButton",
            }}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Navigation]}
          >
            {reviewer.map((item , index) => (
              <SwiperSlide key={item.id}>
                <ReviewCard
                  backgroundImage={backgrroundImages[index % 2]}
                  name={item.name}
                  userImage={item.img}
                  job={item.job}
                  comment={item.comment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
}
export default Testimonials;
