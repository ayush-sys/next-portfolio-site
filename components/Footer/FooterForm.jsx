import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const FooterForm = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(form);
        setForm({
            name:'',
            email:'',
            message:''
        })

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
    }

    return (
        <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-xl lg:max-w-xl backdrop-blur-md opacity-80 bg-gray-100">
            <h1 className="text-lg font-bold tracking-wide text-blue-700">Drop me a message here !</h1>

            <form className="mt-6" onSubmit={handleSubmit} autoComplete="true" ref={formRef}>
                <div className="flex-1 form-control">
                    <label className="form-label">Full Name</label>
                    <input name="name" type="text" placeholder="Tony Stark" value={form.name} onChange={handleChange} className="form-input" />
                </div>

                <div className="flex-1 mt-6 form-control">
                    <label className="form-label">Email address</label>
                    <input name="email" type="email" placeholder="ironman@avengers.com" value={form.email} onChange={handleChange} className="form-input" />
                </div>

                <div className="w-full mt-6 form-control">
                    <label className="form-label">Message</label>
                    <textarea name="message" value={form.message} placeholder="Message" onChange={handleChange} className="form-input h-32 md:h-48"></textarea>
                </div>

                <button type="button" className="form-submit-btn" onClick={handleSubmit}>
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default FooterForm;