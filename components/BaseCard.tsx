import { RouteType } from "@/app/config/routes";
import { Colors } from "@/constants/Colors";
import { Constants } from "@/constants/Constants";
import { useRouter } from "expo-router";
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
			<Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
				{item.name}
			</Text>
		</TouchableOpacity>
	);
};

export default BaseCard;

const styles = StyleSheet.create({
	buttonStyle: {
		margin: 10,
		backgroundColor: Colors.tertiary,
		paddingVertical: 40,
		borderRadius: 20,
		flex: 1 / Constants.num_columns,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		maxWidth: 80,
		textAlign: "center",
		color: "white",
	},
});
