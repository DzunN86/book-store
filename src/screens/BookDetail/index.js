/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BookDesc, BookInfo, BottomButton, Loading} from '../../components';
import {fetchDetailBook} from '../../store/actions';
import {REFRESH_BOOK} from '../../store/types';
import {COLORS, SIZES} from '../../themes';

export default function BookDetail({navigation, route}) {
  const {id} = route.params;

  const dispatch = useDispatch();

  const {detailBook, isRefreshing, isLoading} = useSelector(
    state => state.bookReducer,
  );
  useEffect(() => {
    dispatch(fetchDetailBook(id));
  }, [dispatch, id]);

  if (!detailBook) {
    return;
  }

  const onRefresh = () => {
    dispatch({type: REFRESH_BOOK});
    dispatch(fetchDetailBook(id));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => onRefresh()}
            />
          }>
          <View style={styles.container}>
            {/* Book Cover Section */}
            <View style={{flex: 4}}>
              <BookInfo
                title={detailBook.title}
                author={detailBook.author}
                coverImage={detailBook.cover_image}
                rating={detailBook.average_rating}
                publisher={detailBook.publisher}
                totalSale={detailBook.total_sale}
                navigation={() => navigation.goBack()}
              />
            </View>

            {/* Description */}
            <View style={{flex: 2}}>
              <BookDesc synopsis={detailBook.synopsis} />
            </View>

            {/* Buttons */}
            <View style={styles.btnBottom}>
              <BottomButton
                price={detailBook.price}
                bookTitle={detailBook.title}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, height: SIZES.height, backgroundColor: COLORS.black},
  btnBottom: {height: 70, marginBottom: 25},
});
