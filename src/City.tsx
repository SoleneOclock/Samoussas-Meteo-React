import { useEffect, useState } from 'react';

// TYPESCRIPT
interface CityProps {
	cityName: string;
}

// COMPOSANT
export default function City({ cityName }: CityProps) {
	// on veut faire un call api pour recuperer la temperature de la ville reçue en props
	// la clé API est dan sun fichier .env.local qui n'est pas commité et on va recuperer sa valeur ici
	const myApiKey = import.meta.env.VITE_KEY_API;

	// STATE pour stocker les datas
	const [temp, setTemp] = useState<null | number>(null);

	// EFFET pour faire le fetch QUE 1seule fois après le premier rendu sinon on va partir en boucle infinie et on va fetche trop de fois et on se faire black listé
	// biome-ignore lint/correctness/useExhaustiveDependencies: <les 2 variables utilisées ne changent pas de valeurs au cours des re rendus donc on les mets pas dans le tableau de deps>
	useEffect(() => {
		const getTemperature = async () => {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}&units=metric`,
			);
			const data = await response.json();
			console.log(data);
			setTemp(data.main.temp);
		};
		getTemperature();
	}, []);

	return (
		<div key={cityName}>
			<div>{cityName}</div>
			<div>{temp}°C</div>
		</div>
	);
}
