import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {SIZES, COLORS, FONTS} from '../constants';

export default TextButon = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        ...customContainerStyle,
      }}
      onPress={onPress}>
      <Text style={{color: COLORS.textWhite, ...FONTS.h3, ...customLabelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
