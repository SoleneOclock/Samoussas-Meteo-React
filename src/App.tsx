import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router';
import MainPage from './MainPage';
import CityPage from './CityPage';

function App() {
	const apiUsed = import.meta.env.VITE_API_NAME;

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
			<nav className="text-fuchsia-600 p-4 mb-4 text-2xl flex justify-center gap-4 bg-amber-200">
				<NavLink
					className={({ isActive }) => {
						return isActive ? 'underline' : '';
					}}
					to="/"
				>
					O'Meteo Samoussas
				</NavLink>
				<p>serveur back utilisé : {apiUsed}</p>
				<NavLink
					className={({ isActive }) => {
						return isActive ? 'underline' : '';
					}}
					to="/contact"
				>
					Contact
				</NavLink>
			</nav>

			<Routes>
				<Route
					path="/"
					element={<MainPage cities={cities} setCities={setCities} />}
				/>
				<Route path="/contact" element={<p>Contact page</p>} />
				<Route path="/city/:city" element={<CityPage />} />
				<Route path="*" element={<p>404 not found</p>} />
			</Routes>
		</div>
	);
}

export default App;
