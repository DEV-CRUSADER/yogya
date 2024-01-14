// All Server API Calls for core in this file
import axios from "axios";
import { Notyf } from 'notyf';

import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'error',
            background: '#e74c3c',
            icon: {
                className: 'fas fa-exclamation-circle',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: true
        },
        {
            type: 'success',
            background: '#2ecc71',
            icon: {
                className: 'fas fa-check-circle',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: true
        },
        {
            type: 'warning',
            background: '#2C5464',
            icon: {
                className: 'fa-solid fa-satellite-dish',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: true
        }
    ]
});

export class APICaller {

    static async FetchDefaultIndexData(data) {
        notyf.open({
            type: 'warning',
            message: 'Fetching data...',
        })
        try {
            const response = await axios.post("/api/v1/get-index-data", data, {
                headers: genericHeaders,
            });
            return response.data;
        } catch (error) {
            notyf.error(error.message);
        }
    }

    static SendContactUsEmail(formData) {

        return fetch("/api/v1/send-contact-mail", {
            method: "POST",
            headers: genericHeaders,
            body: formData,
            body: JSON.stringify(formData),
        }).then((res) => res.json());

    }

    static async FetchIndexes(data) {
        try {
            const response = await axios.get("/api/v1/get-index-list", data, {
                headers: genericHeaders,
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }
}