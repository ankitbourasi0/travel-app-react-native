import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/screenWrapper';
import {IMAGES, RANDOMTHUMBNAIL} from '../assets/assets';
import {COLORS} from '../themes/theme';
import EmptyList from '../components/home/empty-list';
import { useSelector } from 'react-redux';

// const MOCKDATA = [
//   {id: 1, banner: RANDOMTHUMBNAIL(), place: 'GOA', COUNTRY: 'INDIA'},
//   {id: 2, banner: RANDOMTHUMBNAIL(), place: 'GOA', COUNTRY: 'INDIA'},
//   {id: 3, banner: RANDOMTHUMBNAIL(), place: 'GOA', COUNTRY: 'INDIA'},
//   {id: 4, banner: RANDOMTHUMBNAIL(), place: 'GOA', COUNTRY: 'INDIA'},
//   {id: 5, banner: RANDOMTHUMBNAIL(), place: 'GOA', COUNTRY: 'INDIA'},
//   {id: 6, banner: RANDOMTHUMBNAIL(), place: 'GOA', COUNTRY: 'INDIA'},
// ];


const Home = ({navigation}) => {

  const tripList = useSelector(state => state.trips.trips)
  return (
    <ScreenWrapper>
      <View>
        <View style={styles.Header}>
          <Text style={styles.headerText}>Tripivon</Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={IMAGES.TRIPAPPBANNER}
            style={styles.bannerImage}></Image>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('Add Trip')}>
            <Text style={styles.buttonText}>Add Trip</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subHeading}>Recent Trips</Text>
        <View style={styles.listWrapper}>
          <FlatList
            data={tripList}
            keyExtractor={item => item.id}
            columnWrapperStyle={styles.cardStyle}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListEmptyComponent={<EmptyList/>}
            renderItem={({item}) => (
              <TouchableOpacity onPress={()=> navigation.navigate('Trip Expenses',item)}>
                <View style={styles.tripCard}>
                  <Image style={styles.tripBanner} source={item.banner} />
                  <Text style={styles.place}>{item.place}</Text>
                  <Text style={styles.country}>{item.COUNTRY}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  addButton: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 18,
    backgroundColor: 'purple',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '125%',
    height: 260,
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  country: {
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 6,
  },
  cardStyle: {
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 18,
  },
  listWrapper: {
    marginBottom: 120,
    height: 420,
  },
  place: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  tripBanner: {
    height: 130,
    width: 130,
  },

  tripCard: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 8,
    marginBottom: 12,
  },
});
