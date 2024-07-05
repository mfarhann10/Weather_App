import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const WeatherInfo = ({ weatherData }) => {
    const { location, main, weather, visibility, wind } = weatherData;
    const { temp } = main;
    const weatherDescription = weather[0].description;
    const weatherIcon = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

    return (
        <View style={tw`p-5 bg-blue-100 rounded-lg shadow-md`}>
        <Text style={tw`text-center text-xl font-bold text-blue-800`}>
            The weather of {location}
        </Text>
        <Text style={tw`text-center text-5xl font-extrabold text-blue-900 mt-5`}>
            {temp} °C
        </Text>
        <View style={tw`flex-row justify-center items-center mt-5`}>
            <Image
            source={{ uri: weatherIcon }}
            style={tw`w-16 h-16`}
            />
            <Text style={tw`ml-3 text-2xl font-bold text-gray-700`}>
            {weather[0].main}
            </Text>
        </View>
        <Text style={tw`text-center text-lg text-gray-600 mt-3`}>
            {weatherDescription}
        </Text>
        <View style={tw`flex-row justify-between mt-5`}>
            <Text style={tw`text-lg font-bold text-gray-700`}>Visibility:</Text>
            <Text style={tw`text-lg text-gray-600`}>{visibility} km</Text>
        </View>
        <View style={tw`flex-row justify-between mt-3`}>
            <Text style={tw`text-lg font-bold text-gray-700`}>Wind Speed:</Text>
            <Text style={tw`text-lg text-gray-600`}>{wind.speed} m/s</Text>
        </View>
        </View>
    );
};

export default WeatherInfo;
