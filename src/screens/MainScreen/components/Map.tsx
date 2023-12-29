import React from "react";
import { StyleSheet, View } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { MarkerTS } from "@components/MarkerTS";
import { PropsMap } from "../types";

const Map = ({transports}: PropsMap) => {
  return (
    <View style={styles.container}>
        <MapView 
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            ...transports?.[0]?.coordinate,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3
          }}
        >
          {transports?.map((item) => {
            return (
              <Marker
                key={item.id}
                coordinate={item.coordinate}
              >
                {(item.type === 'passenger' || item.type === 'cargo' || item.type === 'special_transport') && 
                  <MarkerTS type={item.type} />
                }
              </Marker>
            )
          })}
        </MapView>
    </View>
  );
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});