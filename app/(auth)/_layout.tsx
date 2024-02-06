import {Stack} from "expo-router";
import colors from "../../constants/colors";

export default () => {
  return (
    <Stack>
      <Stack.Screen options={{headerShown: false}} name={"welcome"}/>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.primaryGreen,
          },
          headerTitle: "SIGN UP",
          headerTintColor: "#fff"
        }}
        name={"signup"}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.primaryGreen,
          },
          headerTitle: "LOGIN",
          headerTintColor: "#fff"
        }}
        name={"login"}
      />
    </Stack>
  )
}
