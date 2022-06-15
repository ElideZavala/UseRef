import { useEffect, useState, useRef } from "react";


const ScrollAnimation = () => {
	const [background, setBackground] = useState("lightblue");
	const divRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const div = divRef.current;
			// Metodo hacia el scroll para obtener la posicion del elemento
			const { y } = div.getBoundingClientRect()

			const backgroundColor = y <= 100 ? 'orange' : 'lightblue';
			setBackground(backgroundColor);
		}

		window.addEventListener('scroll', handleScroll);

		// Cuando el elementos se remonte removemos el evento, con los EventListeners
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [])
	

  return (
	 <div>
		<div ref={divRef} style={{ padding:0, height: "180vh", background}}>
			<h1>Scroll to change background-color</h1>
		</div>
	 </div>
  )
}

export default ScrollAnimation