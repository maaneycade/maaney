// NAVigation SECTION
const nav = document.createElement("nav");
nav.style.cssText = "background:rgb(10,102,194); padding:12px; display:flex; gap:20px; color:white; font-size:18px; justify-content:center;";
const navItems = ["Home", "About me", "Services", "Contact"];
navItems.forEach(text => {
    const a = document.createElement("a");
    a.textContent = text;
    a.href = "#";
    a.style.cssText = "color:white; text-decoration:none; cursor:pointer;";
    a.addEventListener("click", () => loadContent(text));
    nav.appendChild(a);
});
document.body.appendChild(nav);

// HEADER
const header = document.createElement("header");
header.textContent = "Welcome to my website";
header.style.cssText = "background:rgb(121,82,179); color:white; padding:15px; font-size:22px; text-align:center;";
document.body.appendChild(header);

// MAIN
const main = document.createElement("main");
main.style.cssText = "padding:20px;";
document.body.appendChild(main);

// FOOTER
const footer = document.createElement("footer");
footer.style.cssText = "margin-top:30px; padding:10px; background:rgb(46,164,79); color:white; text-align:center;";
footer.innerHTML = "<p>Prepared by Batch15B</p>";
document.body.appendChild(footer);

// --- CHAPTER 8 DOM FUNCTIONS ---
function changeContentStyle(){ const el=document.getElementById("content"); if(el){ el.style.background="blue"; el.style.color="white"; } }
function changeClassStyle(){ const els=document.getElementsByClassName("demo-class"); for(let el of els){ el.style.color="red"; el.style.fontWeight="bold"; } }
function changeTagStyle(){ const spans=document.getElementsByTagName("span"); for(let span of spans){ span.style.color="green"; } }
function changeFirstBox(){ const box=document.querySelector(".box"); if(box){ box.style.border="2px solid orange"; } }
function changeAllItems(){ const items=document.querySelectorAll(".item"); items.forEach(item=>{ item.style.background="lightgray"; }); }
function modifyContent(){ const t=document.getElementById("changeText"); const l=document.getElementById("changeLink"); if(t)t.textContent="Text Changed!"; if(l){l.href="https://github.com"; l.textContent="GitHub";} }
function createElement(){ const c=document.getElementById("container"); if(c){ const p=document.createElement("p"); p.textContent="Newly created paragraph!"; c.appendChild(p);} }
function removeElement(){ const c=document.getElementById("container"); if(c && c.lastChild) c.removeChild(c.lastChild); }

// Make functions global for onclick
window.changeContentStyle = changeContentStyle;
window.changeClassStyle = changeClassStyle;
window.changeTagStyle = changeTagStyle;
window.changeFirstBox = changeFirstBox;
window.changeAllItems = changeAllItems;
window.modifyContent = modifyContent;
window.createElement = createElement;
window.removeElement = removeElement;

// --- CHAPTER 9 EVENT FUNCTIONS ---
function setupMouseEvents(){ const box=document.getElementById("mouseBox"); const status=document.getElementById("mouseStatus"); if(box && status){ box.addEventListener("click",()=>{status.textContent="Clicked!"; box.style.background="lightyellow";}); box.addEventListener("dblclick",()=>{status.textContent="Double Clicked!"; box.style.background="lightred";}); box.addEventListener("mouseover",()=>{box.style.borderColor="green";}); box.addEventListener("mouseout",()=>{box.style.borderColor="#ccc"; status.textContent="Mouse left";});}}
function setupKeyboardEvents(){ const inp=document.getElementById("keyInput"); const status=document.getElementById("keyStatus"); if(inp && status){ inp.addEventListener("keydown",e=>{status.textContent="Keydown: "+e.key;}); inp.addEventListener("keyup",e=>{status.textContent="Keyup: "+e.key;});}}
function setupFocusEvents(){ const inp=document.getElementById("focusInput"); const status=document.getElementById("focusStatus"); if(inp && status){ inp.addEventListener("focus",()=>{status.textContent="Focused ✓"; inp.style.background="#0e7d0eff";}); inp.addEventListener("blur",()=>{status.textContent="Blurred ✗"; inp.style.background="#147aa6ff";});}}
function setupFormEvents(){ const f=document.getElementById("demoForm"); const status=document.getElementById("formStatus"); if(f && status){ f.addEventListener("submit",e=>{e.preventDefault(); status.textContent="Form Submitted!"; status.style.color="green"; f.style.borderColor="green";});}}
function setupEventDelegation(){ const list=document.getElementById("itemList"); const sel=document.getElementById("selectedItem"); if(list && sel){ list.addEventListener("click",e=>{if(e.target.tagName==="LI"){ sel.textContent=e.target.textContent; const items=list.querySelectorAll("li"); items.forEach(i=>i.style.background=""); e.target.style.background="lightyellow";}});}}
function addNewItem(){ const list=document.getElementById("itemList"); if(list){ const li=document.createElement("li"); li.textContent="Item "+(list.children.length+1); list.appendChild(li);} }
function setupWindowEvents(){ const sz=document.getElementById("windowSize"); const sp=document.getElementById("scrollPosition"); if(sz){ sz.textContent=window.innerWidth+" x "+window.innerHeight; window.addEventListener("resize",()=>{sz.textContent=window.innerWidth+" x "+window.innerHeight;});} if(sp){ window.addEventListener("scroll",()=>{sp.textContent=window.scrollY;});} }

// --- LOAD CONTENT ---
function loadContent(page){
    main.innerHTML="";

    // HOME
    if(page==="Home"){
        const ol=document.createElement("ol");
        ["EGYPT","USA","CANADA","MALAYSIA", "maroco","And more"].forEach(country=>{
            const li=document.createElement("li");
            li.textContent=country;
            ol.appendChild(li);
        });
        main.appendChild(ol);

        let selLi = null;
        ol.addEventListener("click", e => {
            if(e.target.tagName==="LI"){
                if(selLi) selLi.style.background="";
                selLi = e.target;
                selLi.style.background="#162385ff";
            }
        });

        const btnBox = document.createElement("div");
        btnBox.style.cssText="margin-top:15px; padding:15px;";
        main.appendChild(btnBox);

        const insertBtn=document.createElement("button");
        insertBtn.textContent="Insert";
        insertBtn.onclick = ()=>{ const li = document.createElement("li"); li.textContent="German (New Country)"; ol.appendChild(li); };
        btnBox.appendChild(insertBtn);

        const replaceBtn=document.createElement("button");
        replaceBtn.textContent="Replace";
        replaceBtn.onclick = ()=>{ if(selLi) selLi.textContent="Replaced Country"; else if(ol.lastElementChild) ol.lastElementChild.textContent="Holand (Replaced Country)"; };
        btnBox.appendChild(replaceBtn);

        const removeBtn=document.createElement("button");
        removeBtn.textContent="Remove";
        removeBtn.onclick = ()=>{ if(selLi){ ol.removeChild(selLi); selLi = null; } else if(ol.lastElementChild){ ol.removeChild(ol.lastElementChild); } };
        btnBox.appendChild(removeBtn);
    }

    // About me
    else if(page==="About me"){
      main.innerHTML=`
          <h2>About Me</h2>
          <div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
              <img src="image/abdi.jpg" alt="maaney" style="border-radius:10px; border:2px solid #d6ca1fff; width:120px; height:120px; object-fit:cover;">
              <div>
                  <p><strong>Name:</strong> Abdirahman Abdirashiid Abdikadir</p>
                  <p><strong>ID:</strong> PH1202175</p>
                  <p><strong>Phone:</strong> 613975344</p>
                  <p><strong>Email:</strong> maaneycade18@gmail.com</p>
                  <p><strong>University:</strong> JAZeera university </p>
                  <p><strong>Class:</strong> BATCH15B</p>
                  <p><strong>Skills:</strong> Computer science & teachig</p>
              </div>
          </div>


          <p style="margin-top:15px;">my link: <a href="https://www.garageliving.com/" target="_blank" style="color:#909df5ff; text-decoration:none;">garageliving</a></p>
          
            
      `;
    }

    // CONTACT
    else if(page==="Contact"){
        main.innerHTML=`
            <h2>Contact</h2>
            <form id="contactForm" style="border:1px solid #682323ff; padding:15px; width:300px;">
                <label>Name: <input type="text" id="contactName" required></label><br><br>
                <label>Email: <input type="email" id="contactEmail" required></label><br><br>
                <label>Tell: <input type="Tell" id="contectTell" required ><label/><br><br>
                <label>Message:<br><textarea id="contactMessage" rows="4" cols="25" required></textarea></label><br><br>
                <button type="submit">Submit</button>
            </form>
            <p>Status: <span id="contactStatus">Ready</span></p>
        `;
        const cf=document.getElementById("contactForm");
        const cs=document.getElementById("contactStatus");
        cf.addEventListener("submit",function(e){
            e.preventDefault();
            const nm=document.getElementById("contactName").value;
            const em=document.getElementById("contactEmail").value;
            const msg=document.getElementById("contactMessage").value;
            if(nm && em && msg){
                cs.textContent="Thank you, "+nm+"! Message sent.";
                cs.style.color="green";
                cf.reset();
            } else {
                cs.textContent="Please fill all fields!";
                cs.style.color="red";
            }
        });
    }

    // SERVICES
    else if(page==="Services"){
        main.innerHTML=`
            <h2>Services - Chapters 7, 8, 9</h2>
            <div id="ch7buttons" style="margin-bottom:20px;"></div>
            <div id="ch7output" style="padding:10px; border:1px solid #12579cff; margin-bottom:20px;"></div>
            <hr>
            <div id="chapter8Examples" style="padding:10px; border:1px solid #0a3f7bff; margin-top:10px;"></div>
            <hr>
            <div id="chapter9Examples" style="padding:10px; border:1px solid #0f6886ff; margin-top:10px;"></div>
        `;

        // CHapter7 buttons
        const btns = document.getElementById("ch7buttons");
        const out = document.getElementById("ch7output");
        const obj = {name:"maaney", age:21}; // all age=21

        function show(txt){ out.textContent = txt; }

        const examples = [
            {label:"1. Object Literal", run:()=>show(`Name=${obj.name}, Age=${obj.age}`)},
            {label:"2. Access Properties", run:()=>show(`Name=${obj["name"]}, Age=${obj.age}`)},
            {label:"3. Add Property", run:()=>{ obj.country="Somalia"; show(`Country=${obj.country}`); }},
            {label:"4. Modify Property", run:()=>{ obj.age=21; show(`New Age=${obj.age}`); }},
            {label:"5. Object Method", run:()=>{ obj.say=function(){return "Hello "+this.name;}; show(obj.say()); }},
            {label:"6. Constructor", run:()=>{ function P(n,a){this.name=n;this.age=a;} const p=new P("Ali",21); show(`Name:${p.name}, Age:${p.age}`); }},
            {label:"7. Constructor Method", run:()=>{ function P2(n,a){this.name=n;this.age=a;} P2.prototype.intro=function(){return "Hi "+this.name;}; const p2=new P2("maaney",21); show(p2.intro()); }},
            {label:"8. Class Syntax", run:()=>{ class Car{constructor(br,mo){this.brand=br;this.model=mo;} details(){return this.brand+" "+this.model;}} const c=new Car("BMW","FARARI"); show(c.details()); }},
            {label:"9. for..in Loop", run:()=>{ let s=""; for(let k in obj){s+=k+":"+obj[k]+", ";} show(s); }},
            {label:"10. Object.keys", run:()=>show(JSON.stringify(Object.keys(obj)))},
            {label:"11. Object.values", run:()=>show(JSON.stringify(Object.values(obj)))},
            {label:"12. Object.entries", run:()=>show(JSON.stringify(Object.entries(obj)))},
            {label:"13. Delete Property", run:()=>{ delete obj.country; show(JSON.stringify(obj)); }},
            {label:"14. Has Property?", run:()=>show(obj.hasOwnProperty("age").toString())},
            {label:"15. JSON→JS", run:()=>{ const j=JSON.parse('{"fruit":"PAWPAW","color":"GREEN"}'); show(`Fruit:${j.fruit}, Color:${j.color}`); }},
            {label:"16. JS→JSON", run:()=>{ const j={x:1,y:2}; show(JSON.stringify(j)); }}
        ];

        examples.forEach(e=>{
            const b = document.createElement("button");
            b.textContent = e.label;
            b.style.cssText="margin:4px; padding:6px;";
            b.onclick = e.run;
            btns.appendChild(b);
        });

        // CHabter8 DOM
        const ex8=document.getElementById("chapter8Examples");
        ex8.innerHTML=`
            <h3>Chapter 8 DOM Examples</h3>
            <p id="content">getElementById Example</p><button onclick="changeContentStyle()">Change</button>
            <p class="demo-class">Class1</p><p class="demo-class">Class2</p><button onclick="changeClassStyle()">Change Class</button>
            <span>Span1</span><span>Span2</span><button onclick="changeTagStyle()">Change Spans</button>
            <div class="box">Box1</div><div class="box">Box2</div><button onclick="changeFirstBox()">First Box</button>
            <div class="item">Item1</div><div class="item">Item2</div><button onclick="changeAllItems()">All Items</button>
            <p id="changeText">Text</p><a id="changeLink" href="https://google.com">Google</a><button onclick="modifyContent()">Modify</button>
            <div id="container"></div><button onclick="createElement()">Create</button><button onclick="removeElement()">Remove</button>
        `;

        // CHapter9 EVENTS
        const ex9=document.getElementById("chapter9Examples");
        ex9.innerHTML=`
            <h3>Chapter 9 Events</h3>
            <div id="mouseBox" style="border:2px solid #5c0898ff;padding:15px;">Mouse Area</div><p>Status: <span id="mouseStatus"></span></p>
            <input type="text" id="keyInput"><p>Key: <span id="keyStatus"></span></p>
            <input type="text" id="focusInput"><p>Focus: <span id="focusStatus"></span></p>
            <form id="demoForm" style="border:1px dashed #9e159eff;padding:10px;"><label>Name: <input type="text" id="nameInput"></label><br><label>Email: <input type="email" id="emailInput"></label><br><button type="submit">Submit</button></form><p>Status: <span id="formStatus"></span></p>
            <ul id="itemList"><li>Item1</li><li>Item2</li></ul><p>Selected: <span id="selectedItem"></span></p><button onclick="addNewItem()">Add</button>
            <p>Size: <span id="windowSize"></span></p><p>Scroll: <span id="scrollPosition"></span></p>
        `;
        setTimeout(()=>{ setupMouseEvents(); setupKeyboardEvents(); setupFocusEvents(); setupFormEvents(); setupEventDelegation(); setupWindowEvents(); },50);
    }
}
