import "./post.css";

export const Post = () => {
	return (
		<div className="post">
			<img className="postImg" src="" alt="" />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor sit amet</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
				sequi expedita quibusdam eaque consectetur amet iure exercitationem
				illum reprehenderit! Quod illum sunt dignissimos ab quasi necessitatibus
				voluptatibus tenetur doloremque id! Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Perferendis sequi expedita quibusdam eaque
				consectetur amet iure exercitationem illum reprehenderit! Quod illum
				sunt dignissimos ab quasi necessitatibus voluptatibus tenetur doloremque
				id! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Perferendis sequi expedita quibusdam eaque consectetur amet iure
				exercitationem illum reprehenderit! Quod illum sunt dignissimos ab quasi
				necessitatibus voluptatibus tenetur doloremque id!
			</p>
		</div>
	);
};
