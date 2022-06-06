import Typography from "@mui/material/Typography";
import "./App.css";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
function App() {
	return (
		<div className="App">
			<Header>
				<Typography variant="h4">Video Chat Application</Typography>
			</Header>
			<VideoPlayer />
		</div>
	);
}

export default App;
