let image = [
    "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fhomepage%2Fbanner%2FMockinterview_top_companiesD_Copy.jpg&w=1920&q=75",
    "https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fhomepage%2Fbanner%2FDesktop_banner_2.png&w=1920&q=75"
];
let i = 0;
let slideShow = () =>{
    let top_img = document.getElementById("top-img");
    

    setInterval(()=>{
        if(i===image.length){
            i=0;
        }
        if(i==1){
            top_img.style.backgroundColor =" #EBEBF5"
        }
        else{
            top_img.style.backgroundColor = "#FFF5F5"
        }

        let img = document.createElement("img");
        img.src = image[i];
        i++;
        top_img.innerHTML = "";
        top_img.append(img);
    },3000);
}

slideShow();