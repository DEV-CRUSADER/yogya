// All Server API Calls for core in this file


export class APICaller{

    // Refer this for API CALLS

    static FetchDefaultIndexData(){
        return fetch("/api/v1/get-index-data", {
            method: "GET",
            headers: genericHeaders,
        }).then((res) => res.json());
    }

}