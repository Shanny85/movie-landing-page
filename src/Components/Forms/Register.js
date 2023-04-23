import React,{useState} from "react";


const Register = ({setShowRegister}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <div onSubmit={handleSubmit}
                 className="w-11/12 md:w-full h-full fixed top-0
                           left-0 z-10 bg-firstColor bg-opacity-50">
                {/*-------------REGISTER SECTION-------------*/}
                <div id="register"
                     className="max-w-[600px] sm:w-full absolute
                                top-1/2 left-1/2 z-20 bg-fourthColor rounded-[8px]
                                transform -translate-x-1/2 -translate-y-1/2 p-5">
                    <div>
                        <form className="w-full pt-2">
                            <div className="flex items-center justify-center
                                 mb-3 text-newDarkAccent font-[800]
                                 text-[1.8rem] leading-[35px]
                                 sm:text-[40px] sm:leading-[46px] drop-shadow">
                                <h2>Register</h2>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i className="ri-user-add-line text-white drop-shadow"></i>
                                <input value={name} onChange={(e) => setName(e.target.value)}
                                       type="text"
                                       placeholder=" Enter your name"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>

                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i className="ri-mail-line text-white drop-shadow"></i>
                                <input value={email} onChange={(e) => setEmail(e.target.value)}
                                       type="email"
                                       placeholder=" Enter your email"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i className="ri-lock-line text-white drop-shadow"></i>
                                <input value={password} onChange={(e) => setPassword(e.target.value)}
                                       type="password"
                                       placeholder=" Create your password"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-2 flex items-center justify-between text-2xl gap-4">
                                <i className="ri-lock-line text-white drop-shadow"></i>
                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                       type="password"
                                       placeholder=" Confirm your password"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="flex items-center justify-center text-white mb-1 p-1">
                                <a  className="pr-2 font-500 hover:text-smallText"
                                    href="#login">
                                    Log In
                                </a>
                                <span> / </span>
                                <a  className="pl-2 font-500 hover:text-youtubeColor"
                                    href="#forgot-password">
                                    Forgot Password
                                </a>
                            </div>
                            {/*-------------SUBMIT BUTTON-------------*/}
                            <button type="submit"
                                    className="flex items-center justify-center
                                gap-2 text-newDarkAccent font-[600]
                                text-[1.5rem]
                                p-1 rounded-[8px]
                                w-full
                                bg-hOneColor
                                hover:bg-newDarkAccent
                                hover:text-white
                                hover:font-[600] ease-linear duration-150 drop-shadow">
                                Register
                            </button>
                        </form>
                    </div>
                    {/*-------------CLOSE BUTTON-------------*/}
                    <button onClick={()=> setShowRegister(false)}

                            className="w-[1.8rem] h-[1.8rem] bg-orange-500
                                   absolute top-[1.7rem] right-[1.7rem]
                                   text-[25px] flex items-center justify-center rounded-[3px]
                                   leading-0 cursor-pointer hover:text-youtubeColor">
                        &times;
                    </button>
                </div>
                {/*-------------REGISTER SECTION END-------------*/}

            </div>
        </>
    )
}

export default Register;

