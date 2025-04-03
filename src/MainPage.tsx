import City from './City';

interface MainPageProps {
	cities: string[];
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function MainPage({ cities, setCities }: MainPageProps) {
	return (
		<main>
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
		</main>
	);
}
