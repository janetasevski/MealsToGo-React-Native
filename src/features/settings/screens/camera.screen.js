import React, { useState, useEffect, useRef, useContext } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user?.user?.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          cameraRef.current = ref;
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Ionicons name="camera-reverse-outline" size={70} color="#C6DAF7" />
          </TouchableOpacity>
        </View>
        <View style={styles.takePicContainer}>
          <TouchableOpacity onPress={snap}>
            <Ionicons name="camera" size={70} color="#2182BD" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 35,
  },
  takePicContainer: {
    position: "absolute",
    bottom: 20,
    right: 35,
  },
  button: {},
  text: {},
});
