let a = document.createElement("h1");
a.setAttribute("class","a");
document.body.append(a);

let val = setTimeout(()=>{
    a.innerText = 10;
    setTimeout(()=>{
        a.innerText = 9;
        setTimeout(()=>{
            a.innerText = 8;
            setTimeout(()=>{
                a.innerText = 7;
                setTimeout(()=>{
                    a.innerText = 6;
                    setTimeout(()=>{
                        a.innerText = 5;
                        setTimeout(()=>{
                            a.innerText = 4;
                            setTimeout(()=>{
                                a.innerText = 3;
                                setTimeout(()=>{
                                    a.innerText = 2;
                                    setTimeout(()=>{
                                        a.innerText = 1;
                                        setTimeout(()=>{
                                            a.innerText = "Happy independance day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)