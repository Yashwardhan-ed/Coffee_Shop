import { Platform, StyleSheet, Appearance, View, Text, Image, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import coffee_icon from "../assets/images/coffee_icon.jpg"

export default function TabTwoScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView>
      <View>
        <Image 
        source={coffee_icon}
        style={styles.image}>
        </Image>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Coffee Shop</Text>

        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text>555 Coffee Lane</Text>{'\n'}
            <Text>Kansas City, KS  55555-1234</Text>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Phone:{'\n'}
            <Link href="tel:5555555555" style={styles.link}>555-555-5555</Link>{'\n'}
            or{' '}
            <Link href="sms:5555555555" style={styles.link}>Click Here to Text!</Link>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Hours:{'\n'}
            <Text>Open 6am to 4pm daily.</Text>{'\n'}
          </Text>
        </View>

      </View>
      </View>
    </SafeAreaView>
  );
}
function createStyles(theme, colorScheme){
  return StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    image: {
      width: '100%',
      maxWidth: 600,
    },
    container: {
      backgroundColor: theme.background,
      paddingTop: 0,
      flexGrow: 1
    },
    imgContainer: {
      backgroundColor: colorScheme === 'dark' ? '#353636' : '#D0D0D0',
      height: 250,
    },
    textContainer: {
      backgroundColor: theme.background,
      padding: 12,
    },
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
      marginBottom: 10,
    },
    textView: {
      marginBottom: 10,
    },
    text: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 24,
    },
    link: {
      textDecorationLine: 'underline',
    }
  });
}
