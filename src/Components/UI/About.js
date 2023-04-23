import React from 'react';
import ReactPlayer from 'react-player';
import SignUp from '../../assets/videos/sign-up.mov';

const About = () => {

    return (
        <section
            className="pt-0" id="about">
            <div className="container pt-8" id="about">
                <div className="items-center justify-between
               sm:flex-col md:flex md:flex-row">
                    {/*-------------ABOUT CONTENT LEFT SIDE-------------*/}
                    <div className="w-full md:basis-1/2">
                        <h2 data-aos="fade-up" data-aos-duration="1500"
                            className="mt-5 text-hOneColor font-[800]
                            text-[1.8rem] leading-[35px]
                            sm:text-[40px] sm:leading-[46px] drop-shadow">
                            How It Works...?
                        </h2>
                        <p data-aos="fade-left"
                           data-aos-duration="1500"
                           className="flex gap-2 text-smallText
                           pr-8 mt-12 font-[500]
                           text-[18px] leading-7
                           sm:pl-3 ri-sm:pr-10 drop-shadow">
                            So in order to start using this extraordinary web site,
                            there are a few things that you need to know about and do.
                            Firstly you have to know that this is a strictly streaming site.
                            Secondly this is a free service and if every you feel that
                            we don't have something you are looking for, contact us, we are
                            willing to assist where possible.
                            Finally to get started simply sign up and be awesome.
                        </p>
                    </div>
                    {/*-------------ABOUT CONTENT LEFT SIDE END-------------*/}
                    {/*-------------ABOUT CAROUSEL START-------------*/}
                    <div data-aos="fade-left" data-aos-duration="1500"
                        className="basis-1/3 mt-10 sm:mt-5 ">
                        <div>
                             <ReactPlayer
                                 width="100%"
                                 height="100%"
                                 url={SignUp}
                                 controls={false}
                                 playing={true}
                                 loop={true}
                                 muted={true}/>
                         </div>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default About;