/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderUser, PopularCard, RecomCard} from '../../components';
import {fetchBook, fetchBookPop} from '../../store/actions';
import {REFRESH_BOOK} from '../../store/types';
import {COLORS, FONTS, images, SIZES} from '../../themes';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const {books, isRefreshing, isLoading, booksPop} = useSelector(
    state => state.bookReducer,
  );

  useEffect(() => {
    dispatch(fetchBook());
    dispatch(fetchBookPop());
  }, [dispatch]);

  const onRefresh = () => {
    dispatch({type: REFRESH_BOOK});
    dispatch(fetchBook());
    dispatch(fetchBookPop());
  };

  function renderWentWrong() {
    return (
      <View style={styles.WentWrong}>
        <Image source={images.WentWrong} />
        <Text style={styles.titleWrong}>Something went wrong</Text>
        <Text style={styles.SubtitleWrong}>
          Try to reload the page or check your internet connection
        </Text>
      </View>
    );
  }

  function renderRecomendedBook() {
    return (
      <>
        <View style={styles.bookSec}>
          <View style={styles.bookHeader}>
            <Text style={styles.title}>Recommended</Text>

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
      </>
    );
  }

  function renderPopulerBook() {
    return (
      <>
        <View style={styles.bookSec}>
          <View style={styles.bookHeader}>
            <Text style={styles.title}>Popular Book</Text>

            <TouchableOpacity onPress={() => console.log('See More')}>
              <Text style={styles.seeMore}>see more</Text>
            </TouchableOpacity>
          </View>
          {/* Books */}
          <View style={styles.listPopuler}>
            {booksPop.map((item, index) => {
              return (
                <PopularCard
                  item={item}
                  key={index}
                  index={index}
                  navigation={() =>
                    navigation.navigate('BookDetailScreen', {id: item.id})
                  }
                />
              );
            })}
          </View>
        </View>
      </>
    );
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
        {books ? (
          <>
            {isLoading ? (
              <ActivityIndicator size="large" color={COLORS.primary} />
            ) : (
              <>
                <View>{renderRecomendedBook()}</View>

                <View style={styles.populerSec}>
                  <View>{renderPopulerBook()}</View>
                </View>
              </>
            )}
          </>
        ) : (
          renderWentWrong()
        )}
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
    color: COLORS.lightGray3,
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
  },
  populerSec: {marginTop: SIZES.padding},
  WentWrong: {
    height: SIZES.height / 2,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrong: {
    ...FONTS.h2,
    color: COLORS.white,
    marginTop: 20,
    textAlign: 'center',
  },
  SubtitleWrong: {
    ...FONTS.body3,
    color: COLORS.lightGray3,
    marginTop: 20,
    textAlign: 'center',
  },
  listPopuler: {
    flex: 1,
    marginTop: SIZES.padding,
    paddingLeft: SIZES.padding,
  },
});
