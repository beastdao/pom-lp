import React from 'react'
import partnerData from '../partners.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function Partners() {
  return (
    <section className='m-8'>
        <h2 className='font-arimo font-thin mt-4 mb-8'>ECOSYSTEM</h2>
        <div className='flex flex-row mb-8'>
            {
                partnerData.ecosystem.map(
                    (partner, index) => {
                        return (
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={6}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <div className='flex flex-col items-center'>
                                        <a href={partner.url}>
                                            <img src={partner.logo} alt={partner.name} className='w-24 h-24'/>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        )
                    }
                )
            }
        </div>

        <h2 className='font-arimo font-thin mt-4 mb-8'>PARTNERS</h2>
        <div className='flex flex-row mb-8'>
        {
                partnerData.partners.map(
                    (partner, index) => {
                        return (
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={6}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col items-center'>
                                        <a href={partner.url}>
                                            <img src={partner.logo} alt={partner.name} className='w-24 h-24'/>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        )
                    }
                )
            }
        </div>
    </section>
  )
}

export default Partners