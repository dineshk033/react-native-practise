import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const signupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().optional(),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function SignupScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Signup Successful");
      navigation.navigate("Login");
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
        <Text className="text-3xl font-bold mb-6 text-center">Sign Up</Text>

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

        {/* Username */}
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <View className="mb-4">
              <TextInput
                className="border border-gray-300 rounded-lg p-3"
                placeholder="Username (optional)"
                value={value}
                onChangeText={onChange}
                accessible
              />
              {errors.username && (
                <Text className="text-red-500 mt-1">
                  {errors.username.message}
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

        {/* Confirm Password */}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <View className="mb-4">
              <TextInput
                className="border border-gray-300 rounded-lg p-3"
                placeholder="Confirm Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                accessible
              />
              {errors.confirmPassword && (
                <Text className="text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </Text>
              )}
            </View>
          )}
        />

        <Pressable
          className={`bg-green-600 py-3 rounded-lg ${
            loading ? "opacity-50" : ""
          }`}
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        >
          <Text className="text-white font-semibold text-center">
            {loading ? "Signing up..." : "Sign Up"}
          </Text>
        </Pressable>

        <Pressable
          className="mt-4"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-green-600 text-center">
            Already have an account? Login
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
