import Typography from "@mui/material/Typography";
import "./App.css";
import Header from "./components/Header/Header";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
	return (
		<div className="App">
			<Header>
				<Typography variant="h4">Let's call someone</Typography>
			</Header>
			<VideoPlayer />
			<Options />
			<Notification />
		</div>
	);
}

export default App;
