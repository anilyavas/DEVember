import { View, Text } from 'react-native'
import { Marker } from 'react-native-maps'

export default function CustomMarker({apartment,onPress}) {
  return (
    <Marker 
    onPress={onPress}
    coordinate={{latitude: apartment.latitude, longitude: apartment.longitude}}
    title={apartment.title}
    >
      <View style={{backgroundColor: "white", padding: 5,paddingHorizontal: 10,borderWidth: 1,borderColor: "grey" ,borderRadius: 20}}>
      <Text style={{fontFamily: "InterBold"}}>$ {apartment.price}</Text>
      </View>
    </Marker> 
)};