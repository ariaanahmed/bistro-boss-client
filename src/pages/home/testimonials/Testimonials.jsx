import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-pearl.vercel.app/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What our client say"
                heading="Testimonials"
            ></SectionTitle>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map((review) => <SwiperSlide key={review._id}>
                            <div className="my-16 mx-24 flex flex-col items-center space-y-5">

                                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />

                                <p>{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;