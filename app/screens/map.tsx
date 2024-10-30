import CustomButton from '@/components/CustomButton';
import NavigationArrow from '@/components/NavigationArrow';
import { icons, images } from '@/constants';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Path,Svg } from 'react-native-svg';

const Map = () => {
    const locationDeatils = {
        name:"NIE-Admin Block",
        location:"Manandvadi road, NIE",
        list_details:{
            distance:2100,spots_left:2,no_of_slots:20
        }
    }
    return (
        <View className="relative h-full bg-black">
            <Image className="relative z-0 h-full w-full" source={images.map_parkease} />
                {/*Top bar - list fo the parking lots */}
            <View className="absolute w-screen mt-12">
                <View className="flex items-center mx-4">
                    <View className="rounded-2xl w-full bg-black flex flex-row justify-between p-4">
                        <View className="bg-primary-700 rounded-full flex flex-row justify-between">
                            <View className="h-9 w-9 flex justify-center items-center bg-primary-300 rounded-full">
                               <Text className="text-xl text-black">6</Text>
                            </View>
                            <View className="px-2 flex justify-center">
                                <Text className="text-base text-white">Free parking lots nearby</Text>
                            </View>
                        </View>
                        <View 
                        className="flex flex-row justify-around bg-primary-500 px-2 items-center rounded-full"
                        
                        >
                        <Svg width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                            <Path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                            />
                        </Svg>
                            <Text className="text-base text-white px-2">List</Text>
                        </View>
                    </View>
                </View>
                {/* search icon */}
                <View className="flex relative">
                    <View className="absolute right-5 top-5 z-20 flex gap-4">
                        <View className="bg-[#bdc2c9] p-3 rounded-full">
                            <Svg height={24} width={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
                                <Path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </Svg>
                        </View>
                        <View className="bg-[#bdc2c9] p-3 rounded-full">
                            <Svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
                                <Path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </Svg>
                        </View>
                    </View>
                </View>
            </View>
            <View className="absolute bottom-0 w-screen">
                <View className="bg-primary-300 rounded-t-2xl">
                    <Text className="">
                        {locationDeatils.name}
                    </Text>
                    <Text>
                        {locationDeatils.location}
                    </Text>
                    <View>
                        {/* {locationDeatils.list_details.map((x)=>{

                        })} */}
                    </View>
                    <View className="mx-5 mb-8">
                        <CustomButton 
                        bgVariant="dark"
                        title="Navigate"
                        IconLeft={() => <NavigationArrow/>}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Map;