import { Colors } from "@/constants/colors";
import { Images } from "@/constants/images";
import Monicon from "@monicon/native";
import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPhoneScreen() {
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

        {/* Form */}
        <View>
          <Text className="text-2xl text-white font-bold text-center">
            Masuk
          </Text>

          {/* Form */}
          <View className="mt-2 flex gap-2">
            <View>
              <Text className="text-white text-center">Masukkan Nomor HP</Text>
              <Text className="text-white/70 text-xs text-center">
                Kode OTP akan dikirim melalui WhatsApp
              </Text>
              <TextInput
                className="mt-1 text-white border-2 border-brand rounded-lg px-5 py-2"
                onChangeText={() => {}}
                keyboardType="number-pad"
                placeholder="0813XXXXXXXX"
                textAlign="center"
                placeholderTextColor={Colors.white}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            className="mt-5 bg-brand px-5 py-2 rounded-lg"
          >
            <Text className="text-white font-bold text-center">Kirim OTP</Text>
          </TouchableOpacity>

          <Link
            href={"/"}
            className="mt-3 border-2 border-brand px-5 py-2 rounded-lg"
          >
            <View className="flex flex-row items-center justify-center gap-2 w-full">
              <Monicon name="majesticons:key" color={Colors.white} size={16} />
              <Text className="text-white font-bold">
                Masuk dengan password saja
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
