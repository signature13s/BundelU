import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Notice = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('notice')
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
    <ScrollView className="flex flex-1 bg-white px-4">
      {documents &&
        documents.map(value => {
          return (
            <View className="bg-slate-100 p-2 my-2 rounded-md">
              <Text className="font-Regular">{value?.title}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default Notice;

const styles = StyleSheet.create({});
