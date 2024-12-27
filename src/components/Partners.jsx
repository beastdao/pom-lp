import React from 'react'
import partnerData from '../partners.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function Partners() {
  return (
    <section className='m-8'>
        <h2 className='font-arimo font-thin my-4'>ECOSYSTEM</h2>
        <div className='flex flex-row mt-4 mb-10'>
        <Swiper
            spaceBetween={50}
            slidesPerView={6}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                partnerData.ecosystem.map(
                    (partner, index) => {
                        return (
                            
                                <SwiperSlide>
                                    <div className='flex flex-col w-full h-full justify-center' key={index}>
                                        <a href={partner.url}>
                                            <img src={partner.path} alt={partner.name} className='w-24 h-18'/>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            
                        )
                    }
                )
            }
            </Swiper>
        </div>

        <h2 className='font-arimo font-thin mt-4 mb-8'>PARTNERS</h2>
        <div className='flex flex-row mt-4 mb-10'>
            <Swiper
                spaceBetween={50}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {
                partnerData.partners.map(
                    (partner, index) => {
                        return (
                            
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col w-full h-full justify-center'>
                                        <a href={partner.url}>
                                            <img src={partner.path} alt={partner.name} className='w-24 h-18'/>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            
                        )
                    }
                )
            }
            </Swiper>
        </div>
    </section>
  )
}

export default Partners