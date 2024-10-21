import React from "react";

import './Home.css'

import { Card } from "flowbite-react";

import myrasm from '../assets/bmwm1.jpg'
import myrasm1 from '../assets/bmwm2.jpg'
import myrasm2 from '../assets/bmwm3.jpg'
import myrasm3 from '../assets/bmwm4.jpg'
import myrasm4 from '../assets/bmwm5.jpg'
import myrasm5 from '../assets/bmwm8.jpg'


const Home=()=>{
    return(
        <div className="home">
            <div className="background-container">
                <button className="overlay-button bg">BMW</button>
            </div>
            <div className="bmwn1 flex justify-center mt-4 gap-12">
                <button className="btn1">BMM M1</button>
                <button className="btn2">BMM M2</button>
                <button className="btn3">BMM M3</button>
                <button className="btn4">BMM M4</button>
                <button className="btn5">BMM M5</button>
                <button className="btn6">BMM i3</button>
                <button className="btn7">BMM i4</button>
                <button className="btn8">BMM i5</button>
                <button className="btn9">BMM i7</button>
                <button className="btn10">BMM i8</button>
            </div>

            <div className="cardlar flex justify-center mt-20 gap-12">

                            <Card
                            className="rasm max-w-sm"
                            imgSrc={myrasm}
                            >
                            <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            BMW m1 Sport
                            </h5>
                            </a>
                            <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">$100.000</span>
                            <a
                            href="#"
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                            sotib olish
                            </a>
                            </div>
                            </Card>

                            <Card
                            className="rasm1 max-w-sm"
                            imgSrc={myrasm1}
                            >
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                BMW m2 Sport
                                </h5>
                            </a>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$100.000</span>
                                <a
                                href="#"
                                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                sotib olish
                                </a>
                            </div>
                            </Card>


                            <Card
                            className="rasm2 max-w-sm"
                            imgSrc={myrasm2}
                            >
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                BMW m3 Sport
                                </h5>
                            </a>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$100.000 </span>
                                <a
                                href="#"
                                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                sotib olish
                                </a>
                            </div>
                            </Card>

            </div>


                            <div className="cardlar flex justify-center mt-20 gap-12">

                                <Card
                                className="rasm3 max-w-sm"
                                imgSrc={myrasm3}
                                >
                                <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                BMW m4 Sport
                                </h5>
                                </a>
                                <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$100.000</span>
                                <a
                                href="#"
                                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                sotib olish
                                </a>
                                </div>
                                </Card>

                                <Card
                                className="rasm4 max-w-sm"
                                imgSrc={myrasm4}
                                >
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    BMW m5 Sport
                                    </h5>
                                </a>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$100.00</span>
                                    <a
                                    href="#"
                                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                    >
                                    sotib olish
                                    </a>
                                </div>
                                </Card>


                                <Card
                                className="rasm5 max-w-sm"
                                imgSrc={myrasm5}
                                >
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    BMW m8 Sport
                                    </h5>
                                </a>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$100.000</span>
                                    <a
                                    href="#"
                                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                    >
                                    sotib olish
                                    </a>
                                </div>
                                </Card>





                            </div>
                            
               
            <div className="map mt-20">
            <iframe className="mapp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7014877797146!2d69.22941327629664!3d41.27183507131478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7d1264f903%3A0x499ccc2b9de57f46!2zSU1QQUNULlQgVGVjaG5vbG9neSBIdWIgLSBDb3dvcmtpbmcgKNC60L7QstC-0YDQutC40L3QsyDRhtC10L3RgtGAKQ!5e0!3m2!1sen!2s!4v1729080198652!5m2!1sen!2s"style={{height:450,width:800}} ></iframe>
            </div>

        </div>
    )
}


export default Home;