import React from "react";
import { StyleSheet, View } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { MarkerTS } from "@components/MarkerTS";
import { PropsMap } from "../types";

const Map = ({coordinate, type}: PropsMap) => {
  return (
    <View style={styles.root}>
        <MapView 
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            ...coordinate,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        >
            <Marker
                coordinate={coordinate}
            >
                <MarkerTS type={type} />
            </Marker>
          
        </MapView>
    </View>
  );
}

export default Map

const styles = StyleSheet.create({
  root: {
    marginVertical: 10
  },
  map: {
    width: '100%',
    height: 140,
  },
});