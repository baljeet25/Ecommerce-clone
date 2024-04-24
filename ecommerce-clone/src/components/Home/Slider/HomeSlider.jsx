import React from 'react'
import Slider from "react-slick";
import './Slider.css';
import Banner1 from '../../../assets/banner1.jpg'
import Banner2 from '../../../assets/banner2.jpg'
import Banner3 from '../../../assets/banner3.jpg'
import Banner4 from '../../../assets/banner4.jpg'

const HomeSlider = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,  
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows:true,
    autoplay:true,
    autoplaySpeed:1500
  };

  return (


    <section className='homeSlider'>
      <div className='container'>

      <Slider {...settings} className='home_slider_Main'>
              <div className='item'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/3000x1200-toys-unrec2x-NEW._CB579491525_.jpg" />
              </div>
              <div className='item'> 
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/PC_Hero_BAU/IF_PC_Hero_3000x1200._CB583399235_.jpg"/>
              </div>

              <div className='item'> 
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/TECNOJIO/NLXCREATIVES/LAVA/sale/D123539958_IN_WLD_Lava_O2_New-Launch_DesktopTallHero_3000x1200._CB561112362_.jpg"/>
                    </div>
           
    </Slider>

    </div>
    </section>
  )
}

export default HomeSlider