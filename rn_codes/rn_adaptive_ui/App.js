import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Battery from './assets/images/battery.svg';
import Microchip from './assets/images/microchip.svg';
import Speedometer from './assets/images/speedometer.svg';
import Wheel from './assets/images/wheel.svg';

const PhoneStatusEltArray = [
  {
    name: 'Battery',
    status: '5h40mn',
    Icon: Battery,
  },
  {
    name: 'Performance mode',
    status: 'Optimised',
    Icon: Speedometer,
  },
  {
    name: 'Storage',
    status: '11.8 GB free',
    Icon: Wheel,
  },
  {
    name: 'memory',
    status: '1.9 GB free',
    Icon: Microchip,
  },
];

function PhoneStatusElt({ name, Icon, status }) {
  return (
    <View style={styles.phoneStatusEltContainer}>
      <View style={styles.statusEltImg}>
        <Icon width={24} height={24} fill="black" />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'grey',
          fontSize: 12,
          position: 'absolute',
          bottom: 0,
        }}
      >
        {status}
      </Text>
    </View>
  );
}

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  useEffect(() => {
    console.log(windowWidth);
  });
  return (
    <SafeAreaView
      style={{
        flexDirection: windowWidth < windowHeight ? 'column' : 'row',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View style={styles.subContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.percentContainer}>
            <Text style={{ fontSize: 50, color: 'lightblue' }}>99</Text>
            <Text style={{ fontSize: 15 }}>/100</Text>
          </View>
          <Text
            style={{
              color: 'lightblue',
              fontSize: 20,
              textTransform: 'uppercase',
            }}
          >
            Excellent!
          </Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{
            textAlign: 'center',
            paddingHorizontal: 25,
            marginBottom: 15,
            fontSize: 17,
          }}
        >
          Your phone's maintenance status is excellent. Tap below to improve it.
          This won't affect your personal data.
        </Text>
        <TouchableOpacity style={styles.buttonOptimize} activeOpacity={0.7}>
          <Text style={{ color: 'white', fontSize: 20 }}>OPTIMISE NOW</Text>
        </TouchableOpacity>
        <View style={styles.statusEltContainer}>
          {PhoneStatusEltArray.map((item) => (
            <PhoneStatusElt
              key={item.name}
              name={item.name}
              Icon={item.Icon}
              status={item.status}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonOptimize: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 40,
    marginVertical: 10,
  },
  phoneStatusEltContainer: {
    alignItems: 'center',
    width: 70,
    height: 100,
    marginHorizontal: 8,
  },
  statusEltImg: {
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 5,
  },
  statusEltContainer: {
    width: '100%',
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingHorizontal: 5,
  },
});
