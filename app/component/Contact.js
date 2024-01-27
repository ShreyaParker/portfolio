"use client"
import React, { useState } from 'react';

const Contact = () => {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setDetails({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="bg-gray-300 p-5 sm:py-36 " id="contact">

            <div className="flex justify-center items-center">
                <h1 className="font-extrabold text-4xl">
                    Contact Me
                </h1>

            </div>

            <form onSubmit={handleSubmit} className="flex flex-col p-5">
                <div className="flex flex-col sm:flex-row  sm:justify-center sm:items-center p-2 m-2 gap-2">
                    <label htmlFor="name" className="mb-2 text-start">
                        Name:

                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                        className="rounded-3xl p-2 w-6/8 sm:w-5/6 border border-gray-500"
                        placeholder="Enter your name"
                        required
                    />

                    <label htmlFor="email" className="block mb-2">
                        Email:

                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={details.email}
                        onChange={handleChange}
                        className="rounded-3xl p-2 w-6/8 sm:w-5/6 border border-gray-500"
                        placeholder="Enter your email"
                        required
                    />

                </div>
                <div className="flex flex-col sm:flex-row  sm:justify-center sm:items-center p-2 m-2 gap-2">
                    <label htmlFor="message" className="block mb-2">
                        Message:

                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={details.message}
                        onChange={handleChange}
                        className="rounded-3xl p-2 w-6/8 sm:w-5/6 border border-gray-500"
                        placeholder="Type your message"
                        rows="4"
                        required
                    />

                </div>
                <div className="w-full flex justify-center">
                    <button
                        type="submit"
                        className="bg-purple-400 text-white py-3  my-5 w-4/12 md:w-3/12   px-4 rounded-3xl hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
