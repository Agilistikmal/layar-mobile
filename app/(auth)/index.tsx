import { Colors } from "@/constants/colors";
import { Images } from "@/constants/images";
import { APIError } from "@/lib/model/error";
import { authService } from "@/lib/service/auth_service";
import Monicon from "@monicon/native";
import { Link } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [loading, setLoading] = useState<boolean>();
  const [errors, setErrors] = useState<string>();

  async function handleLogin(e: GestureResponderEvent) {
    e.preventDefault();

    setLoading(true);
    setErrors(undefined);

    if (username && password) {
      try {
        const res = await authService.login({
          username,
          password,
        });
      } catch (err) {
        if (err instanceof APIError) {
          setErrors(err.message);
        } else {
          setErrors("Terjadi kesalahan");
          console.log(err);
        }
      }
    } else {
      setErrors("Username atau password kosong");
    }

    setLoading(false);
  }

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
          {/* Form */}
          <View className="mt-2 flex gap-2">
            <View>
              <Text className="text-white">Username</Text>
              <TextInput
                className="mt-1 text-white border-2 border-brand rounded-lg px-5 py-2"
                onChangeText={(value) => setUsername(value)}
                keyboardType="default"
                placeholder="Masukkan username"
                placeholderTextColor={Colors.white}
              />
            </View>
            <View>
              <Text className="text-white">Password</Text>
              <TextInput
                className="mt-1 text-white border-2 border-brand rounded-lg px-5 py-2"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                keyboardType="default"
                placeholder="Masukkan password"
                placeholderTextColor={Colors.white}
              />
            </View>
          </View>

          <View className="flex flex-row items-center mt-2">
            <Text className="text-white text-sm">Belum punya akun? </Text>
            <Link
              href={"/register"}
              className="text-white/70 underline text-sm"
            >
              Daftar disini.
            </Link>
          </View>

          <View className="mt-5 flex gap-5">
            {errors && (
              <View className="px-5 py-2 border-l-4 border-brand bg-brand/10">
                <Text className="text-red-300">{errors}</Text>
              </View>
            )}
            <TouchableOpacity
              disabled={!(username && password) || loading}
              onPress={(e) => handleLogin(e)}
              className="bg-brand px-5 py-2 rounded-lg disabled:bg-brand/50"
            >
              {loading ? (
                <View className="flex flex-row gap-2 justify-center items-center">
                  <ActivityIndicator color={Colors.white} />
                  <Text className="text-white font-bold text-center">
                    Loading...
                  </Text>
                </View>
              ) : (
                <Text className="text-white font-bold text-center">Masuk</Text>
              )}
            </TouchableOpacity>
          </View>

          <Link
            href={"/phone"}
            className="mt-3 border-2 border-brand px-5 py-2 rounded-lg"
          >
            <View className="flex flex-row items-center justify-center gap-2 w-full">
              <Monicon
                name="majesticons:iphone-x-apps"
                color={Colors.white}
                size={16}
              />
              <Text className="text-white">Lanjutkan dengan nomor HP</Text>
            </View>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
