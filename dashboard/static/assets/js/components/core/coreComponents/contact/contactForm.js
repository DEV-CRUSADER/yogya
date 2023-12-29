import React from "react";

export function ContactForm() {
    return (
        <>
            <div className="From">
                <div>
                    <label>
                        Your Name
                        <input type="text" name="name" value={Name} />
                    </label>
                </div>
                <div>
                    <label>
                        Your Email
                        <input type="email" name="email" value={email} />
                    </label>
                </div>
                <div>
                    <label>
                        Your Phone Number
                        <input type="number" name="PhoneNumber" value={Phone} />
                    </label>
                </div>
            </div>
        </>
    )
}
