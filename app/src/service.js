const ApiService = {
    handleGetCampaigns(){
        return fetch("https://www.plugco.in/public/take_home_sample_feed")
        .then((res)=>
            res.ok ? res.json() : res.json().then((e) => Promise.reject(e))
        );
    }
}

export default ApiService