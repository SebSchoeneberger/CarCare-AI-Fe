import { Link } from "react-router-dom";
import Chatbox from "../components/Chatbox";
import img1 from "../assets/Car Care AI.png"


function Home() {
    return ( 
        <>
        <div className="hero min-h-screen bg-transparent flex justify-center gap-4 ">

            <div className="text-center hero-content w-1/2">
                <div className="max-w-md">
                    <h1 className="mb-5 text-7xl font-bold">
                        Car Care AI
                    </h1>
                    <p className="mb-5 font-bold text-xl ">
                        The best car care application for your car.
                    </p>
                    <Link to="/signup" className="btn bg-[#173753] border-black text-white">Get Started</Link>
                </div>
            </div>

            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1"><img src={img1} alt="" /></div>
                </div>
            </div>
        </div>

        <section className="flex">

        <div className="text-center hero-content w-1/2">
                <div className="max-w-md">
                    <h1 className="mb-5 text-7xl font-bold">
                       Try it Yourself!
                    </h1>
                    <p className="mb-5 font-bold text-xl ">
                        2 Free Questions/per day
                    </p>
                </div>
            </div>

        <Chatbox />

 
        </section>


        </>
     );
}

export default Home;