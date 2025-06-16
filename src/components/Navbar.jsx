import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-primary py-3"> 
			<div className="container">
				<Link to="/" className="text-white text-decoration-none">
					<span className="navbar-brand mb-0 h1 text-white" style={{ fontSize: "1.5rem" }}>Contacts Homepage 👥</span>
				</Link>
			</div>
		</nav>
	);
};