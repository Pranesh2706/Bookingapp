import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const TileBackground = ({ imageSource, style }) => {
  const { width, height } = Dimensions.get('window');
  const tileSize = 100; // Size of each tile

  // Calculate the number of tiles needed
  const horizontalTiles = Math.ceil(width / tileSize);
  const verticalTiles = Math.ceil(height / tileSize);

  return (
    <View style={[styles.tileContainer, style]}>
      {Array.from({ length: horizontalTiles * verticalTiles }).map((_, index) => (
        <Image
          key={index}
          source={imageSource}
          style={styles.tileImage}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
  tileImage: {
    width: 100, // Width of each tile image
    height: 100, // Height of each tile image
  },
});

export default TileBackground;
