// UI

const menus = document.querySelectorAll('.menu');
const pgh = document.getElementById('paragraph');

const formel = document.getElementById('form'),
    inputel = document.getElementById('input'),
    todoul = document.querySelector('.todos');

const section = document.getElementById('modal-box');
const visiting = document.getElementById('visiting-time');
const nobtn = document.getElementById('no');
const ysebtn = document.getElementById('yes');

let data = localStorage.getItem("pass");
// console.log(data);


// for menu
menus.forEach(menu=>{
    // console.log(menu.innerText);

    menu.addEventListener('click',(e)=>{
        if(menu.innerText === "Q and A"){
            pgh.classList.add('font-size');
            pgh.innerHTML = `
        <h2>What are the most important parts of a skincare routine?</h2>
        <p style="text-indent: 50px">Apart from following the cleanse, tone and moisture skincare routine, you need to also keep your skin safe from the harmful rays of the sun. The damage can result in dark spots, wrinkles, and also there is a risk of skin cancer. Choose a broad-spectrum sunscreen lotion or spray to keep you protected.</p>
        <h2>How can I fix uneven skin tone?</h2>
        <p style="text-indent: 50px">Uneven skin tone is caused by uneven distribution of pigment, it can also be caused by extreme sun exposure and hormonal changes. if you do not exfoliate your skin properly, you can develop uneven skin tone because of the excessive buildup of dead skin cells. You can use serums, creams that contain vitamin C to even your skin tone. You can also swear by home remedies to get back even toned skin.</p>
        <h2>How do I find out my skin type?</h2>      
        <p style="text-indent: 50px">There are few categories typically skin is classified into; normal, oily, dry, combination and sensitive skin. But over a period of time your skin texture and type can change as it is affected by a lot of factors such as lifestyle, hormones and your diet. The ideal way to understand your skin type might be, to wash it gently and leave it for several hours without using any product to observe your skin.</p>
        <h2>Why is it important to use a moisturizer?</h2>      
        <p style="text-indent: 50px">Using a good moisturizer can help prevent and treat dry skin, it can also protect sensitive skin and improve the texture of your skin. Using a moisturizer daily can improve the skin’s hydrating and make your skin healthy and glowing.</p>
        <h2>When should you moisturize your face?</h2>      
        <p style="text-indent: 50px">You should moisturize your face daily after cleansing. Apply it in the morning after cleansing it and then before retiring to bed at night. People usually feel the need to moisturize the skin only during the winter season, but your skin needs moisturization throughout the year. </p>
        <h2>Do you need to moisturize oily skin?</h2>      
        <p style="text-indent: 50px">Yes, you need to moisturize your skin even if you have oily skin. Moisturizer is used to improve your skin’s texture and to hydrate your skin. If you have oily skin, you can use oil-free moisturizer to avoid greasy and shiny looking skin.</p>
        <h2>How can I stop my skin from breaking out?</h2>      
        <p style="text-indent: 50px">To prevent breakouts you need to keep your skin clean to get rid of all the impurities, dead skin and the extra oil that starts forming on your skin’ surface. Use over-the-counter products to get rid of the breakouts. And use a nourishing moisturizer because the anti-acne products can leave your skin dry. You also need to use makeup sparingly, keep your hair and hands away from your face so that you do not block the skin pores, spread the bacteria and irritate the skin.</p>
        <h2>What is the best way to handle sensitive skin?</h2>      
        <p style="text-indent: 50px">The best way to deal with sensitive skin is to be gentle with it. Do not use harsh cleanser or any kind of harsh products that might have irritating substances. Always opt for products that suit your skin and specifically formulated for sensitive skin.</p>
        <h2>How can I get rid of blackheads?</h2>      
        <p style="text-indent: 50px">Exfoliating works well to get rid of the blackheads from your skin.You can always use home remedies to discourage the formation of blackheads on your skin.</p>
        <h2>How can I reduce the oil production in my skin?</h2>      
        <p style="text-indent: 50px">Steer clear from using any harsh products to get rid of the oily skin. Wash your face twice a day with a gentle skin cleanser, use oil-free moisturizer and other skin products. Using home remedies can also help you to reduce the oil production. Also, pay attention to your diet, as increase in amount of sugar, salt and fried food can wreck your skin and lead to more oil production.</p>
        <h2>How can I get rid of brown sun spots?</h2>      
        <p style="text-indent: 50px">To avoid brown spots, you need to start using a sunscreen. But if you already have spots due to the exposure to harsh sunlight, you can use an exfoliating agent or a natural skin-lightening product to lighten the brown sun spots. By limiting the exposure to heat and sun, and protecting the skin with sunscreen will help in reducing the brown sun spots.</p>
        <h2>What causes acne?</h2>      
        <p style="text-indent: 50px">Acne is the most common skin problem. It can be caused by excess sebum oil, clogged pores, hormonal changes, medication or lifestyle and diet changes. Though it is common during puberty stage, young adults can also have acne outbreak before the age of 30. It is less common in older adults. Other factors such as stress and cosmetic products can also cause acne</p>
        <h2>How can I prevent aging skin?</h2>      
        <p style="text-indent: 50px">Over a period of time your skin will lose its elasticity and collagen, and it will start appearing saggy with fine lines and wrinkles. But you can improve the appearance of your skin with proper skincare regimen. Take care of your skin, protect from the harsh UV rays by using a broad spectrum sunscreen and by using topical products that have retinoid and antioxidants. </p>
        <h2>Do I really need to wear sunscreen every day?</h2>      
        <p style="text-indent: 50px">You need to apply sunscreen every day to protect your skin from the harmful radiations that can damage your skin. Using sunscreen will also decrease the risk of skin cancer and other skin aging problems such as fine lines, wrinkles, spots and skin discoloration. </p>
        `;
        }


        e.preventDefault();
    });

    menu.addEventListener('click', (e)=>{
        if(menu.innerText === "Day Steps"){
            pgh.classList.add('font-size');
            pgh.innerHTML = `
            <h2>Your Daytime Skincare Routine</h2>
            <ol>
                <li>Cleanse</li>
                <p>Face cleansing should be the first step in any skincare routine, as it clears away impurities and excess oil that can clog pores and dull skin. But be gentle. "Too many people cleanse too much or too often or with a cleanser that's too harsh, which will actually break down your skin's protective barrier," Dr. Magovern says. If you have dry or sensitive skin, try washing only at night and rinsing your face with water in the morning.</p>
                <li>Toner</li>
                <p>You don’t need a toner, but swiping one on can be a great way to refresh skin, remove any residual debris and balance pH, Dr. Magovern says. If you have acne-prone skin, look for a toner with ingredients like salicylic acid to combat breakouts. For dry or sensitive skin, seek out a hydrating toner (or its sister, an essence) made without parching alcohol and with ingredients like glycerin and hyaluronic acid to soothe.</p>
                <li>Serum</li>
                <p>A serum tailored to your skin concerns can both treat and protect. Look for an antioxidant, like gold-standard vitamin C. "Everyone should use vitamin C, no matter what age," Dr. Magovern says. "It helps reverse a lot of the skin damage we get from the sun and pollution." For darker skin tones, hyperpigmentation can be a common issue, and using a vitamin C serum in the morning can help mitigate dark spots, says Jennifer David, D.O., a dermatologist in Philadelphia and founder of Skin & Scripts Virtual Dermatology.</p>
                <li>Eye Cream</li>
                <p>Eye creams fall into the "treat" category, too. If desired, lightly tap on a formula targeted to your eye-area concerns, using your ring finger (your weakest) to avoid tugging on delicate skin and causing damage.</p>
                <li>Moisturizer</li>
                <p>Next come heavier formulas like moisturizer, which keeps skin hydrated and helps strengthen its barrier. Unless you have dry skin, opt for a lighter moisturizer for daytime use, such as a lotion or gel that will soak in quickly and won't pill under makeup. If your skin is drier, try a thicker formula, like a cream. "Look for ceramides or hyaluronic acid, since these ingredients are the building blocks of moisture retention in skin," Dr. David explains.</p>
                <li>Sunscreen</li>
                <p>It's the most important step in any skincare routine, for every skin type and age. "If you don't wear sunscreen, you might as well not do any of the other steps," Dr. Magovern says. "The sun is the number one reason people's skin ages prematurely." And the damage isn't only cosmetic, no matter what your skin color: "People of color can and do get skin cancer," Dr. David says. "Plus, if you're treating hyperpigmentation without daily SPF use, it's like taking two steps forward and one step backward." Smooth on a broad-spectrum SPF 30 or higher face sunscreen as the last step in your morning skincare routine, including on your neck and the backs of your hands. Heads up: Protecting your skin from the sun is important even if you're spending your days indoors, as UV rays can penetrate through the windows.</p>
    
            </ol>
        `;
        }
        formel.style.display = "none";

        e.preventDefault();
    });

    menu.addEventListener('click', (e)=>{
        if(menu.innerText === "Night Steps"){
            pgh.classList.add('font-size');
            pgh.innerHTML = `
        <h2>Your Nighttime Skincare Routine</h2>
        <ol>
            <li>Cleanser</li>
            <p>First, remove the day's makeup and grime. Start by applying a separate makeup remover if needed to take off any cosmetics. "Cleansers are not necessarily designed to dissolve makeup, especially on eyes, and haven't done so effectively in our testing," says GH Beauty Lab Senior Chemist Sabina Wizemann. Follow with the same cleanser as in the morning, working from the inside of the face up, then out and down along the hairline and perimeter to just underneath the chin, she suggests.</p>
            <li>Toner</li>
            <p>If you're opting for a toner, apply it the same way you would in the morning. Because they're liquids, toners should go on before heavier formulas like serums and moisturizers so they have a chance to be absorbed.</p>
            <li>Serum or Treatment</li>
            <p>Night is an ideal time to use products with ingredients that work to slough off dead skin cells or stimulate cell turnover while you sleep, such as alpha hydroxy acids like glycolic acid or retinol, Dr. Magovern says. These smooth texture, brighten and minimize pores. (Some serums can be used day or night; follow the packaging instructions.) If you're treating hyperpigmentation, alternate between a retinoid and the spot-fading active ingredient hydroquinone, Dr. David recommends.</p>
            <li>Eye Cream</li>
            <p>Dab a bit of your face serum or treatment, or a separate eye cream if you use one in the morning too, around your eyes. "You don't have to use a lot, but if you start training your skin to tolerate more active products around the eye, you'll see more change," Dr. Magovern explains.</p>
            <li>Acne Treatment</li>
            <p>If you currently have a blemish (or a few), apply an acne treatment at this time. For chronic breakouts, be proactive rather than treating pimples as they pop up, Dr. Magovern advises. "If you just treat the spot, you'll get acne right next to it if your skin is clogged," she says. "You're getting breakouts because oil is building up, so be consistent with your regimen to keep pores all over your face clear." (If using a retinoid, let skin adjust before trying acne formulas like salicylic acid.)</p>
            <li>Moisturize</li>
            <p>Moisturizing is especially crucial at night, as it creates a barrier that seals in skin's natural hydration and any active ingredients to counteract moisture loss that happens as you sleep. The non-SPF moisturizer you use for day works, or try a night-specific formula for targeted benefits like anti-aging.</p>
            <li>Face Oil</li>
            <p>If your skin is still feeling parched, applying a face oil can be a great way to help lock in moisture overnight. "A lot of people think that if they have acne or oily skin, they'll break out with an oil, but it's not true," Dr. Magovern explains. "It can actually really help soften skin." For a nourishing boost, pat on a face oil as a last step once the rest of your leave-on skincare products dry.</p>
        </ol>`;
        }
        formel.style.display = "none";

        e.preventDefault();
    });

    menu.addEventListener('click',(e)=>{
        if(menu.innerText === "Routine"){
            // console.log('hay');
            pgh.innerHTML = '';
            formel.style.display = "block";

            inputel.focus();


        }

    });

    menu.addEventListener('click',()=>{
        if(menu.innerText === "Exit"){
            section.style.display = "flex";

            pausetimer();
        }
    });

});




const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo => addtodo(todo));
}

formel.addEventListener('submit',(e)=>{
    // console.log('hay');

    addtodo();

    e.preventDefault();
});

function addtodo(todo){
    // console.log('i am working');

    let todotext = inputel.value;
    // console.log(todotext);

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement('li');
        li.classList.add("todol");

        if(todo && todo.complete){
            li.classList.add("completed");
        }

        li.appendChild(document.createTextNode(todotext));
        todoul.appendChild(li);

        updatelocalstorage();

        inputel.value = '';

        li.addEventListener('click',()=>{
            li.classList.toggle('completed');

            updatelocalstorage();
        });

        li.addEventListener("contextmenu",(e)=>{
            li.remove();

            updatelocalstorage();

            e.preventDefault();
        });
    }else{
        window.alert('Enter Your Routine')
    }
}

function updatelocalstorage(){
    // console.log('ready');

    let todolis = document.querySelectorAll('.todol');
    // console.log(todolis);

    let todos = [];

    todolis.forEach(todoli=>{
       // console.log(todoli);
       //  console.log(todoli.innerText);

        todos.push({
            text:todoli.innerText,
            complete:todoli.classList.contains('completed')
        });
    });

    // console.log(todos);
    localStorage.setItem('todos',JSON.stringify(todos));
}


let [milliseconds,seconds,minutes] = [0,0,0];

let time;

function starttimer(){
    // console.log('start timer');

    if(time !== null){
        clearInterval(time);
    }
    //                    fun , ms
    time = setInterval(displaytimer,10);

    // console.log(time);
}

// Pause Timer
function pausetimer(){
    // console.log('pause timer');

    clearInterval(time);

    // console.log(time);
}

function displaytimer(){
    // console.log('hay i working');

    milliseconds += 10;
    // console.log(milliseconds);

    if(milliseconds === 1000){
        milliseconds = 0;
        // console.log(milliseconds);

        // seconds += 1;
        seconds++;
        // console.log(seconds);

        if(seconds === 60){
            seconds = 0;
            // console.log(seconds);

            minutes++;
            console.log(minutes);

        }
    }

    let m = minutes < 10 ? "0"+minutes :minutes;
    let s = seconds < 10 ? "0"+seconds :seconds;
    let ms = milliseconds < 10 ? "00"+milliseconds :milliseconds < 100 ? "0"+milliseconds : milliseconds;

    visiting.innerText = `${m} m : ${s} s : ${ms} ms`;

}

nobtn.addEventListener('click',()=>{
    starttimer();
    section.style.display ="none";
});

ysebtn.addEventListener('click',()=>{
    localStorage.clear();
    window.location.reload();
});

const body = document.getElementById('body');
body.addEventListener('mouseenter',()=>{
    starttimer();
});

//Clock Area

const hourel = document.querySelector('.hour'),
    minuteel = document.querySelector('.minute'),
    secondel = document.querySelector('.second');

const timeel = document.querySelector('.time'),
    dateel = document.querySelector('.date');


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday" , "Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function settime(){
    const date = new Date();

    const month = date.getMonth();
    const day = date.getDay();
    const today = date.getDate();
    const hours = date.getHours();
    const hoursforclock = hours % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const getampm = hours >= 12 ? 'PM' : 'AM';

    // console.log(month);

    hourel.style.transform = `translate(-50%,-100%) rotate(${scale(hoursforclock,0,12,0,360)}deg)`;
    minuteel.style.transform =`translate(-50%,-100%) rotate(${scale(minutes,0,60,0,360)}deg)`;
    secondel.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,60,0,360)}deg)`;

    timeel.innerText = `${hoursforclock}:${minutes < 10 ? `0${minutes}` : minutes} ${getampm}`;
    dateel.innerHTML =  `${days[day]} , ${months[month]} , <span class="circle">${today}</span> `

}

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}

settime();

setInterval(settime,1000);









