import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

function WeatherScreen() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const locations = [
      { name: 'Bangkok', latitude: 13.75, longitude: 100.516667 },
      { name: 'Chiang Mai', latitude: 18.796143, longitude: 98.979263 },
      { name: 'Phuket', latitude: 7.880448, longitude: 98.392250 },
      { name: 'Pattaya', latitude: 12.923556, longitude: 100.882455 }
    ];

    const requests = locations.map(location =>
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`)
    );

    Promise.all(requests)
      .then(responses => {
        const newData = responses.map((res, index) => ({
          city: locations[index].name,
          temp: `${res.data.current_weather.temperature} °C`,
          description: `Wind Speed: ${res.data.current_weather.windspeed} km/h`
        }));
        setWeatherData(newData);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={weatherData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.city}</Text>
            <Text style={styles.subtitle}>{item.temp}, {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#ddf',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});

export default WeatherScreen;