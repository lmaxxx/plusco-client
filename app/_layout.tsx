import {router, Stack} from "expo-router";
import {ApplicationProvider} from "@ui-kitten/components";
import * as eva from '@eva-design/eva'
import {useEffect} from "react";

export default () => {
  const loggedIn = false

  useEffect(() => {
    if(!loggedIn) {
      router.replace('(auth)/welcome');
    }
  }, [])

  return (
    <ApplicationProvider theme={eva.light} {...eva}>
      <Stack>
        <Stack.Screen options={{headerShown: false}} name={"(auth)"}></Stack.Screen>
      </Stack>
    </ApplicationProvider>
  )
}
