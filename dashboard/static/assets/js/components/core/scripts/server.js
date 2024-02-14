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


let axiosInstance = axios.create({
    headers: genericHeaders
})

export class APICaller {

    static async FetchFreeData() {
        notyf.open({
            type: 'warning',
            message: 'Fetching data...',
        })
        try {
            const response = await axiosInstance.post("/api/v1/get-first-index-data", {
                headers: genericHeaders,
            });
            return response.data;
        } catch (error) {
            notyf.error(error.message);
        }
    }

    static async FetchDefaultIndexData(data) {
        notyf.open({
            type: 'warning',
            message: 'Fetching data...',
        })
        try {
            const response = await axiosInstance.post("/api/v1/get-index-data", data, {
                headers: genericHeaders,
            });

            return response.data;
        } catch (error) {
            notyf.error(error.response.data.message);
            return error.response;
        }
    }

    static async SendContactUsEmail(formData) {

        return fetch("/api/v1/send-contact-mail", {
            method: "POST",
            headers: genericHeaders,
            body: JSON.stringify(formData),
        }).then((res) => res.json());

    }

    static async FetchIndexes(data) {
        try {
            const response = await axiosInstance.get("/api/v1/get-index-list", data, {
                headers: genericHeaders,
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
}