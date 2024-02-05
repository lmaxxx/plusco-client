import {Stack} from "expo-router";
import {ApplicationProvider} from "@ui-kitten/components";
import * as eva from '@eva-design/eva'

export default () => {
  return (
    <ApplicationProvider theme={eva.light} {...eva}>
      <Stack>
        <Stack.Screen name={"index"}></Stack.Screen>
      </Stack>
    </ApplicationProvider>
  )
}
