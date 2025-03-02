import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

let intervalId: any = null;
const CountDownTimer = () => {
	const initialState = 5;
	const [timer, setTimer] = useState(initialState);

	useEffect(() => {
		startTimer();
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clearInterval(intervalId);
		}
	}, [timer]);

	const startTimer = () => {
		const timerId = setInterval(() => {
			setTimer((prev) => prev - 1);
		}, 1000);

		intervalId = timerId;
	};

	const handleReset = () => {
		if (intervalId) {
			clearInterval(intervalId);
		}
		setTimer(initialState);
		startTimer();
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: Colors.primary,
			}}
		>
			<Text style={{ color: "black", fontSize: 70 }}>{timer}</Text>
			<TouchableOpacity
				onPress={handleReset}
				style={{ backgroundColor: Colors.quaternary, padding: 10 }}
			>
				<Text style={{ fontSize: 20 }}>Reset</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CountDownTimer;

const styles = StyleSheet.create({});
