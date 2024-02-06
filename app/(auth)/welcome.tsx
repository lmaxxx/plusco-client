import {Image, StyleSheet, View} from "react-native";
import {Button, Layout} from "@ui-kitten/components";
import {Link} from "expo-router";

export default function WelcomePage() {
  return (
    <Layout style={styles.root}>
      <Image style={styles.logo} source={require("../../assets/images/logo.png")}></Image>
      <View style={styles.buttonWrapper}>
        <Link asChild style={{marginBottom: 16}} href="/signup">
          <Button size={"large"}>
            SIGN UP
          </Button>
        </Link>
        <Link asChild href="/login">
          <Button size={"large"}>
            LOG IN
          </Button>
        </Link>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-evenly",
    backgroundColor: '#065F46',
    padding: 24
  },
  logo: {
    height: 104,
    width: 104,
    alignSelf: "center"
  },
  buttonWrapper: {},
});
