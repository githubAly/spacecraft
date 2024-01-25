import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Image, ActivityIndicator, Text } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { useStarships } from "../hooks/useStarships";
 // Importing your custom hook

export const StarshipFeedScreen = () => {
  const { data: starships, isLoading, error } = useStarships(); // Using the custom hook to fetch starship data

  const renderItem = ({ item }: { item: any }) => (
    <FeedCard
      name={item.name}
      model={item.model}
      crew={item.crew}
      hyperdrive_rating={item.hyperdrive_rating}
      cost_in_credits={item.cost_in_credits}
    />
  );

  const FeedCard = ({
    name,
    model,
    crew,
    hyperdrive_rating,
    cost_in_credits,
  }: any) => (
    <Card style={styles.card}>
      <Card.Title title={name} />
      <Image source={{ uri: 'https://picsum.photos/seed/car/400/200' }} style={styles.image} />
      <Card.Content>
        <Title style={styles.cardTitle}>{model}</Title>
        <Paragraph>{crew}</Paragraph>
        <Paragraph>{hyperdrive_rating}</Paragraph>
        <Paragraph>{cost_in_credits}</Paragraph>
      </Card.Content>
    </Card>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text>Error fetching data</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={starships?.results} // Using the starships data fetched from the hook
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginVertical: 5,
  },
  cardTitle: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default StarshipFeedScreen;
