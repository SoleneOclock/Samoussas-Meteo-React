import { useState } from 'react';
import City from './City';

function App() {
	// STATE pour stocker le tableau des villes
	const [cities, setCities] = useState([
		'Lully',
		'Montpellier',
		'Nantes',
		'Annecy',
		'Lille',
	]);

	return (
		<div>
			<h1>O Meteo</h1>

			<form
				action={(formData) => {
					// ajouter une ville dans la liste
					const newCity = formData.get('city') as string;

					setCities([...cities, newCity]);
				}}
			>
				<input type="text" name="city" />
			</form>

			{cities.map((city) => (
				<City key={city} cityName={city} />
			))}
		</div>
	);
}

export default App;
