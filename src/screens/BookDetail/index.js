/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BookDesc, BookInfo, BottomButton, Loading} from '../../components';
import {fetchDetailBook} from '../../store/actions';
import {COLORS} from '../../themes';

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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
            <BottomButton price={detailBook.price} />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.black},
  btnBottom: {height: 70, marginBottom: 25},
});
