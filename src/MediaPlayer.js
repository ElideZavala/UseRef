import { useRef, useState } from "react";


const MediaPlayer = () => {
	const videoRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		const video = videoRef.current;
		isPlaying ? video.play() : video.pause();
		// Estara cambiando a true o false cuando se presione el boton
		setIsPlaying(!isPlaying);
	}

  return (
	<div>
		<video width="400" ref={videoRef} onClick={handlePlay}>
			<source src="video/paseo.mp4" type="video/mp4"/>
		</video>
		<button onClick={handlePlay}>
			{ isPlaying ? 'Pause' : 'Play'}
		</button>
	</div>
  )
}

export default MediaPlayer