import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const Register = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-5xl font-bold text-blue-900 my-5">Register Here</h1>
            <div className="flex justify-center">
                <div className="text-left bg-blue-100 px-6 rounded-sm py-2">
                    <form>

                        {/* Name input field */}
                        <div className="flex my-3 justify-between">
                            <span className="text-purple-900 text-xl font-bold">Your Name:</span>  <input className="border-2 ml-3" type="text" name="name" placeholder="Your name" />
                        </div>

                        {/* email input field */}
                        <div className="flex my-3 justify-between">
                            <span className="text-purple-900 text-xl font-bold">Email:</span>  <input className="border-2 ml-3" type="email" name="email" placeholder="Input your email here" />
                        </div>

                        {/* password input field */}
                        <div className="flex my-3 justify-between">
                            <span className="text-purple-900 text-xl font-bold">Password:</span> <input className="border-2 ml-3" type="password" name="password" placeholder="Your password" />
                        </div>

                        {/* submit button input field */}
                        <div className="text-right">
                            <input className="px-4 py-1 font-bold text-white text-xl bg-green-400 hover:bg-green-300 cursor-pointer hover:text-green-800" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>

            {/* Login with google button */}
            <div className="my-3">
                <h3 className="text-2xl">--------------Or--------------</h3>
                <button className="border-2 p-2 rounded-lg bg-yellow-500 text-red-700 font-bold text-3xl">Login With Google</button>
            </div>

            {/* toggle to register link */}
            <div>
                <p className="text-lg">Already have an account? <Link to="/login">
                    <span className="text-blue-500 underline">
                        Login</span></Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;