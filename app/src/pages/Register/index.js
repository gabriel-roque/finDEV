import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { registerDev } from '../../services/actions';

export default function Register() {
  const [username, setUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [currentRegion, setCurrentRegion] = useState({
    latitude: '',
    longitude: '',
  });

  async function loadInitialPosition() {
    const { granted } = await requestPermissionsAsync();

    if (granted) {
      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      });

      const { latitude, longitude } = coords;

      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      });
    }
  }

  useEffect(() => {
    loadInitialPosition();
  }, []);

  const submitForm = () => {
    const data = {
      github_username: username,
      techs,
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
    };
    registerDev(data);
  };

  return (
    <View style={styles.view}>
      <View style={styles.card}>
        <View>
          <Text style={styles.label}>Github User</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            autoCapitalize={'none'}
          />
          <Text style={styles.label}>Techs</Text>
          <TextInput style={styles.input} onChangeText={setTechs} />

          <View style={styles.boxLocation}>
            <Text style={styles.textDark}>
              Latitude: {currentRegion.latitude}
            </Text>
            <Text style={styles.textDark}>
              Longitude: {currentRegion.longitude}
            </Text>
          </View>
          <Button
            title="Get location"
            color="#7D40E7"
            onPress={() => loadInitialPosition()}
          />

          <View style={{ marginTop: 80, alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => submitForm()}
            >
              <Text style={styles.textButton}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
