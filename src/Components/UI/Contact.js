import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="mt-8 pb-8 ">
            <div className="container">
                <h2 data-aos="fade-down" data-aos-duration="1500"
                    className="text-hOneColor flex items-center justify-center text-[2.5rem] font-[700] mt-30 mb-8">
                    Reach Out
                </h2>
                <div className="md:flex justify-center items-center">
                    <div className="w-full mt-10 md:mt-0 md:w-1/2 sm:h-[480px]
                         lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8
                         rounded-[10px] bg-opacity-40">
                        <form className="w-full pt-3">
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100"
                                    className="ri-user-line text-white"></i>
                                <input type="text" placeholder="Enter your name"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"
                                    className="ri-mail-line text-white"></i>
                                <input type="email"
                                       placeholder="Enter your email"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"
                                    className="ri-focus-2-line text-white"></i>
                                <input type="text"
                                       placeholder="Subject"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"
                                    className="ri-message-2-line text-white"></i>
                              <textarea
                                  rows={3}
                                  placeholder="Write a brief Message."
                                  className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200"
                                    className="ri-mail-send-line text-white"></i>
                                <button className="w-full p-2 focus-outline-none rounded-[5px]
                                    bg-smallText font-[600]
                                    text-hOneColor hover:bg-newDarkAccent hover:text-white
                                    text-center ease-linear duration-150">

                                    Submit Message
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;