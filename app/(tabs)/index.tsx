import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Flight Deck Quiz</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Airport Code:</ThemedText>
        <ThemedText style={{ fontSize: 48, textAlign: 'center' }}>ATL</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Answer:</ThemedText>
        {showAnswer ? (
          <ThemedText style={{ fontSize: 24, textAlign: 'center' }}>Hartsfield-Jackson Atlanta International</ThemedText>
        ) : (
          <ThemedText style={{ fontSize: 24, textAlign: 'center', color: 'gray' }}>Tap to reveal</ThemedText>
        )}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText
          style={{ fontSize: 18, textAlign: 'center', backgroundColor: '#007AFF', color: 'white', padding: 15, borderRadius: 8 }}
          onPress={() => setShowAnswer(true)}
        >
          Show Answer
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText
          style={{ fontSize: 18, textAlign: 'center', backgroundColor: '#34C759', color: 'white', padding: 15, borderRadius: 8 }}
          onPress={() => setShowAnswer(false)}
        >
          Next Card
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
