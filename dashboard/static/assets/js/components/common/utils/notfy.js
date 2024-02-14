import { Notyf } from 'notyf';

import 'notyf/notyf.min.css';

export const notyf = new Notyf({
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