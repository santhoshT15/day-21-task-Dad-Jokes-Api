const Display = document.getElementById("content");
const btn = document.getElementById("next");

btn.addEventListener("click",jokes());

jokes()

async function jokes(){
    const config = {
        headers : {
            Accept : 'application/json',
        },
    }

    const url = await fetch ("https://icanhazdadjoke.com", config)

    const data = await url.json()
    Display.innerHTML=data.joke
}