import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function TopArtistas() {

  const artistas = [
    {
      nome: "calema",
      plays: 5.005,
      image: "https://pbs.twimg.com/media/E11gViDXMAIeQ3u.jpg"
    },
    //https://pbs.twimg.com/media/E11gViDXMAIeQ3u.jpg
    {
      nome: "ana joyce",
      plays: 50.225,
      image: "https://th.bing.com/th/id/OIP.ATGYgKQpSBpD9nnvtimpAwHaE4?rs=1&pid=ImgDetMain"
    },
    {
      nome: "post malone",
      plays: 50.225,
      image: "https://th.bing.com/th/id/R.ffdefbc6182a7d3a3923ba2b912f714b?rik=0bZWAjRoQbug5g&pid=ImgRaw&r=0"
    },

    {
      nome: "hernani",
      plays: 50.225,
      image: "https://th.bing.com/th/id/R.d8031003cba43f379acab9be42f561fb?rik=2cp6fDRxlq73mA&pid=ImgRaw&r=0"
    },
    {
      nome: "the weeknd",
      plays: 50.225,
      image: "https://th.bing.com/th/id/OIP.QIFEhvmMNwD7mwBDQPUeDQHaHa?rs=1&pid=ImgDetMain"
    },
    {
      nome: "doja cat",
      plays: 50.225,
      image: "https://biographyvilla.com/wp-content/uploads/2022/03/Doja-Cat.jpg"
    },
    {
      nome: "k. lamark",
      plays: 50.225,
      image: "//th.bing.com/th/id/R.8b7be060b47e885c34ad41eea05e10e9?rik=p2FdyvgVYqmCAQ&pid=ImgRaw&r=0"
    },
    {
      nome: "calema",
      plays: 5.005,
      image: "https://pbs.twimg.com/media/E11gViDXMAIeQ3u.jpg"
    },
    {
      nome: "ana joyce",
      plays: 50.225,
      image: "https://th.bing.com/th/id/OIP.ATGYgKQpSBpD9nnvtimpAwHaE4?rs=1&pid=ImgDetMain"
    },
    {
      nome: "post malone",
      plays: 50.225,
      image: "https://th.bing.com/th/id/R.ffdefbc6182a7d3a3923ba2b912f714b?rik=0bZWAjRoQbug5g&pid=ImgRaw&r=0"
    },


    
   ]
  const [swiperRef, setSwiperRef] = useState(null);

 const [slidesPerView, setSlidesPerView] = useState(7);

 useEffect(() => {
  const handleResize = () => {
    const windowWidth = window.innerWidth;
  
    switch (true) {
      case windowWidth <= 1172:
        setSlidesPerView(5);
        break;
        case windowWidth <= 670:
        setSlidesPerView(4);
        break;
      case windowWidth <= 400:
        setSlidesPerView(2);
        break;
      default:
        setSlidesPerView(7);
    }

};

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);




  return (
    <>
  <div className=' dark:border-strokedark dark:bg-boxdark mt-6 px-6'>
      <h3 className='capitalize font-semibold text-white text-xl pt-3'>top artistas</h3>
      <Swiper
        onSwiper={setSwiperRef}
       
        slidesPerView={slidesPerView}
        centeredSlides={false}
        spaceBetween={30}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        
      >
       
        {artistas.map((art, key)=>(
          <div>
              
          <SwiperSlide key={key} className='rounded-md'>
            <div className='py-1'>
              <div className="w-29 h-28 mx-auto ">
                <img src={art.image} alt="" className='rounded-md'/>
              </div>
              <div className='relative'>
              <p className='capitalize text-white font-medium '>{art.nome}</p>
              <span className='text-sm pt-[-2px] relative top-[-5px]'>{art.plays} plays</span>
                
              </div>
            </div>
          </SwiperSlide>
          </div>

        ))}
      </Swiper>
  </div>

      
    </>
  );
}








  /*
  
  const artistas = [
    {
      nome: "calema",
      plays: 5.005,
      image: "https://pbs.twimg.com/media/E11gViDXMAIeQ3u.jpg"
    },
    //https://pbs.twimg.com/media/E11gViDXMAIeQ3u.jpg
    {
      nome: "ana joyce",
      plays: 50.225,
      image: "https://th.bing.com/th/id/OIP.ATGYgKQpSBpD9nnvtimpAwHaE4?rs=1&pid=ImgDetMain"
    },
    {
      nome: "post malone",
      plays: 50.225,
      image: "https://th.bing.com/th/id/R.ffdefbc6182a7d3a3923ba2b912f714b?rik=0bZWAjRoQbug5g&pid=ImgRaw&r=0"
    },

    {
      nome: "hernani",
      plays: 50.225,
      image: "https://th.bing.com/th/id/R.d8031003cba43f379acab9be42f561fb?rik=2cp6fDRxlq73mA&pid=ImgRaw&r=0"
    },
    {
      nome: "the weeknd",
      plays: 50.225,
      image: "https://th.bing.com/th/id/OIP.QIFEhvmMNwD7mwBDQPUeDQHaHa?rs=1&pid=ImgDetMain"
    },
    {
      nome: "doja cat",
      plays: 50.225,
      image: "https://biographyvilla.com/wp-content/uploads/2022/03/Doja-Cat.jpg"
    },
    {
      nome: "doja cat",
      plays: 50.225,
      image: "//th.bing.com/th/id/R.8b7be060b47e885c34ad41eea05e10e9?rik=p2FdyvgVYqmCAQ&pid=ImgRaw&r=0"
    },


    
   ]
  */