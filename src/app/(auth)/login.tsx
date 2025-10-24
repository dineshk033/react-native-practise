import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextInput } from "react-native-gesture-handler";
import { router } from "expo-router";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    setLoginError("");
    setTimeout(() => {
      setLoading(false);
      if (data.email === "test@example.com" && data.password === "123456") {
        alert("Login Successful");
      } else {
        setLoginError("Invalid email or password");
      }
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-3xl font-bold mb-6 text-center">Login</Text>

        {/* Email */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <View className="mb-4">
              <TextInput
                className="border border-gray-300 rounded-lg p-3"
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
                accessible
              />
              {errors.email && (
                <Text className="text-red-500 mt-1">
                  {errors.email.message}
                </Text>
              )}
            </View>
          )}
        />

        {/* Password */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <View className="mb-4">
              <TextInput
                className="border border-gray-300 rounded-lg p-3"
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                accessible
              />
              {errors.password && (
                <Text className="text-red-500 mt-1">
                  {errors.password.message}
                </Text>
              )}
            </View>
          )}
        />

        {loginError !== "" && (
          <Text className="text-red-500 mb-2">{loginError}</Text>
        )}

        <Pressable
          className={`bg-blue-600 py-3 rounded-lg ${
            loading ? "opacity-50" : ""
          }`}
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        >
          <Text className="text-white font-semibold text-center">
            {loading ? "Logging in..." : "Login"}
          </Text>
        </Pressable>

        <Pressable
          className="mt-4"
          onPress={() => router.navigate("(auth)/register")}
        >
          <Text className="text-blue-600 text-center">
            Don't have an account? Sign up
          </Text>
        </Pressable>
        <Pressable
          className="mt-4"
          onPress={() => router.navigate("(auth)/register")}
        >
          <Text className="text-blue-600 text-center">
            Don't have an account? Sign up
          </Text>
        </Pressable>
        <Pressable
          className="mt-4"
          onPress={() => router.navigate("(auth)/register")}
        >
          <Text className="text-blue-600 text-center">
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
