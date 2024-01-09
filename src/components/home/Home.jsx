import { useState } from "react";
import './style/HomeStyle.css'

function Home(){
	var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

	const [auxAlfabeto, setauxAlfabeto] = useState(alfabeto)
	const [letra, setletra] = useState('-')
	const [contador, setContador] = useState(0)

	const gerar = () => {
		if(auxAlfabeto.length == 0){
			setletra('acabou');
		}
		else{
			let indiceAleatorio = Math.floor(Math.random() * auxAlfabeto.length);
			setletra(auxAlfabeto[indiceAleatorio]);
			setauxAlfabeto(auxAlfabeto.filter(e => e !== auxAlfabeto[indiceAleatorio]))
			setContador(contador+1)
		}
	}

	const reset = () => {
		setauxAlfabeto(alfabeto)
		setletra('-')
		setContador(0)
	}

	return(
		<>
			<div className="home">
				<div className="container">
					<div className="main">
						<h2>Gerador de letras para Salada de frutas/Stop</h2>
						<h1>{letra}</h1>
						<p>contador de letras: {contador}</p>
						<div className="box-btn">
							<button onClick={gerar}>gerar nova letra</button>
							<button onClick={reset}>reset</button>
						</div>
					</div>
				</div>
				<p>feito por: Gabriel Rocha</p>
				<p>github: <a href="https://github.com/jabriboy/LetterGenerator">https://github.com/jabriboy/LetterGenerator</a></p>
			</div>
		</>
	)
}

export default Home;