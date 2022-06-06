import { io } from "socket.io-client";
import { useEffect, createContext, useState, useRef } from "react";
import Peer from "simple-peer";

export const SocketContext = createContext();

const socket = io("http://localhost:5000");

export default function SocketContextProvider({ children }) {
	// states
	const [stream, setStream] = useState(null);
	const [me, setMe] = useState("");
	const [call, setCall] = useState(null);
	const [callAccepted, setCallAccepted] = useState(false);
	const [callEnded, setCallEnded] = useState(false);
	const [name, setName] = useState("");
	// refs
	const myVideo = useRef();
	const userVideo = useRef();
	const connectionRef = useRef();
	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currStream) => {
			setStream(currStream);
			myVideo.current.srcObject = currStream;
		});
		socket.on("me", (id) => {
			setMe(id);
		});
		socket.on("calluser", ({ from, name: callerName, signal }) => {
			setCall({ isReceivingCall: true, from, name: callerName, signal });
		});
	}, []);

	const answerCall = () => {
		setCallAccepted(true);
		const peer = new Peer({ initiator: false, trickle: false, stream });
		peer.on("signal", (data) => {
			socket.emit("answercall", { signal: data, to: call.from });
		});
		peer.on("stream", (currStream) => {
			userVideo.current.srcObject = currStream;
		});
		peer.signal(call.signal);
		connectionRef.current = peer;
	};

	const callUser = (id) => {
		const peer = new Peer({ initiator: true, trickle: false, stream });
		peer.on("signal", (data) => {
			socket.emit("calluser", { userToCall: id, signalData: data, from: me, name });
		});
		peer.on("stream", (currStream) => {
			userVideo.current.srcObject = currStream;
		});
		socket.on("callaccepted", (signal) => {
			setCallAccepted(true);
			peer.signal(signal);
		});
		connectionRef.current = peer;
	};

	const leaveCall = () => {
		setCallEnded(true);
		connectionRef.current.destroy();
		window.location.reload();
	};

	return (
		<SocketContext.Provider
			//prettier-ignore
			value={{call,callAccepted,myVideo,userVideo,stream,name,setName,callEnded,me,callUser,leaveCall,answerCall,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
}
