import React from 'react';
import {View, Image, Text} from 'react-native';

import {COLORS, SIZES, FONTS} from '../constants';

export default CurrencyLabel = ({icon, currency, code}) => {
  return (
    <View style={{flexDirection: 'row', paddingBottom: SIZES.base}}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{width: 25, height: 25, marginTop: 5}}
      />

      <View style={{marginLeft: SIZES.base}}>
        <Text style={{...FONTS.h3, color: COLORS.white}}> {currency} </Text>

        <Text style={{color: COLORS.white, ...FONTS.body4}}> {code} </Text>
      </View>
    </View>
  );
};
