import {Stack} from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen name={'children'}></Stack.Screen>
      <Stack.Screen name={'newChild'}></Stack.Screen>
    </Stack>
  )
}
