import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderUser, RecomCard} from '../../components';
import {fetchBook, refreshBook} from '../../store/actions';
import {COLORS, FONTS, SIZES} from '../../themes';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const {books, isRefreshing, isLoading} = useSelector(
    state => state.bookReducer,
  );

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const onRefresh = () => {
    dispatch(refreshBook());
    dispatch(fetchBook());
  };

  function renderRecomendedBook() {
    return (
      <>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <View style={styles.bookSec}>
            <View style={styles.bookHeader}>
              <Text style={styles.title}>My Book</Text>

              <TouchableOpacity onPress={() => console.log('See More')}>
                <Text style={styles.seeMore}>see more</Text>
              </TouchableOpacity>
            </View>
            {/* Books */}
            <View style={{flex: 1, marginTop: SIZES.padding}}>
              <FlatList
                data={books}
                renderItem={({item, index}) => {
                  return (
                    <RecomCard
                      item={item}
                      index={index}
                      navigation={() =>
                        navigation.navigate('BookDetailScreen', {id: item.id})
                      }
                    />
                  );
                }}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        )}
      </>
    );
  }

  function renderPopulerHeader() {
    return <></>;
  }

  function renderPopulerBook() {
    return <></>;
  }

  return (
    <SafeAreaView style={styles.page}>
      {/* Header Section */}
      <View style={styles.headerUser}>
        <HeaderUser />
      </View>

      {/* Body Section */}
      <ScrollView
        style={styles.bodySec}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => onRefresh()}
          />
        }>
        {/* Recomended Book */}
        <View>{renderRecomendedBook()}</View>

        {/* Popouler Book */}
        <View style={styles.populerSec}>
          <View>{renderRecomendedBook()}</View>
          {/* <View>{renderPopulerHeader()}</View>
          <View>{renderPopulerBook()}</View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  headerUser: {height: 100},
  bodySec: {marginTop: SIZES.radius},
  bookSec: {
    flex: 1,
  },
  bookHeader: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {...FONTS.h2, color: COLORS.white},
  seeMore: {
    ...FONTS.body3,
    color: COLORS.lightGray,
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
  },
  populerSec: {marginTop: SIZES.padding},
});
