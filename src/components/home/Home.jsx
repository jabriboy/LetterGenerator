import { useState } from "react";
import './style/HomeStyle.css'

function Home(){
	var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

	const [auxAlfabeto, setauxAlfabeto] = useState(alfabeto)
	const [letra, setletra] = useState('-')
	const [contador, setContador] = useState(0)
	const [loading, setLoading] = useState(false)

	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	const gerar = async () => {
		setLoading(true)
		setletra('3')
		await delay(1000);
		setletra('2')
		await delay(1000);
		setletra('1')
		await delay(1000);
		setletra('...')
		await delay(1000);
		if(auxAlfabeto.length == 0){
			setletra('acabou');
		}
		else{
			let indiceAleatorio = Math.floor(Math.random() * auxAlfabeto.length);
			setletra(auxAlfabeto[indiceAleatorio]);
			setauxAlfabeto(auxAlfabeto.filter(e => e !== auxAlfabeto[indiceAleatorio]))
			setContador(contador+1)
		}
		setLoading(false)
	}

	const reset = () => {
		const result = window.confirm('Você tem certeza que deseja reiniciar?');
		if(result){
			setauxAlfabeto(alfabeto)
			setletra('-')
			setContador(0)
		}
	}

	return(
		<>
			<div className="home">
				<div className="container">
					<div className="main">
						<h2>Gerador de letras para Salada de frutas/Stop</h2>
						<h1>{letra}</h1>
						<p>contador de letras: {contador}</p>
						{loading ? "" : <div disabled={loading} onClick={gerar} className="btn-gerar">gerar nova letra</div>}
						
						<div onClick={reset} className="btn-reset">reset</div>
					</div>
				</div>
				<p className="credits">
					Desenvolvedor: Gabriel Rocha
					<br />
					GitHub: <a href="https://github.com/jabriboy/LetterGenerator">https://github.com/jabriboy/LetterGenerator</a>
					</p>
			</div>
		</>
	)
}

export default Home;