import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const PdfViewer = ({navigation, route}) => {
  const {source} = route.params;
  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={{
          uri: source,
          cache: true,
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default PdfViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
