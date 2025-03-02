import { App_Routes } from "@/app/config/routes";
import BaseCard from "@/components/BaseCard";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "lightblue",
			}}
		>
			<FlatList
				numColumns={2}
				style={{ flex: 1 }}
				data={App_Routes}
				renderItem={({ item }) => <BaseCard item={item} />}
				columnWrapperStyle={{
					justifyContent: "space-evenly",
					marginTop: 10,
				}}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
