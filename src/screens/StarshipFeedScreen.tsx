import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Image } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { default as data } from "../../api/data.json";

interface Starship {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
}

export const StarshipFeedScreen = () => {
  const renderItem = ({ item }: { item: Starship }) => (
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
  }: Starship) => (
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerbis}>
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerbis: {
    flex: 1,
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
