import React from "react";

import './Contact.css'

const Contact=()=>{
    return(
        <div className="contact bg-blue-600 text-white">
           <div className="tekstlar">
           <p>Ism Familya</p>
            <h1>Rustamov Diyorbek</h1>
            <p>Email</p>
            <h1>diyorbekrustamovs20@gmail.com</h1>
            <p>Manzil</p>
            <h1>Toshkent shahar,Uchtepa tumani 26kv</h1>
            {/* <a className="sss text-blue-600" href="https://t.me/diyorbekrustamov12">Telegram</a> <br />
            <a className="sss text-red-600" href="https://www.instagram.com/invites/contact/?igsh=g2pev2z3ws9t&utm_content=s5uuzhw">Instagram</a> */}
            <p>Ish vaqti</p>
            <h1>Dushanbadan Shanbagacha soat 9:00dan 16:00gacha</h1>
            <h1>xullas bizda hozircha shular</h1>
            <h1>Ijtimoiy tarmoqlarimiz</h1> 

                <div className="flex items-center justify-center h-full mt-8 text-white">
                    <button
                        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                    >   
                        Facebook
                    </button>
                    <button
                        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                        
                    >   <a href="https://youtube.com/@smr_x4?si=G0pJ4ODHJC6NWH-f">Yotube</a>
            
                    </button>
                    <button
                        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                    >   <a href="https://t.me/diyorbekrustamov12">Telegram</a>
                        
                    </button>
                    <button
                        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                    >   <a href="https://www.instagram.com/invites/contact/?igsh=g2pev2z3ws9t&utm_content=s5uuzhw">Instagram</a>
                        
                    </button>
                </div>

           </div>
        </div>
    )
}


export default Contact;