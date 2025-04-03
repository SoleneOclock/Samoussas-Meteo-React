import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function CityPage() {
	const { city } = useParams();
	const myApiKey = import.meta.env.VITE_KEY_API;

	// STATE pour stocker les datas
	const [temp, setTemp] = useState<null | number>(null);
	const [icon, setIcon] = useState<null | number>(null);

	// EFFET pour faire le fetch QUE 1seule fois après le premier rendu sinon on va partir en boucle infinie et on va fetche trop de fois et on se faire black listé
	// biome-ignore lint/correctness/useExhaustiveDependencies: <les 2 variables utilisées ne changent pas de valeurs au cours des re rendus donc on les mets pas dans le tableau de deps>
	useEffect(() => {
		const getTemperature = async () => {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`,
			);
			const data = await response.json();
			console.log(data);
			setTemp(data.main.temp);
			setIcon(data.weather[0].icon);
		};
		getTemperature();
	}, []);

	return (
		<main>
			<h1>Details de la ville : {city}</h1>
			<img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="desc" />
		</main>
	);
}
