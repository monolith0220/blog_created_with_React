import "./settings.css";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form action="" className="settingsForm">
					<label htmlFor="">Profile Picture</label>
					<div className="settingsPP">
						<img src="" alt="" />
						<label htmlFor="fileInput">
							<i class="settingsPPIcon fa-solid fa-user"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label htmlFor="">Username</label>
					<input type="text" placeholder="Monolith" />
					<label htmlFor="">Email</label>
					<input type="email" name="" id="" placeholder="aaa@gmail.com" />
					<label htmlFor="">Password</label>
					<input type="password" placeholder="password" />
					<button className="settingsSubmit">送信</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};
