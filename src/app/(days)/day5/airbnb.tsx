import { Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import apartments from "@assets/data/day5/appartments.json"
import CustomMarker from '@/components/day5/CustomMarker';
import ApartmentListItem from '@/components/day5/ApartmentListItem';
import { useMemo, useState } from 'react';
import BottomSheet, {BottomSheetFlatList} from "@gorhom/bottom-sheet";

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const snapPoints = useMemo(() => [80,"50%","90%"], []);

  return (
    <View>
      <Stack.Screen options={{headerShown: false}}/>
      <MapView 
      provider={PROVIDER_GOOGLE}
      style={styles.map} 
     // initialRegion={mapRegion}
      region={mapRegion}
      >
    {apartments.map((apartment) => 
    <CustomMarker 
    key={apartment.id} 
    apartment={apartment} 
    onPress={() => setSelectedApartment(apartment)} 
    />
    )}
  </MapView>
  {/* Display selected apartment */}
  {selectedApartment && (
  <ApartmentListItem 
  apartment={selectedApartment} 
  containerStyle={
    {position: "absolute",
    bottom: typeof snapPoints[0] === "number" ? snapPoints[0] + 10 : 100,
    right: 10,
    left: 10,
  }} />
  )}
  <BottomSheet 
  index={0}
  snapPoints={snapPoints}
  onChange={(index) => console.log("On Change" + index)}
  onAnimate={(from,to) => console.log("From" +from + "to" +to)}
  >
    <View style={styles.contentContainer}>
      <Text style={styles.listTitle}>Over {apartments.length} places</Text>
      <BottomSheetFlatList
      contentContainerStyle={{gap:10, padding: 10}}
        data={apartments}
        renderItem={({item}) => <ApartmentListItem apartment={item} />}
      />
    </View>
  </BottomSheet>
    </View>
  )
}
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
  },
  listTitle: {
    textAlign: "center",
    fontFamily: "InterSemi",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,

  },
});