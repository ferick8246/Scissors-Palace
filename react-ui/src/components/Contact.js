import { ChatIcon } from "@heroicons/react/outline";
import React from "react";
import { send } from 'emailjs-com';

export default function Contact() {
    // for submitting contact form
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [showMessage, setShowMessage] = React.useState(false)


    function encode(data) {
        return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
    }

    function handleSubmit(e) {
        e.preventDefault();
        send(
            'service_1wnslaj',
            'template_925tn56',
            {
                from_name: name,
                message: message,
                reply_to: email
            },
            'user_zqU5lqDg0rgLDUsDHrmdY'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setShowMessage(true)
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto">
                    <form className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleSubmit}>
                        <div className="text-center">
                            <ChatIcon className="w-10 inline-block mb-4" />
                            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                                Send Us A Message! 
                            </h2>
                            <p className="leading-relaxed mb-5">
                            We'd love to hear from you! Let us know what's on your mind using our contact form below.
                            </p>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                name
                            </label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                e-mail
                            </label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                                message
                            </label>
                            <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(event) => setMessage(event.target.value)} />
                        </div>
                        <button type="submit" className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                            send!
                        </button>
                    </form>
                    {showMessage ? (
                        <div className="relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                            <div className="text-green-500">
                                <svg className="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="text-sm font-medium ml-3">Message Sent Successfully!</div>
                        </div>
                        <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Your message was sent. You'll hear back in 3-5 business days!</div>
                    </div>
                    ): ''}
                </div>
        </section>
    );
}