import { useState } from "react"
import Card from "./Card"

const LoadingApp = () => {
	const [show, setShow] = useState(false)

	// Como el llamado a al API es asincrono, Puede durar bastante tiempo y en el proceso en el que llega la informacion
	// el componente se puede desmontar y la app no encontrara donde setear el estado 
	return (
		<div>
			{/* Cambiamos el estado de show */}
			<button onClick={() => setShow(!show)}>
				{show ? "Hide" : "Show"}
			</button>
			{ show && <Card />}
		</div>
	)
}

export default LoadingApp