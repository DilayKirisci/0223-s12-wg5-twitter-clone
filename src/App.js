import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" />
			</Routes>

			<NavLink path="/Login" element={Login} LOGIN />
		</div>
	);
}

export default App;
