import { App_Routes } from "@/app/config/routes";
import BaseCard from "@/components/BaseCard";
import { Colors } from "@/constants/Colors";
import { Constants } from "@/constants/Constants";
import { FlatList, StyleSheet, View } from "react-native";

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: Colors.primary,
			}}
		>
			<FlatList
				numColumns={Constants.num_columns}
				style={{ flex: 1 }}
				data={App_Routes}
				renderItem={({ item }) => <BaseCard item={item} />}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
