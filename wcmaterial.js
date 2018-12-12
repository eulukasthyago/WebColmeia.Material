//(function(wcdatacont){
//    let wcdata = document.querySelectorAll("[wcdata]");
//
//    for(let i in radiusk i  ic1quad){
//        alert("a");
//    }
//
//});
window.onload = function(){
    let wcdataAll = document.querySelectorAll("[wcdata]");
    
    for(let i = 0; i < wcdataAll.length; i++){
        let wcdata = JSON.parse(wcdataAll[i].getAttribute("wcdata"));
        for(let a in wcdata){
            if(wcdata[a] === true){
                wcdataAll[i].classList.add(a);
            }
        }
    }
};
