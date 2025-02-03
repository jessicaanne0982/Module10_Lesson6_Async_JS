// Task 1 - Obtain API Key and Configure
const timestamp = "1738520147462"
const publicKey = "59471b5628a86c37c005096dce883a87";
const hash = "bdb476ef6b9313a38699c704c9591361"; // combination of ts, private key, and public key


// Task 2 - Fetching characters from the Marvel API
async function fetchCharactersByName(characterInput) {
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&name=${characterInput}`;

    try {
        const response = await fetch(apiUrl);
        console.log("Response Status:", response.status);

        const characterData = await response.json(); 

        const characters = characterData.data.results;
        if (characters) {
            console.log(characters);
            return characters[0]; // this returns the first character in the api
        } else {
            console.log("No characters found");
            return null;
        }
    } catch (error) {
        console.error('Error fetching characters', error);
        return null;
    }
}

// Task 3 - Updating user interface dynamically... Accepts the name of a character, searches for it, and displays
// the character's name, description (if available), and picture to the webpage

async function searchCharacters() {
    const characterInput = document.getElementById('characterToSearch').value.trim(); // Grabbing the value from the user input field

    const character = await fetchCharactersByName(characterInput); 
    const characterContainer = document.getElementById('characterInfo'); // the section of the html page we're going to update

    if (character) { 
        //if character name is found in the api, log to console and display on webpage
        console.log(`Character Name: ${character.name}, Character Description: ${character.description}`);
        
        //Display character info on webpage in the 'characterInfo' div
        characterContainer.innerHTML = `
        <h3>Name: ${character.name}</h3>
        <p>${character.description}</p>
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
        `;
    } else {
        alert("Character not found.  Please try again!") // alert the user that the name was not found 
    }

};


