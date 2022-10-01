function navbar(){
    return ` <div id="vnavbar">

    <div id="mainnav">

      <div id="vtop">
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2420/2420893.png" alt="">
            <p>Download App</p>
        </div>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="">
            <p>For Employers</p>
        </div>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3410/3410021.png" alt="">
            <p>Help</p>
        </div>
     </div>
     <div id="vmain">
     <div id="vmain-1">
        <div>
            <a href="./index.html"><img src="https://www.shine.com/next/static/images/shine-logo.png" alt=""></a>
            
        </div>
        <div>
            <div id="vsearch">
                <input type="text" placeholder="Job title,skills">
                <button>
                    <img src="https://www.seekpng.com/png/full/920-9209972_magnifying-glass-png-white-search-icon-white-png.png" alt="">
                </button>
            </div>
            <div>
                Trending: | <a href="">React Js</a>  | <a href="">Full-stack Developer</a>  | <a href="">Business Development</a>  | <a href="">Marketing</a>  | <a href="">Finance</a> 
            </div>
        </div>
     </div>
     <div id="vmain-2">
        <div>
            <button><a href="./login.html">Login</a></button>
            <button><a href="./signup.html">Register</a></button>
        </div>
        <div>
           <a href="./notifications.html"><img src="https://cdn-icons-png.flaticon.com/128/2529/2529521.png" alt=""></a>
           <a href="./cart.html"><img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt=""></a>
            </div>
        </div>
    
      </div>
      <div id="vbot">
          <a href="./index.html">HOME</a>
          <div class="dropdown">
             <button class="dropbtn">JOBS</button>
               <div class="dropdown-content">
                  <a href="#">Search</a>
                  <a href="#">Jobs For You</a>
                  <a href="#">Create Alert</a>
              </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">JOBS SEEKING ASSISTANCE</button>
              <div class="dropdown-content">
                 <a href="./profileBooster.html">Profile Booster</a>
                 <a href="./applicationHIGH.html">Application Highlighter</a>
                 <a href="#">Resume Writing</a>
                 <a href="#">Check Your Resume</a>
                 <a href="#">View All</a>
             </div>
         </div>
         <div class="dropdown">
            <button class="dropbtn">COURSES</button>
              <div class="dropdown-content">
                 <a href="#">Sales And Marketing</a>
                 <a href="#">Information And Technology</a>
                 <a href="#">Operation Management</a>
                 <a href="#">Human Resources</a>
                 <a href="#">View All</a>
                 </div>
          
       </div>
       <a href="">CAREER GUIDANCE</a>
          <a href="./blog.html">BLOG</a>
    </div>
   
</div>`
}

export default navbar;