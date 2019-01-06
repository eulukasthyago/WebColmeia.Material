//(function(wcdatacont){
//    let wcdata = document.querySelectorAll("[wcdata]");
//
//    for(let i in radiusk i  ic1quad){
//        alert("a");
//    }
//
//});

let addMaterialIcons = document.createElement('link');
addMaterialIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
addMaterialIcons.rel = "stylesheet";
document.head.appendChild(addMaterialIcons);

window.onload = function(){
    let wcdataAll = document.querySelectorAll("[wcdata]");
    
    for(let i = 0; i < wcdataAll.length; i++){
        let wcdata = JSON.parse(wcdataAll[i].getAttribute("wcdata"));
        for(let a in wcdata){
            if(wcdata[a] === true){
                wcdataAll[i].classList.add(a);
                if (a === 'btncircle') {
                	wcdataAll[i].classList.add('btn');
                }
            }else if(a === 'icon'){
            	if (wcdata[a] === "plus") {
                    wcdataAll[i].innerHTML += '<i class="material-icons">add</i>';
                }
            }else if(a === "shadowposition"){
            	if (wcdata[a] === 1) {
            		wcdataAll[i].classList.add('shadowposition1');
            	}else if(wcdata[a] === 2){
            		wcdataAll[i].classList.add('shadowposition2');
            	}else if(wcdata[a] === 3){
            		wcdataAll[i].classList.add('shadowposition3');
            	}else if(wcdata[a] === 4){
            		wcdataAll[i].classList.add('shadowposition4');
            	}else if(wcdata[a] === 5){
            		wcdataAll[i].classList.add('shadowposition5');
            	}else{
					wcdataAll[i].classList.add('shadowposition1');
            	}
            }else if(a === "row"){
            	if (wcdata[a] === "title") {
					wcdataAll[i].classList.add(a + '_title');
				}
            }
        }
        wcdataAll[i].removeAttribute("wcdata");
    }
};
