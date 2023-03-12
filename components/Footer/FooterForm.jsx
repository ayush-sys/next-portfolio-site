import React, { useRef, useState } from "react";


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
    }

    return (
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-50 rounded-lg shadow-2xl lg:max-w-xl shadow-gray-200">
            <h1 className="text-lg font-medium text-gray-700">Drop me a message here !</h1>

            <form className="mt-6" onSubmit={handleSubmit} autoComplete="true">
                <div className="flex-1 form-control">
                    <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                    <input name="name" type="text" placeholder="Tony Stark" value={form.name} onChange={handleChange} className="form-input" />
                </div>

                <div className="flex-1 mt-6 form-control">
                    <label className="block mb-2 text-sm text-gray-600">Email address</label>
                    <input name="email" type="email" placeholder="ironman@avengers.com" value={form.email} onChange={handleChange} className="form-input" />
                </div>

                <div className="w-full mt-6 form-control">
                    <label className="block mb-2 text-sm text-gray-600">Message</label>
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