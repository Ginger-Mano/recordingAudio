let webpage = document.querySelector(".main")
let audio = document.createElement("audio")

let audioBlock = (() => {
    let headingDiv = document.createElement('div')
        headingDiv.className = "header"

    let pageTitle = document.createElement('h2')
        pageTitle.className = "pageTitle"
        pageTitle.innerText = "Recording Audio"

        let recordButton = document.createElement("button")
        recordButton.className = "button"
        recordButton.innerText = "record"

        const handleStream = () => {
            console.log("handle")
        }

        //Notes: window.URL object, persist audio blob

        recordButton.addEventListener("click", (evt) => {
            console.log("test")

            navigator.mediaDevices.getUserMedia({audio : true, video : false})
            .then(handleStream)
        })

        let playButton = document.createElement("button")
        playButton.className = "button"
        playButton.innerText = "play"

        let stopButton = document.createElement("button")
        stopButton.className = "button"
        stopButton.innerText = "stop"

        let deleteButton = document.createElement("button")
        deleteButton.className = "button"
        deleteButton.innerText = "delete"

        let recordingBlock = document.createElement("div")
        recordingBlock.className = "recBlock"

        let recordingClip = document.createElement("recorder")
        recordingClip.className = "recording"


        headingDiv.append(pageTitle)
        recordingBlock.append(recordingClip, recordButton, playButton, stopButton, deleteButton)
        webpage.append(headingDiv, recordingBlock)

})() 