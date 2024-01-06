// All Server API Calls for core in this file


export class APICaller{

    static FetchDefaultIndexData(){
        return fetch("/api/v1/get-index-data", {
            method: "GET",
            headers: genericHeaders,
        }).then((res) => res.json());
    }

    static SendontactUsEmail(formData){
        return fetch("/api/v1/send-contact-mail", {
            method: "POST",
            headers: genericHeaders,
            body: JSON.stringify(formData),
        }).then((res) => res.json());
    }
}