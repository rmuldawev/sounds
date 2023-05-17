import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import data from '../../screens/CatalogScreen/data';

interface CategoryProps {
  albumImage?: any;
  CategoryName?: string;
}

const Category: FC<CategoryProps> = ({albumImage, CategoryName}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.tiger} source={albumImage} />
      <Text style={styles.text}>{CategoryName}</Text>
    </View>
  );
};

export default Category;
