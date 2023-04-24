import "./login.css";

export const Login = () => {
	return (
		<div className="login">
			<form className="loginForm">
				<span className="loginTitle">Login</span>
				<label>Email</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your email"
				/>
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password"
				/>
				<button className="loginButton">ログイン</button>
			</form>
			<button className="loginRegisterButton">Register</button>
		</div>
	);
};
