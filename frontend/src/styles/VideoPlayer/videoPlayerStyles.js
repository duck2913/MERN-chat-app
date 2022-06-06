import { Grid, styled, Paper } from "@mui/material";

export const VideoPlayerGridContainer = styled(Grid)(({ theme }) => ({
	justifyContent: "center",
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
	},
}));

export const Video = styled("video")(({ theme }) => ({
	width: "550px",
	[theme.breakpoints.down("sm")]: {
		width: "330px",
	},
}));

export const VideoPlayerPaper = styled(Paper)(() => ({
	padding: "10px",
	margin: "10px",
}));
