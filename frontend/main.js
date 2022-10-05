window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = "https://getforrerresumecounter.azurewebsites.net/api/GetResumeCounter?code=pE3zPEK8ACPGJ1ec3Enquy_5UuIe1-sRfReiZd_ZO4XUAzFuCC1Fow=="

const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}