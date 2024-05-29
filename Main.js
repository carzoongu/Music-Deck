const sounds = [
    "lovedme", "rush", "nolove",
    "somebody", "lovesong",
    "sete", "understand", "woman"    
]


sounds.forEach((sound) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.addEventListener('click', () =>{

        stopSongs()

        document.getElementById(sound).play()
    })

    btn.innerText = sound 

    document.getElementById('buttons').appendChild(btn)
})


function stopSongs(){
    sounds.forEach((sound) => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}
