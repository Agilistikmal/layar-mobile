import { Colors } from "@/constants/colors";
import { Images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  return (
    <SafeAreaView>
      <View className="px-8 h-full flex justify-center gap-8">
        <View>
          <View className="flex flex-row items-center gap-2">
            <Image source={Images.logoBgBrand} className="w-10 h-10" />
            <Text className="text-brand text-3xl font-bold ">Layar</Text>
          </View>
          <Text className="text-white text-xl font-medium">
            Buka Layar, Buka Cerita.
          </Text>
        </View>
        <View>
          <Text className="text-2xl text-white font-bold text-center">
            Daftar
          </Text>

          {/* Form */}
          <View className="mt-2 flex gap-2">
            <View>
              <Text className="text-white">Username</Text>
              <TextInput
                className="mt-1 text-white border-2 border-brand rounded-lg px-5 py-2"
                onChangeText={() => {}}
                keyboardType="default"
                placeholder="Masukkan username"
                placeholderTextColor={Colors.white}
              />
            </View>
            <View>
              <Text className="text-white">Nama Lengkap</Text>
              <TextInput
                className="mt-1 text-white border-2 border-brand rounded-lg px-5 py-2"
                onChangeText={() => {}}
                keyboardType="default"
                placeholder="Masukkan nama lengkap"
                placeholderTextColor={Colors.white}
              />
            </View>
            <View>
              <Text className="text-white">Password</Text>
              <TextInput
                className="mt-1 text-white border-2 border-brand rounded-lg px-5 py-2"
                onChangeText={() => {}}
                secureTextEntry={true}
                keyboardType="default"
                placeholder="Masukkan password"
                placeholderTextColor={Colors.white}
              />
            </View>
            <View className="flex flex-row items-center">
              <Text className="text-white text-sm">Sudah punya akun? </Text>
              <Link href={"/"} className="text-white/70 underline text-sm">
                Masuk disini.
              </Link>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            className="mt-5 bg-brand px-5 py-2 rounded-lg"
          >
            <Text className="text-white font-bold text-center">Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
