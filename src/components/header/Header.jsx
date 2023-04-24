import "./header.css";

export const Header = () => {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img
				className="headerImg"
				src="http://drive.google.com/uc?export=view&id=1-_W981DQCXJBhgidvzGRECD-1xZuqBPW"
				alt=""
				decoding="async"
			/>
		</div>
	);
};
