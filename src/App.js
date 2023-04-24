import { Home } from "./pages/home/Home";
import { TopBar } from "./components/topbar/TopBar";
import { Single } from "./pages/single/Single";
import { Write } from "./pages/write/Write";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<TopBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route index path="/register" element={<Register />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/write" element={<Write />}></Route>
				<Route path="/settings" element={<Settings />}></Route>
				<Route path="/post/:postId" element={<Single />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
