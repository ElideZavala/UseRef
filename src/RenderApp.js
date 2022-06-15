import { useEffect, useRef ,useState } from "react";

/* Contar cuantas veces se renderiza un componente */
const RenderApp = () => {
	const [text, setText] = useState	('');

	// render1 ref=1
	// render2 ref=2 ==> No lo leera hasta que hayga otra renderizacion de useEffect.
	// ==> si existe otra renderizacion de useEffect, el siguiente se guardara aqui.
	const rendersRef = useRef(1); //#1 Se crea una referencia a la cantidad de renders.

	// render 1 ref=1
	useEffect(() => {
		rendersRef.current++;
		// render1 ref++ = 2
		console.log(`RenderApp se ha renderizado ${rendersRef.current} veces`);
	})
	return (
		<div>
			<input
				type="text"
				value={text}
				onChange={e => setText(e.target.value)}
			/>

			{/* render 1 ref=1 */}
			{/* render 2 ref=2 */}
			<h1>Renders: {rendersRef.current}</h1>
		</div>
	)
}

export default RenderApp