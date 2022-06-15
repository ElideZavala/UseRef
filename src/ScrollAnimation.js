import { useEffect, useState } from "react";


const ScrollAnimation = () => {
	const [background, setBackground] = useState("lightblue");

	useEffect(() => {
		const handleScroll = () => {
			console.log('Se hizo scroll')
		}

		window.addEventListener('scroll', handleScroll);

		// Cuando el elementos se remonte removemos el evento, con los EventListeners
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [])
	

  return (
	 <div>
		<div style={{ height: "180vh", background}}>
			<h1>Scroll to change background-color</h1>
		</div>
	 </div>
  )
}

export default ScrollAnimation