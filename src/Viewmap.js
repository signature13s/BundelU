import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const Viewmap = () => {
  const locations = [
    {
      title: 'IET',
      description: 'Marker Description',
      coordinate: {
        latitude: 25.453092000112825,
        longitude: 78.60991474267782,
      },
    },
    {
      title: 'Admin Block',
      description: 'Marker Description',
      coordinate: {
        latitude: 25.4530072347416,
        longitude: 78.60958214879656,
      },
    },
    {
      title: 'LB Hostel',
      description: 'Marker Description',
      coordinate: {
        latitude: 25.452907451267443,
        longitude: 78.61059295231097,
      },
    },
    {
      title: 'Innovation Center',
      description: 'Marker Description',
      coordinate: {
        latitude: 25.452325192674696,
        longitude: 78.61007328172599,
      },
    },
  ];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 25.453092000112825,
          longitude: 78.60991474267782,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {locations.map(value => {
          return (
            <Marker
              key={value.title}
              coordinate={value.coordinate}
              title={value.title}
              description={value.description}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default Viewmap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
