const URL="https://cat-fact.herokuapp.com/facts"
const factPara=document.querySelector("#facts");
const btn =document.querySelector("#btn");


const getFacts = async()=>{
    console.log("Getting data .....");
    let response = await fetch(URL);
    console.log(response) // json format
    let data = await response.json();
    factPara.innerText=data[0].text;
}
btn.addEventListener("click",getFacts);
