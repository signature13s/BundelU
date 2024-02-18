import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView className="bg-white flex-1 px-4">
      <View>
        <View className="flex-row justify-between flex h-16  bg-white items-center py-1">
          <View className="white flex flex-row items-center">
            <Text className="text-purple-600 text-xl font-Bold">BU</Text>
            <Text className=" text-black text-xl font-Bold">NDEL U</Text>
          </View>

          <TouchableOpacity
            classname="self-center"
            onPress={() => {
              navigation.navigate('Account');
            }}>
            <Image
              className="w-8 h-8 "
              source={require('../assets/images/bu_logo.png')}
            />
          </TouchableOpacity>
        </View>

        <Text className="text-gray text-sm font-Bold mb-2 ">PYQ & Notes</Text>

        <View classname="flex flex-auto rounded-md ">
          <Text className="text-black bg-slate-200 py-4 px-4 text-xs font-Regular rounded-lg my-1">
            Sessional of DataMining -- Shift2
          </Text>
          <Text className="text-black bg-slate-200 py-4 px-4 text-xs font-Regular  rounded-lg my-1">
            Sessional of DataMining -- Shift2
          </Text>
          <Text className="text-black bg-slate-200 py-4 px-4 text-xs font-Regular  rounded-lg my-1">
            Sessional of DataMining -- Shift2
          </Text>
          <Text className="text-black bg-slate-200 py-4 px-4 text-xs font-Regular  rounded-lg my-1">
            Sessional of DataMining -- Shift2
          </Text>
        </View>

        <Text className="text-gray text-sm font-Bold my-2 ">
          Notice/Informations
        </Text>
        <View className="bg-slate-100 rounded-md  px-5 flex flex-row items-center py-4 justify-between">
          <Image
            className="h-28 w-28"
            source={require('../assets/images/notice.png')}
          />

          <View className="flex flex-col space-y-4  items-center justify-center">
            <Text className="text-sm  text-center text-primary font-Bold">
              Upload PYQs & Notes
            </Text>
            <TouchableOpacity className="bg-violet-500 px-4 py-1 rounded-sm">
              <Text className="text-xs font-Regular text-white ">
                Click Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text className="text-sm  py-3 text-gray font-Bold ">
          University Map
        </Text>

        <Image
          className="h-56 w-full rounded-md"
          source={require('../assets/images/map.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
