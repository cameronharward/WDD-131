const rooms = [
    {
        roomName: 'demo',
        image: 'media/demo.png',
        description: 'end of demo, refresh the page to play again',
        altDescription: 'end of demo',
        roomConnections: null,
    },
    {
        roomName: 'room one',
        image: 'media/room_one.png',
        description: 'You find yourself in a dungeon with no memory of how you got here. It is extremely dark, and as your eyes adjust, you see a doorway open ominously before you',
        altDescription: 'no alt',
        roomConnections: [2],
    },
    {
        roomName: 'room two',
        image: 'media/room_two.png',
        description: 'After travelling for some time, you fine yourself at a crossroads. There is wind blowing ahead of you, but there is no telling what you might find down any of the paths ahead.',
        altDescription: 'no alt',
        roomConnections: [3, 5, 4],
    },
    {
        roomName: 'room three',
        image: 'media/room_three.png',
        description: 'At the end of this passage, there is a large chest. You pull on the lid with all your might, but the lock holds. There must be a key for this chest around here somewhere.',
        altDescription: 'You jostle the key into the lock. It takes a moment, but evetually you hear a satisfying click. Inside the chest is a sledgehammer. You hoist it up and rest it on your shoulder. The new proud owner.',
        roomConnections: [2],
    },
    {
        roomName: 'room four',
        image: 'media/room_four.png',
        description: 'At the end of this passge, there are many keys hanging from hooks. None of them seem particularly useful to you now, but one of them is labeled as "Chest Key". You grab that one and leave the others to dangle.',
        altDescription: 'Just a bunch of keys. None of which are useful to you now.',
        roomConnections: [2]
    },
    {
        roomName: 'room five',
        image: 'media/room_five.png',
        description: 'The doorway at the end of this passage is collapsed. You feel wind seeping through the cracks in the rubble. This is your way out, you know it. If only you had a way to clear the rubble...',
        altDescription: 'Sledgehammer in hand, you break down the rubble blocking your path. In the distance, you think you even see some light. Continue to end the DEMO.',
        roomConnections: [2],
    }
]

let hasKey = false;
let hasHammer = false;

function GetDesc(room, hasKey, hasHammer){
    if((room.roomName == 'room three') && (hasKey == true)){
        return room.altDescription;
    }
    else if((room.roomName == 'room four') && (hasKey == true)){
        return room.altDescription;
    }
    else if((room.roomName == 'room five') && (hasHammer == true)){
        return room.altDescription;
    }
    else{
        return room.description;
    }

}

function GetButtons(room, hasHammer){
    let html = '';
    if(room.roomName == 'room one'){
        html += `<button class='buttonone'>Enter</button>`;
        console.log('Success!');
    }
    else if((room.roomName == 'room three') || (room.roomName == 'room four')){
        html += `<button class='buttonone'>Back</button>`;
        console.log('Success?');
    }
    else if(room.roomName == 'room two'){
        html += `<button class='buttonone'>Left</button>
                <button class='buttontwo'>Middle</button>
                <button class='buttonthree'>Right</button>`;
    }
    else if((room.roomName == 'room five') && (hasHammer == true)){
        html += `<button class='buttonone'>Enter</button>`;
    }
    else{
        html += `<button class='buttonone'>Back</button>`;
    }
    return html;

}

function GetRoomTemplate(roomIndex){
    return `            <img class="room_image" src="${rooms[roomIndex].image}" alt="room image">
            <div class="room_text">
                <p>${GetDesc(rooms[roomIndex], hasKey, hasHammer)}</p>
            </div>
            <div class="button_container">
                    ${GetButtons(rooms[roomIndex], hasHammer)}
            </div>`;
}

function LoadScreen(roomIndex){
    const screen = document.querySelector('.game_screen');
    screen.innerHTML = GetRoomTemplate(roomIndex);

    if((rooms[roomIndex].roomConnections.length == 1) && hasHammer == false){
        const button = document.querySelector('.buttonone');
        button.addEventListener('click', () => LoadScreen(rooms[roomIndex].roomConnections[0]));
    }
    else if((rooms[roomIndex].roomConnections.length == 1) && (hasHammer == true) && (rooms[roomIndex].roomName == 'room five')){
        const button = document.querySelector('.buttonone');
        button.addEventListener('click', () => LoadScreen(0));
    }
    else if(rooms[roomIndex].roomConnections.length == 3){
        const buttonone = document.querySelector('.buttonone');
        const buttontwo = document.querySelector('.buttontwo');
        const buttonthree = document.querySelector('.buttonthree');
        buttonone.addEventListener('click', () => LoadScreen(rooms[roomIndex].roomConnections[0]));
        buttontwo.addEventListener('click', () => LoadScreen(rooms[roomIndex].roomConnections[1]));
        buttonthree.addEventListener('click', () => LoadScreen(rooms[roomIndex].roomConnections[2]));
    }
    else{
        const button = document.querySelector('.buttonone');
        button.addEventListener('click', () => LoadScreen(rooms[roomIndex].roomConnections[0]));
    }

    if(roomIndex == 4){
        hasKey = true;
    }
    if((hasKey == true) && (roomIndex == 3)){
        hasHammer = true;
    }
}

function init(){
    LoadScreen(1);
}

init();

