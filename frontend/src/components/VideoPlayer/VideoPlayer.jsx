import React from "react";
import {
	Video,
	VideoPlayerGridContainer,
	VideoPlayerPaper,
} from "../../styles/VideoPlayer/videoPlayerStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";

const VideoPlayer = () => {
	const { myVideo, userVideo, stream, callAccepted, callEnded, name } = useContext(SocketContext);

	return (
		<VideoPlayerGridContainer container>
			{/* our video */}
			{stream && (
				<VideoPlayerPaper>
					<Grid item xs={12} md={6}>
						<Typography variant="body1" color="initial">
							{name || "Name"}
						</Typography>
						<Video playsInline muted ref={myVideo} autoPlay />
					</Grid>
				</VideoPlayerPaper>
			)}
			{/* other user video */}
			{callAccepted && !callEnded && (
				<VideoPlayerPaper>
					<Grid item xs={12} md={6}>
						<Typography variant="body1" color="initial">
							Name
						</Typography>
						<Video playsInline ref={userVideo} autoPlay />
					</Grid>
				</VideoPlayerPaper>
			)}
		</VideoPlayerGridContainer>
	);
};

export default VideoPlayer;
