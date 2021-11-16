var weatherL = {},weatherN = {},weatherLA = {},weatherLV = {};
var description = "";
var humidity_in_percent = "";
var pressure_in_hPa = "";
var temp_in_celsius = "";
var loadHandler = 1;
var keyWord=""
var cityName=""


async function fetchInfo(x){
    x = x.attributes.id.value
    x = x.toString()
    console.log(x)
    if(cityName = "L"){
        uri = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=London"
    } else if(cityName= "LA"){
        uri = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=Los%20Angeles"
    }else if(cityName = "LV"){
        uri = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=Las%20Vegas"
    }
weather = await (await fetch(uri)).json()
.then((weather)=>{
    console.log(weather.description)
    document.getElementById(x+"D").innerHTML=weather.description;
    document.getElementById(x+"T").innerHTML=weather.temp_in_celsius;
    document.getElementById(x+"P").innerHTML=weather.pressure_in_hPa;
    document.getElementById(x+"T").style=weather.temp_in_celsius;
    document.getElementById(x.toLowerCase()).innerHTML="Londan";
    document.getElementById(x+"d").innerHTML="Delete";
    weatherL = weather
})

}

function fetchAll(){
    setInterval(function(){ 
        if(loadHandler == 1){
            cityName="L"
             fetchInfo(L);
             loadHandler++   
        }else if(loadHandler == 3){
            cityName="LA"
              fetchInfo(LA);
              loadHandler++
        }else if(loadHandler == 2){
            cityName="N"
                fetchInfo(N);
                loadHandler++
        }else if(loadHandler == 4){
            cityName="LV"
            fetchInfo(LV);
            loadHandler++
        }
        document.getElementById(cityName).style.border= "5px solid green";

     }, 2000);

}

function deleteR(x){
    x= x.attributes.id.value
    x=x.toString()
    document.getElementById(x+"D").innerHTML=""
    document.getElementById(x+"P").innerHTML=""
    document.getElementById(x+"T").innerHTML=""
}

function search(){
    keyWord= document.getElementById("key").value 
    console.log(keyWord)
    document.getElementById("l").style.backgroundColor="yellow"
    setTimeout(() => {
        document.getElementById("l").style.backgroundColor="white"   
    }, 4000);
}
