import "./singlePost.css";

export const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img src="" alt="" className="singlePostImg" />
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-regular fa-pen-to-square"></i>
						<i className="singlePostIcon fa-solid fa-trash-can"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>monolith</b>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, velit
					possimus ducimus provident amet distinctio quidem natus, et in
					perferendis sapiente! Ullam expedita ut doloribus corporis amet odit
					soluta cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Id, velit possimus ducimus provident amet distinctio quidem natus, et
					in perferendis sapiente! Ullam expedita ut doloribus corporis amet
					odit soluta cum. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Id, velit possimus ducimus provident amet distinctio quidem
					natus, et in perferendis sapiente! Ullam expedita ut doloribus
					corporis amet odit soluta cum.
				</p>
			</div>
		</div>
	);
};
