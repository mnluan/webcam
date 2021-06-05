function videoCamera(){

	const output = {video:{width:720}}

	navigator.mediaDevices.getUserMedia({video:true, audio:true}).then(stream =>{
		const videoElement = document.querySelector('#video')
		videoElement.srcObject = stream

	}).catch(erro =>{console.log(error)})
}

window.addEventListener("DOMContentLoaded", videoCamera)
