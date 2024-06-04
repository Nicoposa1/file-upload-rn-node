import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DocumentPicker from 'react-native-document-picker'

export const HomeScreen = () => {
  const [file, setFile] = React.useState([] as any[])

  const handleUploadFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]
      });
      console.log(res);
      setFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  }

  return (
    <View style={styles.container}>
      {
        file ? (
          <>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleUploadFile}>
              <Text style={styles.textButton}>Upload a file</Text>
            </TouchableOpacity>
            {file.map((f, index) => (
              <Text key={index}>{f.name}</Text>
            ))}
          </>
        ) : (
          <TouchableOpacity style={styles.buttonContainer} onPress={handleUploadFile}>
            <Text style={styles.textButton}>Upload a file</Text>
          </TouchableOpacity>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
})