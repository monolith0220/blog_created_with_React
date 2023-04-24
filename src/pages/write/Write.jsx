import "./write.css";

export const Write = () => {
	return (
		<div className="write">
			<img src="" alt="" className="writeImg" />
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i class="writeIcon fa-solid fa-plus"></i>
					</label>
					<input
						type="file"
						name=""
						id="fileInput"
						style={{ display: "none" }}
					/>
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="writeInput writeText"
					></textarea>
				</div>
				<button className="writeSubmit">送信</button>
			</form>
		</div>
	);
};
