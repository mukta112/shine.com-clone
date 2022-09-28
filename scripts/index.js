let images = [
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FMockinterview_top_companiesD.jpg&w=3840&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FAmazon-Transaction-Risk-Investigator-Bengaluru-14Sept.gif&w=3840&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FExidelife_desktop.png&w=3840&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FAmazon-Transaction-Risk-Investigator-Hyderabad-14-sept.gif&w=3840&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop-Banner_2_pos_new.png&w=3840&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=3840&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fmint_d_banner.png&w=3840&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=3840&q=75"
];
let i=0;
let slideshow = () => {
    let container = document.getElementById("slideshow");
    

    setInterval(() => {
        container.innerHTML = null;
        if(i===images.length){
            i=0;
        }
        let img = document.createElement("img");
        img.src=images[i];
        img.style.width="100%";
        img.style.height="350px";
    
        container.append(img);
        i++;
    },2000)
}
slideshow();

let workPlaces = [
    {
        img:"https://static2.shine.com/r/m/images/employerbranding/608a7830f65e4ac4a70869e145c55c25.png",
        logo: "https://static2.shine.com/r/m/images/employerbranding/449660b6ea5c4aada2e211f4831cc945.png"
    },
    {
        img: "https://static2.shine.com/r/m/images/employerbranding/d98a014b326648178fbb08eef46ac70e.png",
        logo: "https://static2.shine.com/r/m/images/employerbranding/6c23dfb3c9224480870c900b8dddf299.png"
    },
    {
        img: "https://static2.shine.com/r/m/images/employerbranding/26c83ce6d9df4733a9bbc06d2e3b8f0e.png",
        logo: "https://static2.shine.com/r/m/images/employerbranding/19b43e6c9ee345faa75540f998db7441.png"
    },
    {
        img: "https://static2.shine.com/r/m/images/employerbranding/7a22c70f27904e2e81d7ebd1066d55e1.png",
        logo: "https://static2.shine.com/r/m/images/employerbranding/17e4d7d8d2bf419eb023429afacb5154.png"
    },
    {
        img: "https://static2.shine.com/r/m/images/employerbranding/c250bee50f5b490aac4b63fe281ab79e.png",
        logo: "https://static2.shine.com/r/m/images/employerbranding/4ba34994bc414de7984c38c9cee86ebe.png"
    }
];
let renderWorkPlace = () => {
    // console.log(workPlaces);
    let container = document.querySelector(".container");
    container.innerHTML = null;
    workPlaces.forEach((ele) => {
        let div=document.createElement("div");
        let i = document.createElement("img");
        i.src = ele.img;
        let l = document.createElement("img");
        l.src = ele.logo;

        div.append(i,l);
        container.append(div);
        
    })
}
renderWorkPlace()
document.getElementById("workPlace").addEventListener("click",renderWorkPlace);
// console.log(workPlaces)
let companies = [
    "https://static2.shine.com/r/m/images/employerbranding/ab28f0af876f42cb96302faaea9e1671.png",
    "https://static2.shine.com/r/m/images/employerbranding/b076fc83cebb42069205c9a410c9f618.png",
    "https://static2.shine.com/r/m/images/employerbranding/a307d745fbbe46d3822e5b4e6f3fed55.png",
    "https://static2.shine.com/r/m/images/employerbranding/9b944622fc46422786322e57d29a4225.png",
    "https://static2.shine.com/r/m/images/employerbranding/7f5bc2c5010f4e0fbff014205842ff27.png",
    "https://static2.shine.com/r/m/images/employerbranding/e93bc72765914ce481fc7d0611df7536.png",
    "https://static2.shine.com/r/m/images/employerbranding/8ec12c71c03445248ec99942e16a812c.png",
    "https://static2.shine.com/r/m/images/employerbranding/9f53b7d4345d41ac9b657b726b6b3349.png",
    "https://static2.shine.com/r/m/images/employerbranding/24d6c76bfae84a6f8bd18522f4744b3a.png",
    "https://static2.shine.com/r/m/images/employerbranding/666b83a3c4974b4f92613fce536a4251.png",
    "https://static2.shine.com/r/m/images/employerbranding/700cc0d27c8b416bbfb9c2765652c9cd.png",
    "https://static2.shine.com/r/m/images/employerbranding/264470edd81541d190bc774a279534aa.png",
    "https://static2.shine.com/r/m/images/employerbranding/264470edd81541d190bc774a279534aa.png"
];
let renderCompanies = () => {
    let container = document.querySelector(".container");
    container.innerHTML = null;
    companies.forEach((ele) => {
        let i = document.createElement("img");
        i.src = ele;

        container.append(i); 
    })
}
document.getElementById("compnies").addEventListener("click",renderCompanies);

console.log(companies);