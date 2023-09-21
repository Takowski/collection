

const objets = [
    {
        image: "../assets/images/game plate/Game_images /ck3.jpg",
        name: "Crusader Kings 3",
        genre: "Grand Strategy",
        platform: "PC",
        status: "Playing",
        achievement: "30",
        totalachievement: "120",
        progress: "90%",
        studio: "Paradox Interactive",
        shortdescription: "Crusader Kings III is a grand strategy game set in the Middle Ages, developed by Paradox Development Studio and published by Paradox Interactive as a sequel to Crusader Kings (2004) and Crusader Kings II (2012).",    
    
    },
    {   
        image: "../assets/images/game plate/Game_images /victoria3.jpg",
        name: "victoria 3",
        genre: "Grand Strategy",
        platform: "PC",
        status: "Playing",
        achievement: "0",
        totalachievement: "0",
        studio: "Paradox Interactive",
        shortdescription: "Victoria 3 is a grand strategy game set in the Victorian era, developed by Paradox Development Studio and published by Paradox Interactive as a sequel to Victoria 2 (2010).",
    },  
    {
        image: "../assets/images/game plate/Game_images /hoi4.jpg",
        name: "Hearts of Iron 4",
        genre: "Grand Strategy",
        platform: "PC",
        status: "Playing",
        achievement: "0",
        totalachievement: "0",
        studio: "Paradox Interactive",
        shortdescription: "Hearts of Iron IV is a grand strategy video game developed by Paradox Development Studio and published by Paradox Interactive. It was released worldwide on 6 June 2016.",
    },
    {
        image: "../assets/images/game plate/Game_images /ds1.jpg",
        name: "Darksouls",
        genre: "RPG",
        platform: "PC",
        status: "Playing",
        achievement: "0",
        totalachievement: "0",
        studio: "FromSoftware",
        shortdescription: "Dark Souls is an action role-playing game developed by FromSoftware and published by Namco Bandai Games. A spiritual successor to FromSoftware's Demon's Souls, the game is the second installment in the Souls series.",
    },
    {
        image: "../assets/images/game plate/Game_images /ds2.jpg",
        name: "Darksouls 2",
        genre: "RPG",
        platform: "PC",
        status: "Playing",
        achievement: "0",
        totalachievement: "0",
        studio: "FromSoftware",
        shortdescription: "Dark Souls II is an action role-playing game developed by FromSoftware and published by Bandai Namco Games. The third game in the Souls series, it was released for Microsoft Windows, PlayStation 3 and Xbox 360.",
    },
    {
        image: "../assets/images/game plate/Game_images /ds3.jpg",
        name: "Darksouls 3",
        genre: "RPG",
        platform: "PC",
        status: "Playing",
        achievement: "0",
        totalachievement: "0",
        studio: "FromSoftware",
        shortdescription: "Dark Souls III is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows.",
    },
    {
        image: "../assets/images/game plate/Game_images /loop.jpg",
        name: "loop hero",
        genre: "RPG",
        platform: "PC",
        status: "Playing",
        achievement: "0",
        totalachievement: "0",
        studio: "Four Quarters",
        shortdescription: "Loop Hero is an indie deck-building roguelike developed by Four Quarters and published by Devolver Digital. It was released on March 4, 2021 for Microsoft Windows and macOS.",
    },
    {  
        image: "../assets/images/game plate/Game_images /hunt.jpg",
        name: "hunt showdown",
        genre: "FPS",
        platform: "PC",
        status: "Playing",
        achievement: "0",
        totalachievement: "0",
        studio: "Crytek",
        shortdescription: "Hunt: Showdown is a first-person shooter survival horror video game published by Crytek. The game is set in the late 1890s, and details the hunters who take down various monsters that have overrun the world.",
    },
]

// for each object create a card an append it to the container

objets.forEach((objet) => {
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
    <div class="card__image">
        <img src="${objet.image}" alt="game image">
    </div>
    <div class="card__content">
        <div class="card__content__title">
            <h2>${objet.name}</h2>
        </div>
        <div class="card__content__genre">
            <p>${objet.genre}</p>
        </div>
        <div class="card__content__platform">
            <p>${objet.platform}</p>
        </div>
        <div class="card__content__status">
            <p>${objet.status}</p>
            </div>
            <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-container w3-blue w3-round-xlarge" style="width:${objet.progress}">${objet.progress}</div>
            </div>
        <div class="card__content__studio">
            <p>${objet.studio}</p>
        </div>
        <div class="card__content__description">
            <p>${objet.shortdescription}</p>
        </div>
        <div class="card__content__button">
            <button class="btn">Delete</button>    
        </div>
    </div>
    `;
    const container = document.querySelector(".container")
    container.appendChild(card);

    let btn=card.querySelector(".btn");
    btn.addEventListener("click", () => {
            card.remove();
    });

})

