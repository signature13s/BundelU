import {StyleSheet, Text, TouchableOpacity, View,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-animatable';
import firestore from '@react-native-firebase/firestore';
import Header from './component/Header';

const Notes = ({navigation}) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('notes')
      .onSnapshot(querySnapshot => {
        const documentsArray = [];
        querySnapshot.forEach(documentSnapshot => {
          documentsArray.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setDocuments(documentsArray);
      });

    // Unsubscribe from snapshot listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <ScrollView className=" flex flex-1 bg-white px-4">
      <Header />
      {documents.map((value, index) => {
        return (
          <View
            className=" bg-slate-100 drop-shadow-xl rounded-lg flex-row justify-start  my-5   "
            key={value?.id}
            style={{marginBottom: index == documents.length - 1 ? 70 : 0}}>
            <Image
              source={require('../assets/images/notes.jpeg')}
              resizeMode="contain"
              className=" h-24 w-20 ml-2 rounded-md"
            />

            <View className="flex pl-5 ml-5 ">
              <Text className="my-3  text-black text-lg font-mono">
                {value?.title}
              </Text>
              <TouchableOpacity
                className="bg-primary  px-6 py-2 rounded-lg "
                onPress={() => {
                  navigation.navigate('PdfViewer', {
                    source: value?.url,
                  });
                }}>
                <Text className="text-white"> Click Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Notes;

const styles = StyleSheet.create({});
