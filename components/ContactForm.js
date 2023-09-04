'use client'

import styles from "@/app/contact/contact.module.css"
import { Mulish } from "next/font/google";
import { useState } from "react";
import { submitContact } from "@/app/contact/action";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

const ContactForm = () => {
    const [user, setUser] = useState({
        email: "",
    })
    const [status, setStatus] = useState(null);


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (formData) => {

        try {

            const response = await submitContact({
                email: formData.get('email'),
            })

            if (response.status === 200) {
                setStatus('success');
                console.log("succ sign up!")
                mixpanel.track('Sign up', { 'email': formData.get('email') });
            } else {
                setStatus('error');
                console.log("failure in sign up!")
                mixpanel.track('Sign up', { 'email': formData.get('email') });
            }

        } catch (e) {
            console.log(e)
        }

    }

    return (

        < form className="w-full lg:w-auto mb-4 mx-auto" action={handleSubmit}> {/* Added mx-auto to center the form */}
            < div className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto bg-white rounded-lg p-4 shadow-md" >
                <input required autoComplete="off" name="email" id="email" type="text" className="form-input flex-grow appearance-none border focus:border-gray-600 rounded-l-sm px-2 py-32text-gray-700 placeholder-gray-600" placeholder="Enter your email" aria-label="Your email…" />
                <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 flex-shrink-0 rounded-r-sm">Notify Me</button>
            </div >
            <div>
                {status === 'success' && <p className={styles.success_msg}> You're IN! Keep an eye on your inbox for something special.</p>}
                {status === 'error' && <p className={styles.success_msg}> You're IN! Keep an eye on your inbox for something special.</p>}
            </div>
        </form>
    );
};

export default ContactForm;
