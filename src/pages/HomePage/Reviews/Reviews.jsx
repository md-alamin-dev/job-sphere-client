import { useEffect, useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import ReactRating from 'react-rating';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const swiperRef = useRef(null);
    const axiosPublic = useAxiosPublic();

    const fetchReviews = useCallback(async () => {

        try {
            const response = await axiosPublic.get('/reviews');
            setReviews(response.data);

        } catch (error) {
            console.error('Error fetching reviews:', error);
        }

    }, [axiosPublic]);

    useEffect(() => {

        fetchReviews();

    }, [fetchReviews]);

    const goToPrev = () => {

        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToNext = () => {

        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (

        <div className="relative w-full py-6 group">

            <div className='text-center mb-14'>
                <h4 className='text-[#111922]'> Our
                    <span className='text-[#ff7e5f] ms-1'>Clients!</span>
                </h4>

                <h3 className='text-xl md:text-4xl text-[#111922] font-bold'>What Our Client Says!</h3>
            </div>

            {/* Navigation Arrows */}
            <div
                className="absolute -left-12 top-1/2 transform -translate-y-1/4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={goToPrev}
            >
                <button className="p-1 hover:bg-[#ff7e5f] border border-[#ff7e5f] text-[#ff7e5f] hover:text-white rounded-full flex items-center justify-center">
                    <IoIosArrowBack size={24} />
                </button>
            </div>
            <div
                className="absolute -right-12 top-1/2 transform -translate-y-1/4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={goToNext}
            >
                <button className="p-1 hover:bg-[#ff7e5f] border border-[#ff7e5f] text-[#ff7e5f] hover:text-white rounded-full flex items-center justify-center">
                    <IoIosArrowForward size={24} />
                </button>
            </div>

            {/* Swiper component */}
            <Swiper

                ref={swiperRef}
                modules={[Autoplay]}
                spaceBetween={30}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    // The number of slides per view based on screen size
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mySwiper"
            >
                {reviews.map((review, index) => (

                    <SwiperSlide key={index}>

                        <div className="p-8 bg-gray-100 rounded-lg shadow-lg relative">

                            <div className="absolute w-[2px] left-6 top-10 h-20 bg-[#ff7e5f]"></div>

                            <div className="absolute w-[2px] left-8 top-10 h-16 bg-[#ff7e5f]"></div>

                            <div className="ml-6">

                                <p className="italic text-gray-700 mb-4 relative z-10">{review.review}</p>

                                {/* Render rating*/}
                                <div className="mb-4">

                                    <ReactRating
                                        initialRating={review.rating}

                                        emptySymbol={<FaRegStar className="text-[#ff7e5f]" />}

                                        fullSymbol={<FaStar className="text-[#ff7e5f]" />}

                                        halfSymbol={<FaStarHalfAlt className="text-[#ff7e5f]" />}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-8 ms-2 relative z-10">

                            <img
                                className="w-16 h-16 rounded-full border-2 border-[#ff7e5f] "
                                src={review.userImg}
                                alt={review.userName}
                            />

                            <div>
                                <h3 className="text-md font-semibold text-gray-900">{review.userName}</h3>

                                <p className="text-sm text-gray-500">{review.userRole}</p>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
