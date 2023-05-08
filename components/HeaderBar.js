import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, FONTS, icons} from '../constants';

export default HeaderBar = ({right}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: 'row',
        backgroundColor: COLORS.backgroundWhite,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        paddingVertical: SIZES.padding / 2,
        ...styles.shadow,
      }}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.white,
            }}
          />
          <Text
            style={{marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white}}>
            {' '}
            Back{' '}
          </Text>
        </TouchableOpacity>
      </View>

      {right && (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
