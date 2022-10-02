import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();



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

let courses_arr = [
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640851375_8085.png&w=1920&q=75",
        name : "Backend Developer In Java",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :1
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640851637_4621.png&w=1920&q=75",
        name : "Backend Developer In Python",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :2
        
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652953799_9984.png&w=1920&q=75",
        name : "Backend Developer In Node.js",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :3
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652953980_7255.png&w=1920&q=75",
        name : "Backend Developer In .Net",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :4
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652954044_279.png&w=1920&q=75",
        name : "Backend Developer In React.js",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :5
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652954087_2845.png&w=1920&q=75",
        name : "Android Developer",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :7
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fattachment%2Fdefault_product_image.jpg&w=1920&q=75",
        name : "CrompTia Security+ Certification Training",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 34999,
        id :8
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640853726_1126.png&w=1920&q=75",
        name : "Digital Marketing Certification Training ",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 19499,
        id :9
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1508900890_4134.png&w=1920&q=75",
        name : "Marketing Essentials",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 9620,
        id :10
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1564143982_3906.png&w=1920&q=75",
        name : "Human Resourses Management Training",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :11
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1634126540_4125.png&w=1920&q=75",
        name : "Certified HR Analysis Professional",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :12
    },
    {
        image :"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640689215_9063.png&w=1920&q=75",
        name : "Management BootCamp",
        type : "TestPrep Training",
        Duration : "51 Hours",
        Price : 12999,
        id :13
    },
    
]

document.getElementById("b_All").addEventListener("click",()=>{
    showAll(courses_arr);
})






let mid_div = document.getElementById("mid_div");

let page = 1;

let left = document.getElementById("arrow_left");
let right = document.getElementById("arrow_right");

left.onclick = () =>{
    if(page==1){
        page = 1
    }
    else{
        page--;
    }
    console.log(page)
    showAll(courses_arr,page)
}

right.onclick =() =>{
    if(page==4){
        page = 4;
    }
    else{
        page++;
    }
    console.log(page)
    showAll(courses_arr,page)
}


let showAll = ( courses_arr,page) =>{
    // console.log( courses_arr);

    if(page ==1){
        mid_div.innerHTML = "";
        courses_arr=courses_arr.slice(0, 3);
    }
    else if(page ==2){
        mid_div.innerHTML = "";
        courses_arr=courses_arr.slice(4, 7);
    }
    else if(page ==3){
        mid_div.innerHTML = "";
        courses_arr=courses_arr.slice(7, 10);
    }
    else{
        mid_div.innerHTML = "";
        courses_arr=courses_arr.slice(10, 12);
    }


    courses_arr.forEach((el)=>{
        // console.log(el);
        let div = document.createElement("div");
        div.setAttribute("class","paginatedDiv");

        let fdiv = document.createElement("div");
        div.setAttribute("class","flexedDiv")

        let img = document.createElement("img");
        img.src = el.image;
        img.setAttribute("class","cimage");

        let h3 = document.createElement("h3");
        h3.innerText = el.name;

        let p = document.createElement("p");
        p.innerText = el.type;

        let Duration = document.createElement("p");
        Duration.innerText = `Duration : ${el.Duration}` ;

        let Price = document.createElement("p");
        Price.innerText = `Price : ${el.Price}/-` ;

        fdiv.append(h3,p,Duration,Price)
        div.append(img,fdiv);
        mid_div.append(div)
    })
}
showAll(courses_arr);