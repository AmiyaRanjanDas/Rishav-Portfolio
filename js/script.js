// ==============================================
// ===============loder_container================
// ==============================================
document.addEventListener("DOMContentLoaded", () => {
    const digit1 = document.querySelector(".digit_1");
    const digit2 = document.querySelector(".digit_2");
    const digit3 = document.querySelector(".digit_3");

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        digit3.appendChild(div);
      }
    }

    const finalDigit = document.createElement("div");
    finalDigit.className = "num";
    finalDigit.textContent = "0";
    digit3.appendChild(finalDigit);

    function animate(digit, duration, delay = 1) {
      const numHeight = digit.querySelector(".num").clientHeight;
      const totalDistance =
        (digit.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    }
    animate(digit3, 5);
    animate(digit2, 6);
    animate(digit1, 2, 5);

    gsap.to(".progress_bar", {
      width: "100%",
      opacity: 0,
      duration: 3,
      delay: 8,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(".pre_loader", {
          display: "none",
        });
      },
    });
    gsap.to(".loader_imgs > img", {
      clipPath: "polygon(100% 0%,0% 0%,0% 100%,100% 100%)",
      duration: 3,
      ease: "power4.inOut",
      stagger: 0.3,
      delay: 9,
    });
    gsap.to(".loader_container", {
      scale: 2,
      opacity: 0,
      duration: 3,
      stagger: 0.2,
      padding: 0,
      ease: "power3.inOut",
      delay: 14,
      // zIndex: 0,
      onComplete: () => {
        gsap.set("body", {
          overflowY: "visible",
        });
      },
    });
    gsap.to(".loader_container", {
      duration: 1,
      stagger: 1,
      delay: 16,
      zIndex: 0,
    });
  });
// ==============================================
// ================hero_container================
// ==============================================
const heroWrapper = document.querySelector('.hero_container');
const emoji = document.querySelector(".hero_container .img_2");
const moveEvent = (e) => {
    const wrapperRect = heroWrapper.getBoundingClientRect();
    const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
    const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);
    const emojiMaxDisplacement = 20;
    const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
    const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;

    gsap.to(emoji, {
        x: emojiDisplacementX,
        y: emojiDisplacementY,
        ease: "power3.out",
        duration: 0.35
    })
}
const leaveEvent = () => {
    gsap.to(emoji, {
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 1,
    })
}
heroWrapper.addEventListener("mousemove", moveEvent);
heroWrapper.addEventListener("mouseleave", leaveEvent);


// Select the elements
const heroLayer = document.querySelector('.hero_layer');
const sideImg = document.querySelector('.side-img');
const content = document.querySelector('.content');

const cardContainer = document.querySelector('.card_container');

const aboutContainer = document.querySelector('.about_container');
const headerText = document.querySelector('.about_container h1');
const about_img_1_box = document.querySelector('.about_container .content .img_1');
const about_img_1 = document.querySelector('.about_container .content .img_1 img');
const about_img_2_box = document.querySelector('.about_container .content .img_2');
const about_img_2 = document.querySelector('.about_container .content .img_2 img');
const about_img_3_box = document.querySelector('.about_container .content .img_3');
const about_img_3 = document.querySelector('.about_container .content .img_3 img');
const about_img_4_box = document.querySelector('.about_container .content .img_4');
const about_img_4 = document.querySelector('.about_container .content .img_4 img');
const about_img_5_box = document.querySelector('.about_container .content .img_5');
const about_info_1 = document.querySelector('.about_container .content .info_1');

const scrollContainer=document.querySelector(".scroll_container");
const scrollText=document.querySelector(".scroll_container .scroll_text h1");
const scroll_layer_1=document.querySelector(".scroll_container .layer_1 img");
const scroll_layer_2=document.querySelector(".scroll_container .layer_2 img");
const scroll_layer_3=document.querySelector(".scroll_container .layer_3 img");


// Split text into spans
function splitText(inputText,temp) {
    const text = inputText.textContent.trim();
    inputText.textContent = ''; // Clear the header
    
    // Create spans for each character (including spaces)
    const characters = text.split('').map((char, index) => {
        const span = document.createElement('span');
        
        if (char === ' ') {
            // Create a space span
            span.innerHTML = '&nbsp;';
            span.style.display = 'inline-block';
        } else {
            span.textContent = char;
            span.style.display = 'inline-block';
            if(temp){
                if((index>11 && index<19) || (index>35 && index<43))span.classList.add("changeColor");
                if((index>11 && index<19) || (index>35 && index<43))span.classList.add("changeColor");
                span.style.transform = 'translateY(100vh)';
                span.style.transition = `transform ${0.25 + index * 0.1}s cubic-bezier(0.4, 0, 0.2, 1)`;
            }
        }        
        return span;
    });
    // Add spans back to header
    characters.forEach(span => inputText.appendChild(span));
    return characters.filter(span => span.textContent !== ''); // Return only letter spans for animation
}
const letters1 = splitText(headerText,0);
const letters2 = splitText(scrollText,1);

// About section animation====================
function initializePositions() {
    const scrollPosition = window.scrollY;
    const letters1 = document.querySelectorAll('.about_container h1 span');
    const varry = [40,50,10,80,80,30,45,65,15,25,60,85,5,35];
        
    // Set initial positions for all elements
    letters1.forEach((span, i) => {
        span.style.transform = `translateY(${Math.max(0,150+varry[i]+window.innerHeight*3-scrollPosition*0.5)}vh)`;
    });
        
    const elements = {
        about_img_1_box: 220,
        about_img_1: 200,
        about_img_2_box: 210,
        about_img_2: 190,
        about_img_3_box: 230,
        about_img_3: 210,
        about_img_4_box: 200,
        about_img_4: 180,
        about_img_5_box: 170,
        about_info_1: 130
    };
    
    // Set initial transform for each element
    for (const [elementId, offset] of Object.entries(elements)) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-offset)}vh)`;
        }
    }
}
document.addEventListener('DOMContentLoaded', initializePositions);
    
// Handle scroll animation
function handleScroll() {    
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;    
    //Hero section animation===================
    // Move elements based on scroll position
    sideImg.style.transform = `translateX(-${scrollPosition*0.5}px)`;
    content.style.transform = `translateY(-${scrollPosition*0.1}px)`;
    
    if(scrollPosition<500){      
        cardContainer.style.transform =`rotate(${Math.max(0,3-scrollPosition*0.01)}deg) translateY(${Math.min(0,scrollPosition*0.7-300)}px) scale(${Math.min(1,0.8+scrollPosition*0.0005)})`;
    }else{
        cardContainer.style.transform =`none`;
    }

    if(scrollPosition>200){        
        heroLayer.style.display='block';        
        heroLayer.style.opacity=Math.min(1,(scrollPosition-200)*0.004);
    }else{
        heroLayer.style.display='none';
    } 

    // About section animations==================
    //  triggers when card container ends
    if (scrollPosition >  aboutContainer.offsetTop) {
        console.log(1);
        
        let varry=[40,50,10,80,80,30,45,65,15,25,60,85,5,35];
        letters1.forEach((span, i) => {
            span.style.transform = `translateY(${Math.max(0,150+varry[i]+window.innerHeight*3-scrollPosition*0.5)}vh)`;
        });
        about_img_1_box.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-220)}vh)`;
        about_img_1.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-200)}vh)`;
        
        about_img_2_box.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-210)}vh)`;
        about_img_2.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-190)}vh)`;
        
        about_img_3_box.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-230)}vh)`;
        about_img_3.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-210)}vh)`;

        about_img_4_box.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-200)}vh)`;
        about_img_4.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-180)}vh)`;
        
        about_img_5_box.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-170)}vh)`;
        about_info_1.style.transform = `translateY(${Math.max(0,window.innerHeight-scrollPosition*0.1-130)}vh)`;
    }
    
    // scroll section animations==================
    var triggerScroll=scrollContainer.offsetTop;
    if(scrollPosition>triggerScroll-400){
        letters2.forEach(span => {
            span.style.transform = `translateY(${Math.max(0,2250-scrollPosition*0.4)}vh)`;
        });   
    }
    if(scrollPosition>triggerScroll){
        scrollText.style.transform=`translateX(${Math.min(0,590-scrollPosition*0.1)}vh) translateY(${Math.min(72,(scrollPosition-triggerScroll+20)*0.025)}vh)`;      
    }
    
    if(scrollPosition>triggerScroll-35){     
        scroll_layer_1.style.height=`${Math.min(100,30+(scrollPosition-triggerScroll-40)*0.2)}vh`;
    }
    if(scrollPosition>triggerScroll+450){         
        scroll_layer_2.style.height=`${Math.min(100,30+(scrollPosition-triggerScroll-700)*0.2)}vh`;
    }
    if(scrollPosition>triggerScroll+650){ 
        scroll_layer_1.style.opacity=`${Math.max(0,1-(scrollPosition-triggerScroll-650)*0.002)}`;
    }
    if(scrollPosition>triggerScroll+900){     
        scroll_layer_3.style.height=`${Math.min(100,30+(scrollPosition-triggerScroll-1250)*0.2)}vh`;
    }
    if(scrollPosition>triggerScroll+1200){ 
        scroll_layer_2.style.opacity=`${Math.max(0,1-(scrollPosition-triggerScroll-1200)*0.002)}`;
    }
}
// Add event listeners
window.addEventListener('scroll', handleScroll);

// ==============================================
// ================card_container================
// ==============================================
document.addEventListener("DOMContentLoaded",()=>{
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll",ScrollTrigger.update);
    gsap.ticker.add((time)=>{
        lenis.raf(time*1000);
    });
    gsap.ticker.lagSmoothing(0);

    const stickySection = document.querySelector('.card_section');
    const stickyHeight = window.innerHeight*5;
    const outlineCanvas = document.querySelector(".outline-layer");
    const fillCanvas = document.querySelector(".fill-layer");
    const outlineCtx = outlineCanvas.getContext("2d");
    const fillCtx = fillCanvas.getContext("2d");

    function setCanvasSize(canvas,ctx){
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth*dpr-200;
        canvas.height = window.innerHeight*dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr,dpr);
    }
    setCanvasSize(outlineCanvas,outlineCtx);
    setCanvasSize(fillCanvas,fillCtx);

    const tringleStates = new Map();
    const tringleSize = 150;
    const lineWidth = 1;
    const SCALE_THRESHOLD = 0.01;
    let animationFrameId = null;
    let canvasXPosition = 0;

    function drawTringle(ctx, x, y, fillScale = 0, flipped = false,c) {
        const halfSize = tringleSize/2;
    
        if(fillScale < SCALE_THRESHOLD) {
            ctx.beginPath();
            if(!flipped) {
                ctx.moveTo(x, y-halfSize);
                ctx.lineTo(x+halfSize, y+halfSize);
                ctx.lineTo(x-halfSize, y+halfSize);
            } else {
                ctx.moveTo(x, y+halfSize);
                ctx.lineTo(x+halfSize, y-halfSize);
                ctx.lineTo(x-halfSize, y-halfSize);
            }
            ctx.closePath();
            ctx.strokeStyle = "rgba(255,255,255,0.075)";
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
        
        if(fillScale >= SCALE_THRESHOLD) {
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(fillScale, fillScale);
            ctx.translate(-x, -y);
            ctx.beginPath();
            if(!flipped) {
                ctx.moveTo(x, y-halfSize);
                ctx.lineTo(x+halfSize, y+halfSize);
                ctx.lineTo(x-halfSize, y+halfSize);
            } else {
                ctx.moveTo(x, y+halfSize);
                ctx.lineTo(x+halfSize, y-halfSize);
                ctx.lineTo(x-halfSize, y-halfSize);
            }
            ctx.closePath();
            ctx.fillStyle = c;
            ctx.strokeStyle = c;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
            ctx.fill();
            ctx.restore();
        }
    }

    function drawGrid(scrollProgress = 0) {
        let c;
        if(animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        outlineCtx.clearRect(0, 0, outlineCanvas.width, outlineCanvas.height);
        fillCtx.clearRect(0, 0, fillCanvas.width, fillCanvas.height);
        
        const animationProgress = 
            scrollProgress <= 0.65 ? 0 : (scrollProgress-0.65)/0.35;
        
        animationProgress==0 ? fillCanvas.style.zIndex=0 : fillCanvas.style.zIndex=10 ;
        animationProgress==0 ? c="#ff6b0000" : c="#ff6b00";

        let needsUpdate = false;
        const animationSpeed = 0.3;

        tringleStates.forEach((state, key) => {
            if(state.scale < 1) {
                const x = state.col * (tringleSize*0.5) + tringleSize/2 + canvasXPosition;
                const y = state.row * tringleSize + tringleSize/2;
                const flipped = (state.row + state.col) % 2 !== 0;
                drawTringle(outlineCtx, x, y, 0, flipped,c);
            }
        });

        tringleStates.forEach((state, key) => {
            const shouldBeVisible = state.order <= animationProgress;
            const targetScale = shouldBeVisible ? 1 : 0;
            const newScale = state.scale + (targetScale - state.scale) * animationSpeed;

            if(Math.abs(newScale - state.scale) > 0.001) {
                state.scale = newScale;
                needsUpdate = true;
            }

            if(state.scale >= SCALE_THRESHOLD) {
                const x = state.col * (tringleSize*0.5) + tringleSize/2 + canvasXPosition;
                const y = state.row * tringleSize + tringleSize/2;
                const flipped = (state.row + state.col) % 2 !== 0;
                drawTringle(fillCtx, x, y, state.scale, flipped,c);
            }
        });

        if(needsUpdate) {
            animationFrameId = requestAnimationFrame(() => drawGrid(scrollProgress));
        }
    }

    function initializeTringles() {
        const cols = Math.ceil(window.innerWidth/(tringleSize*0.5));
        const rows = Math.ceil(window.innerHeight/tringleSize);
        const totalTringles = rows * cols;  // Fixed multiplication operator

        const positions = [];
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                positions.push({row: r, col: c, key: `${r}-${c}`});
            }
        }
        
        // Shuffle positions
        for(let i = positions.length-1; i > 0; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [positions[i], positions[j]] = [positions[j], positions[i]];
        }

        positions.forEach((pos, index) => {
            tringleStates.set(pos.key, {
                order: index/totalTringles,
                scale: 0,
                row: pos.row,
                col: pos.col
            });
        });
    }

    initializeTringles();
    drawGrid();

    window.addEventListener("resize", () => {
        setCanvasSize(outlineCanvas, outlineCtx);
        setCanvasSize(fillCanvas, fillCtx);
        tringleStates.clear();
        initializeTringles();
        drawGrid();
    });

    ScrollTrigger.create({
        trigger: stickySection,
        start: "top top",
        end: `+=${stickyHeight}px`,
        pin: true,
        onUpdate: (self) => {
            canvasXPosition = -self.progress*200;
            drawGrid(self.progress);
            const cards = document.querySelector(".card_container .cards");
            const progress = Math.min(self.progress/0.654, 1);
            gsap.set(cards, {
                x: -progress * window.innerWidth * 2
            });
        }
    });
});
// ==============================================
// ==============footer_container================
// ==============================================
document.addEventListener("DOMContentLoaded",()=>{
    const imageSources=[
        "./images/footer_img_1.png",
        "./images/footer_img_2.png",
        "./images/footer_img_3.png",
        "./images/footer_img_4.png",
    ];

    const menuItems=document.querySelectorAll(".footer_container .menu-item");

    menuItems.forEach((item)=>{
        const copyElements=item.querySelectorAll(".info,.name,.tag");
        copyElements.forEach((div)=>{
            const copy=div.querySelector("p");
            if(copy){
                const duplicateCopy=document.createElement("p");
                duplicateCopy.textContent=copy.textContent;
                div.appendChild(duplicateCopy);
            }
        });
    });

    const appendImages=(src)=>{
        const preview1=document.querySelector(".preview-img-1");
        const preview2=document.querySelector(".preview-img-2");

        const img1=document.createElement("img");
        const img2=document.createElement("img");

        img1.src=src;
        img1.style.clipPath="polygon(0% 100%,100% 100%,100% 100%,,0% 100%)"
        img2.src=src;
        img2.style.clipPath="polygon(0% 100%,100% 100%,100% 100%,,0% 100%)"

        preview1.appendChild(img1);
        preview2.appendChild(img2);

        gsap.to([img1,img2],{
            clipPath:"polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
            ease:"power3.out",
            onComplete:function(){
                removeExtraImages(preview1);
                removeExtraImages(preview2);
            }
        });
    };
    function removeExtraImages(cont){
        while(cont.children.length>10){
            cont.removeChild(cont.firstChild);
        }
    }
    document.querySelectorAll(".footer_container .menu-item").forEach((item,index)=>{
        item.addEventListener("mouseover",()=>{
            mouseOverAnimation(item);
            appendImages(imageSources[index]);
        });
        item.addEventListener("mouseout",()=>{
            mouseOutAnimation(item);
        })
    });
    const mouseOverAnimation=(elem)=>{
        gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
            top:"-100%",
            duration:0.3
        })
        gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
            top:"0%",
            duration:0.3
        })
    }
    const mouseOutAnimation=(elem)=>{
        gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
            top:"0%",
            duration:0.3
        })
        gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
            top:"100%",
            duration:0.3
        })
    };

    document.querySelector(".footer_container .menu").addEventListener("mouseout",function(){
        gsap.to(".preview-img img",{
            clipPath:"polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            duration:1,
            ease:"power3.out"
        })
    });

    document.addEventListener("mousemove",function(e){
        const preview=document.querySelector(".preview");
        gsap.to(preview,{
            x:e.clientX,
            y:e.clientY,
            duration:1,
            ease:"power3.out"
        });
    });

})