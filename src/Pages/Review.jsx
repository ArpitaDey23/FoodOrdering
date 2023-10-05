import React from "react";
import "../Styles/review.css"
import SimpleImageSlider from "react-simple-image-slider";
const Review =()=>{
 return(
    <>
    {/* <div className="traning-section">
          <h1>Client section</h1>
          <div className="container">
            <div className="training-items">
              <img src="https://i.ibb.co/c1GcS6V/138665.png" style={{height:"25%" ,width:"25%" }}/>
              <h3>php</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem numquam ullam maiores eligendi.
              </p>
              <button>Read More</button>
            </div>
            <div className="training-items">
              <img src="https://i.ibb.co/DQ3DDDx/photo-1633332755192-727a05c4013d-ixlib-rb-4-0.jpg" style={{height:"25%" ,width:"25%" }} />
              <h3>php</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem numquam ullam maiores eligendi.
              </p>
              <button>Read More</button>
            </div>
            <div className="training-items">
              <img src="" />
              <h3>php</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem numquam ullam maiores eligendi.
              </p>
              <button>Read More</button>
            </div>
            <div className="training-items">
              <img src="" />
              <h3>php</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem numquam ullam maiores eligendi.
              </p>
              <button>Read More</button>
            </div>
          </div>
         </div>  */}
           <section className="container-review">
      <div className="testimonial mySwiper">
        <div className="testi-content swiper-wrapper">
          <div className="slide swiper-slide">
            <img src="https://i.ibb.co/DQ3DDDx/photo-1633332755192-727a05c4013d-ixlib-rb-4-0.jpg" alt="" className="image" />
            <p>
            This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
            <div className="details" style={{color:"yellow"}}>
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="slide swiper-slide">
            <img src="https://i.ibb.co/Xt1LQzS/blonde-gir-summer-city-black-white-picture-lifestyle-fashion-people-concept-96244193.jpg" alt="" className="image" />
            <p>
            It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
            <div className="details" style={{color:"yellow"}}>
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="slide swiper-slide">
            <img src="https://i.ibb.co/dWQn5WV/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vec.jpg" alt="" className="image" />
            <p>
            Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
            <div className="details"style={{color:"yellow"}}>
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
       
  </div>
    </section>
    </>
 )
}
export default Review;