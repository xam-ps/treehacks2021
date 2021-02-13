import React, { useState } from "react";
import axios from "axios";

const baseDomain = "http://localhost:5000";
const App = () => {
	const [file, setFile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [result, setResult] = useState([]);
	const handleChange = (e) => {
		setFile(e.target.files[0]);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("audioFile", file);
		setIsLoading(true);
		let { data } = await axios({
			url: `${baseDomain}/search-sound`,
			method: "POST",
			data: formData,
		});
		console.log(data.metadata.music);
		if (data) setResult([...data.metadata.music]);
		else alert("Some Error Occured");
		setIsLoading(false);
	};

	return (
		<>
			<form encType="multipart/form-data" onSubmit={handleSubmit}>
				<input type="file" onChange={handleChange} disabled={isLoading} />
				<input
					type="submit"
					disabled={isLoading}
					value={isLoading ? "uploading..." : "Submit"}
				/>
			</form>
			<br />
			<br />
			<div>
				{result && result.length ? (
					<>
						<h2>Result</h2>
						<table>
							<thead>
								<tr>
									<td>Name</td>
									<td>Singer</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{result[0].title}</td>
									<td>{result[0].artists[0].name}</td>
								</tr>
								{/* {result.map((music, index) => (
                  <tr key={`music-${index}`}>
                    <td>{result[0].title}</td>
                    <td>
                      {music.artists.map((art, index) => (
                        <div key={`artist-${index}`}>{art.name}</div>
                      ))}
                    </td>
                  </tr>
                ))} */}
							</tbody>
						</table>
					</>
				) : null}
			</div>
		</>
	);
};
export default App;
