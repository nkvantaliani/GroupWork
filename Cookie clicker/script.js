let cookies = 0;
let gold = 0;
let goldPerClick = 1;

window.onload = function(){
    loadGame();
    updateStats();
}

function save(){
    localStorage.setItem('cookies',cookies);
    localStorage.setItem('gold', gold);
    localStorage.setItem('goldPerClick', goldPerClick);
};

function clickCookie() {
    cookies++;
    gold += goldPerClick;
    updateStats();
    save();
};




function loadGame(){
    let savedCookies = localStorage.getItem('cookies')
    let savedGold = localStorage.getItem('gold');
    let perClick = localStorage.getItem('goldPerClick')

    if(savedCookies !==null)cookies=parseInt(savedCookies);
    if(savedGold !==null)gold=parseInt(savedGold);
    if(perClick !==null)goldPerClick=parseInt(perClick);

    updateStats();
}

function buyGadget(gadget) {
    if (gadget === 1 && cookies >= 10) {
        cookies -= 10;
        goldPerClick += 1;
        document.getElementById('gadget1').classList.add('disabled');
        document.getElementById('gadget1').onclick = null;
    } else if (gadget === 2 && cookies >= 50) {
        cookies -= 50;
        goldPerClick += 2;
        document.getElementById('gadget2').classList.add('disabled');
        document.getElementById('gadget2').onclick = null;
    } else if (gadget === 3 && cookies >= 200) {
        cookies -= 200;
        goldPerClick += 5;
        document.getElementById('gadget3').classList.add('disabled');
        document.getElementById('gadget3').onclick = null;
    } else if (gadget === 4 && gold >= 250) {
        gold -= 250;
        setInterval(function () {
            cookies += goldPerClick;
            updateStats();
            save();
        }, 1000);
        document.getElementById("gadget4").classList.add('disabled');
        document.getElementById("gadget4").onclick = null;
    } else if (gadget === 5) {
        const videoContainer = document.createElement('div');
        videoContainer.id = 'video-container';
        videoContainer.style.position = 'fixed';
        videoContainer.style.top = '50%';
        videoContainer.style.left = '50%';
        videoContainer.style.transform = 'translate(-50%, -50%)';
        videoContainer.style.background = 'rgba(0, 0, 0, 0.8)';
        videoContainer.style.padding = '20px';
        videoContainer.style.borderRadius = '10px';
        videoContainer.style.zIndex = '1000';

        const video = document.createElement('video');
        video.src = 'ad.mp4';
        video.controls = true;
        video.style.width = '100%';

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.marginTop = '10px';
        closeButton.onclick = function () {
            document.body.removeChild(videoContainer);
        };

        video.onended = function () {
            cookies += 50;
            gold += 50;
            updateStats();
            alert("Congratulations! You earned +50 cookies and +50 gold.");
            document.body.removeChild(videoContainer);
        };

        videoContainer.appendChild(video);
        videoContainer.appendChild(closeButton);
        document.body.appendChild(videoContainer);
    } else {
        alert('Not enough cookies or gold to buy this gadget!');
    }
    updateStats();
    save();
}

function updateStats() {
    document.getElementById('cookies').textContent = cookies;
    document.getElementById('gold').textContent = gold;
};
// function cookieAnimationPlus() {
//     let cookie = document.getElementById("cookie");
//     cookie.style.height = "150px";
//     cookie.style.transition = "1s"
// };
// function cookieAnimationHover() {
//     let cookie = document.getElementById("cookie");
//     cookie.style.height = "170px";
//     cookie.style.transition = "1s"
// };
function cookieAnimationClick() {
    let cookie = document.getElementById("cookie");
}