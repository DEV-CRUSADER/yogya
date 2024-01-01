// All Server API Calls for core in this file


export class APICaller{

    // Refer this for API CALLS
    static FetchDefaultIndexData(data){
        return fetch("/api/v1/get-index-data", {
            method: "POST",
            headers: genericHeaders,
            body: JSON.stringify(data),
        }).then((res) => res.json());
    }

}