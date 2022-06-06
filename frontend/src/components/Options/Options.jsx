import React, { useState } from "react";
import { OptionsWrapper } from "../../styles/Options/optionStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import Button from "@mui/material/Button";
import { SocketContext } from "../../context/SocketContext";
import { useContext } from "react";

const Options = () => {
	const { me, callEnded, callAccepted, callUser, name, setName, leaveCall } =
		useContext(SocketContext);
	const [idToCall, setIdToCall] = useState("");

	return (
		<OptionsWrapper container spacing={2}>
			<Grid item xs={12} md={6}>
				<Typography variant="h5" color="initial" sx={{ marginBottom: "1rem" }}>
					Account info
				</Typography>
				<TextField
					label="name"
					value={name}
					fullWidth
					onChange={(e) => setName(e.target.value)}
				/>
				<CopyToClipboard text={me}>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						startIcon={<AssignmentIcon />}
						sx={{ marginTop: "1rem" }}
					>
						Copy your ID
					</Button>
				</CopyToClipboard>
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography variant="h5" color="initial" sx={{ marginBottom: "1rem" }}>
					Call user:
				</Typography>
				<TextField
					label="id to call"
					value={idToCall}
					fullWidth
					onChange={(e) => setIdToCall(e.target.value)}
				/>
				{(!callAccepted || callEnded) && (
					<Button
						variant="contained"
						fullWidth
						startIcon={<LocalPhoneIcon />}
						sx={{ marginTop: "1rem", backgroundColor: "lightgreen", color: "#555" }}
						onClick={() => {
							callUser(idToCall);
						}}
					>
						Call now
					</Button>
				)}
				{callAccepted && !callEnded && (
					<Button
						variant="contained"
						color="error"
						fullWidth
						startIcon={<PhoneDisabledIcon />}
						sx={{ marginTop: "1rem" }}
						onClick={() => {
							leaveCall();
						}}
					>
						Hang up
					</Button>
				)}
			</Grid>
		</OptionsWrapper>
	);
};

export default Options;
