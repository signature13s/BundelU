import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './component/Header';
import firestore from '@react-native-firebase/firestore';
const Home = ({navigation}) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const unsuscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      Alert.alert('Alert ', 'Are you want to exit the App ?', [
        {
          text: 'Cancel',
          onPress: () => {
            return true;
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
    });
    return unsuscribe;
  }, [navigation]);

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
    <ScrollView className="bg-white flex-1 px-4">
      <View>
        <Header />
        <Text className="text-gray text-sm font-Bold my-2 ">
          Notices / Information
        </Text>

        <View classname="flex flex-auto rounded-md ">
          {documents &&
            documents.map(value => {
              return (
                <View
                  className="bg-sky-500 p-2 my-2 rounded-md"
                  key={value?.id}>
                  <Text className="font-Regular text-white text-xs">
                    {value?.title}
                  </Text>
                </View>
              );
            })}
        </View>

        <Text className="text-gray text-sm font-Bold my-2 ">PYQ & Notes</Text>
        <View className="bg-slate-100 rounded-md  px-5 flex flex-row items-center py-4 justify-between">
          <Image
            className="h-28 w-28"
            source={require('../assets/images/notice.png')}
          />

          <View className="flex flex-col space-y-4  items-center justify-center">
            <Text className="text-sm  text-center text-primary font-Bold">
              PYQs & Notes
            </Text>
            <TouchableOpacity className="bg-violet-500 px-4 py-1 rounded-sm">
              <Text
                className="text-xs font-Regular text-white "
                onPress={() => navigation.navigate('Notes')}>
                Click Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text className="text-sm  py-3 text-gray font-Bold ">
          University Map
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Viewmap');
          }}>
          <Image
            className="h-56 w-full rounded-md"
            source={require('../assets/images/map.png')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
