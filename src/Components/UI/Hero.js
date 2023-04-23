import React from "react";
import CountUp from "react-countup";
import Carousel from 'react-bootstrap/Carousel';


import cardImage01 from "../../assets/images/cardImg01.jpg";
import cardImage02 from "../../assets/images/cardImg02.jpeg";
import cardImage03 from "../../assets/images/cardImg03.jpeg";
import cardImage04 from "../../assets/images/cardImg04.jpeg";
import cardImage05 from "../../assets/images/cardImg05.jpeg";
import cardImage06 from "../../assets/images/cardImg06.jpeg";



const Hero = () => {

    return(
      <section
          className="pt-0">
        <div className="container pt-14" id="home">
          <div className="items-center justify-between
               sm:flex-col md:flex md:flex-row">
            {/*-------------HERO CONTENT LEFT SIDE-------------*/}
            <div className="w-full md:basis-1/2">
              <h1 data-aos="fade-up" data-aos-duration="1500"
                  className="mt-5 text-hOneColor font-[800]
                  text-[1.8rem] leading-[35px]
                  sm:text-[40px] sm:leading-[46px] drop-shadow">
                Your Movie Selection
              </h1>
                <p data-aos="fade-left"
                   data-aos-duration="1500"
                   className="flex gap-2 text-smallText
                   pr-8 mt-12 font-[500]
                   text-[18px] leading-7
                   sm:pl-3 ri-sm:pr-10 drop-shadow">
                    View all your favourite movies. To add more to your
                    selection click the button below after logging in.
                    If you don't have an account create one now.
                </p>
                <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="200"
                     className="mt-7 flex items-center gap-6">
                    <a
                        href="#home">
                        <button
                            className="bg-hOneColor text-newDarkAccent
                            font-[600] flex items-center gap-2
                            hover:bg-newDarkAccent hover:text-hOneColor ease-in duration-300
                            py-2 px-4 rounded-[8px] mb-5">
                            View More
                        </button>
                    </a>
                </div>
            </div>
              {/*-------------HERO CONTENT LEFT SIDE END-------------*/}
              {/*-------------HERO CAROUSEL START-------------*/}
            <div data-aos="zoom-in" data-aos-duration="1500"
                 className="basis-1/3 mt-10 sm:mt-5">
                    <Carousel variant="dark"
                              controls={false}
                              indicators={false}
                              >
                      {/*item 1*/}
                      <Carousel.Item interval={5000}>
                          <img
                              className="block w-[455px] rounded-[8px] h-[450px] "
                              src={cardImage01}
                              alt="First slide"
                          />
                      </Carousel.Item>
                      {/*item 2*/}
                      <Carousel.Item interval={5000}>
                          <img
                              className="block w-full rounded-[8px] h-[450px]"
                              src={cardImage02}
                              alt="Second slide"
                          />
                      </Carousel.Item>
                      {/*item 3*/}
                      <Carousel.Item interval={5000}>
                          <img
                              className="block w-full rounded-[8px] h-[450px]"
                              src={cardImage03}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      {/*item 4*/}
                      <Carousel.Item interval={5000}>
                          <img
                              className=" w-full rounded-[8px] h-[450px]"
                              src={cardImage04}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      {/*item 5*/}
                      <Carousel.Item interval={5000}>
                          <img
                              className="block w-full rounded-[8px] h-[450px]"
                              src={cardImage05}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      {/*item 6*/}
                      <Carousel.Item interval={5000}>
                          <img
                              className="block w-full rounded-[8px] h-[450px]"
                              src={cardImage06}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                  </Carousel>

              </div>

              {/*-------------HERO CAROUSEL END-------------*/}
              {/*-------------Count UP SECTION RIGHT SIDE-------------*/}
            <div id="right-side" className="md:basis-1/5 flex justify-between text-center
                 mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end
                 md:text-end">
                <div data-aos="fade-left" data-aos-durations="1500" data-aos-delay="200"
                    className="mb:-10">
                    <h2 className="text-hOneColor font-[700] text-[32px] drop-shadow">
                        <CountUp start={0} end={1000} suffix=' +' />
                    </h2>
                    <h4 className="text-newDarkAccent font-[500] text-[18px] drop-shadow">
                        Movies
                    </h4>
                </div>
                <div data-aos="fade-left" data-aos-durations="1500" data-aos-delay="250"
                    className="mb:-10">
                    <h2 className="text-hOneColor font-[700] text-[32px] drop-shadow">
                        <CountUp start={0} end={500} suffix=' +' />
                    </h2>
                    <h4 className="text-newDarkAccent font-[500] text-[18px] drop-shadow">
                        Series
                    </h4>
                </div>
                <div data-aos="fade-left" data-aos-durations="1500" data-aos-delay="300"
                    className="mb:-10">
                    <h2 className="text-hOneColor font-[700] text-[32px] drop-shadow">
                        <CountUp start={0} end={100} suffix=' %' />
                    </h2>
                    <h4 className="text-newDarkAccent font-[500] text-[18px] drop-shadow">
                        Binge Worthy
                    </h4>
                </div>
            </div>
              {/*-------------Count UP SECTION RIGHT SIDE-------------*/}
          </div>
        </div>

      </section>
  )
}
export default Hero;
