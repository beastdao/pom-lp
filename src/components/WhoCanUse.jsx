import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
/* import { Navigation } from 'swiper/modules' */
import CardLight from './CardLight';
import 'swiper/css';
import { Card } from 'flowbite-react';

function WhoCanUse() {
  return (
    <div className='p-8'>
      <h1 className='text-center mb-8'>Who Can Use Pom?</h1>

      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <CardLight title="Decentralized Autonomous Organizations" text="Boost a sense of belonging among members globally and enable collaborative decision-making with token-powered governance powered by a dedicated PoM voting strategy on the Snapshot." />
      </SwiperSlide>
      
      <SwiperSlide>
        <CardLight title="Blockchain Projects" text="Build credibility and reward active members with beautiful personalised digital merch!" />
      </SwiperSlide>

      <SwiperSlide>
        <CardLight title="Collaborative Groups & Crypto Communities" text="Verify authenticity for token-gated access to perks, privileges, or events, and unlock exclusive future features like subscriptions to increase available resources (*coming soon)." />
      </SwiperSlide>

      <SwiperSlide>
        <CardLight title="Newcomers to the Web3 Space" text="Get your 100% free human readable name like alice@eth or discover authentic web3 communities and join them with ease!" />
      </SwiperSlide>
        
      <SwiperSlide>
        <CardLight title="Active Web3 Community Members" text="Share insights or concerns through your reviews and help your community and the whole crypto space thrive. Grab now your 100% free ENS name alternative at @eth community on PoM." />
      </SwiperSlide>

    </Swiper>
    </div>
  );
}

export default WhoCanUse;
