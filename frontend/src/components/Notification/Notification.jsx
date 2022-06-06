import React from "react";
import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";
import Button from "@mui/material/Button";

const Notification = () => {
	const { answerCall, callAccepted, call } = useContext(SocketContext);

	return (
		<>
			{!callAccepted && call?.isReceivingCall && (
				<div
					style={{
						backgroundColor: "#0c130d",
						backgroundImage:
							"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
						color: "#cce8cd",
						display: "flex",
						padding: "0rem 1rem",
						borderRadius: "1rem",
						position: "fixed",
						top: "3rem",
						right: "3rem",
					}}
				>
					<p>{call.name} is calling!</p>
					<Button
						variant="text"
						color="primary"
						onClick={() => {
							answerCall();
						}}
					>
						Answer
					</Button>
				</div>
			)}
		</>
	);
};

export default Notification;
