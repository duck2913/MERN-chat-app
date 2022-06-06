import React from "react";
import { Box } from "@mui/material";

const Header = ({ children }) => {
	return (
		<Box
			sx={{
				width: "30%",
				borderRadius: "1rem",
				display: "flex",
				justifyContent: "center",
				backgroundColor: "white",
				padding: "1rem",
				marginBottom: "1rem",
			}}
		>
			{children}
		</Box>
	);
};

export default Header;
