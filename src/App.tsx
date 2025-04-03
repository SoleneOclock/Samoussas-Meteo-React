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
		<div className="h-screen bg-linear-to-b from-sky-500 to-indigo-500">
			<h1 className="text-fuchsia-600 p-4 mb-4 text-2xl text-center bg-amber-200">
				O'Meteo
			</h1>

			<form
				className="flex justify-center gap-4 m-4"
				action={(formData) => {
					// ajouter une ville dans la liste
					const newCity = formData.get('city') as string;

					setCities([...cities, newCity]);
				}}
			>
				<input
					className="bg-amber-50 rounded p-1"
					type="text"
					name="city"
					placeholder="new city..."
				/>
				<button type="submit">OK</button>
			</form>

			<div className="flex gap-4 flex-wrap justify-center">
				{cities.map((city) => (
					<City key={city} cityName={city} />
				))}
			</div>
		</div>
	);
}

export default App;
