import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-animatable';
import firestore from '@react-native-firebase/firestore';

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
    <View className=" flex-1">
      <View className="flex flex-row justify-between px-5 py-3 items-center bg-slate-200 ">
        <Text className="text-primary text-2xl text-left font-Bold ">
          BU<Text className="text-black">NDEL U</Text>
        </Text>

        {/* <Text className=" text-center font-semibold" onPress={()=>{
            navigation.navigate('Addn')
        }}>Add Notes</Text> */}
      </View>

      {documents.map(value => {
        console.log(value)
        return (
          <View className=" bg-white drop-shadow-xl rounded-lg flex-row justify-start mx-5 my-5   ">
            <Image
              source={require('../assets/images/notes.jpeg')}
              resizeMode="contain"
              className=" h-24 w-24 ml-2"
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
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
