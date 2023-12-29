import React, { useState } from "react";

export function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });


    return (
        <>
            <div className="From">
                <div>
                    <label>
                        Your Name
                        <input type="text" name="name" value={formData.name} />
                    </label>
                </div>
                <div>
                    <label>
                        Your Email
                        <input type="email" name="email" value={formData.email} />
                    </label>
                </div>
                <div>
                    <label>
                        Your Phone Number
                        <input type="number" name="PhoneNumber" value={formData.phone} />
                    </label>
                </div>
            </div>
        </>
    )
}
