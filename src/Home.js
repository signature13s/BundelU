import {Image, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = navigation => {
  return (
    <ScrollView>
      <View>
        <View className="flex-row justify-between flex h-16  px-5 bg-white">
          <View className="white flex flex-row items-center">
            <Text className="text-purple-600 text-4xl font-Bold">BU</Text>
            <Text className=" text-black text-4xl font-Bold">NDELI</Text>
          </View>
          <View className="flex justify-center items-center">
            <Image
              className="w-14 h-14 self-center"
              source={require('./../assets/image/Bundelkhand_University_Logo.png')}
            />
          </View>
        </View>

        <View className="bg-white">
          <View className="">
            <Text className="text-gray text-3xl font-bold mx-7 ">
              Notice/Informations
            </Text>
          </View>
          <View>
            <View classname="flex flex-auto rounded-md roun">
              <Text className="text-xl text-black bg-slate-200 mx-5 rounded-lg my-1">
                . Sessional of DataMining -- Shift2{' '}
              </Text>
              <Text className="text-xl text-black bg-slate-200  mx-5 rounded-lg my-1">
                . Sessional of DataMining -- Shift2{' '}
              </Text>
              <Text className="text-xl text-black bg-slate-200  mx-5 rounded-lg my-1">
                . Sessional of DataMining -- Shift2{' '}
              </Text>
              <Text className="text-xl text-black bg-slate-200  mx-5 rounded-lg my-1">
                . Sessional of DataMining -- Shift2{' '}
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-white">
          <View className="flex-2 h-30 my-8">
            <Text className="text-3xl ml-5 ">Upload PYQs & Notes</Text>
          </View>
          <View className="flex flex-row justify-between p-2 px-6 items-center">
            <View>
              <Image
                className="h-28 w-28"
                source={require('../assets/image/notice.png')}
              />
            </View>
            <View className="items-center ">
              <Text className="my-8 text-2xl font-bold">PYQs & Notes</Text>
              <TouchableOpacity className="py-1 w-44 rounded-xl bg-violet-500 justify-center flex flex-row">
                <Text className=" ">Click Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View className="flex-2 bg-white h-20">
          <Text className="text-4xl p-3 py-3 items-center">University Map</Text>
        </View>

        <Image className="h-56 w-full" source={require('../assets/image/map.png')} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
