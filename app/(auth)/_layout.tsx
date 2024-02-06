import {Stack} from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen options={{headerShown: false}} name={"welcome"}/>
      <Stack.Screen name={"signup"}/>
      <Stack.Screen name={"login"}/>
    </Stack>
  )
}
