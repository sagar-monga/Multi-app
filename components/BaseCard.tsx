import { RouteType } from "@/app/config/routes";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
	item: RouteType;
};

const BaseCard = ({ item }: Props) => {
	var router = useRouter();
	return (
		<TouchableOpacity
			style={styles.buttonStyle}
			onPress={() => {
				router.push(item.route as any);
			}}
		>
			<Text style={styles.title} numberOfLines={3}>
				{item.name}
			</Text>
		</TouchableOpacity>
	);
};

export default BaseCard;

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: "black",
		padding: 40,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		width: 100,
		textAlign: "center",
		clip: "ellipses",
	},
});
