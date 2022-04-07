/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../store/actions';
import {COLORS, FONTS, SIZES} from '../../../themes';
import {Button} from '../../atoms';
import Icon from 'react-native-vector-icons/Feather';

const HeaderUser = () => {
  const {profile} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  // Logout
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      {/* Greetings */}
      <View style={styles.secGreeting}>
        <View style={styles.greetingWrapper}>
          <Text style={styles.greetingText}>Good Morning</Text>
          <Text style={styles.textName}>{profile.name}</Text>
        </View>
      </View>

      <Button
        primary
        title="Logout"
        onPress={onLogout}
        icon={
          <Icon
            name="eye"
            size={24}
            style={{marginRight: 5}}
            color={COLORS.white}
          />
        }
        style={styles.pointBtn}
      />

      {/* Points */}
      {/* <TouchableOpacity
        style={styles.pointBtn}
        onPress={() => {
          console.log('Point');
        }}>
        <View style={styles.btnWrapper}>
          <View style={styles.circleIcon}>
            <Image
              source={icons.plus_icon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>

          <Text style={styles.textBtn}>3000 point</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default HeaderUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  secGreeting: {flex: 1},
  greetingWrapper: {marginRight: SIZES.padding},
  greetingText: {...FONTS.body4, color: COLORS.white},
  textName: {...FONTS.h3, color: COLORS.white},
  pointBtn: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingHorizontal: SIZES.radius,
    borderRadius: 20,
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textBtn: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.body3,
  },
});
