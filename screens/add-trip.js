import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import ScreenWrapper from '../components/common/screenWrapper';
import BackButton from '../components/common/back-button';
import {RANDOMTHUMBNAIL} from '../assets/assets';
import AddButton from '../components/common/add-button';
import { useDispatch } from 'react-redux';
import { addTrip } from '../redux/slice/trip';

const AddTrip = ({navigation}) => {
  //Header Banner start
  const [placeBanner, setPlaceBanner] = useState();

  useEffect(() => {
    setPlaceBanner(RANDOMTHUMBNAIL());
  }, []);
  //end

  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const dispatch = useDispatch()
  const handleAddTripe = ()=>{
    const tripData = {
      id: Date.now(),
      place,
      country,
      banner:placeBanner,
      expenses: [] // empty bcoz when we create the moment we dont expense 

    }
    dispatch(addTrip(tripData))
    navigation.navigate('Home')
    
  }
  return (
    <ScreenWrapper>
      <View style={styles.addTripWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.bannerContainer}>
            <Image source={placeBanner} style={styles.banner} />
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.subHeading}>What is your Destination?</Text>
              <TextInput
                value={place}
                onChangeText={e => setPlace(e)}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.subHeading}>Which Country ?</Text>
              <TextInput
                value={country}
                onChangeText={e => setCountry(e)}
                style={styles.input}
              />
            </View>
          </View>
        </View>
        <AddButton buttonText={"Add Trip"} onPress={handleAddTripe}/>
      </View>
    </ScreenWrapper>
  );
};

export default AddTrip;

const styles = StyleSheet.create({
  addTripWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop:12
  },

  banner: {
    width: '110%',
    height: 220,
    resizeMode: 'cover',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginVertical: 8,
  },
  formItem: {
    marginVertical: 6,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal:12,
    borderRadius: 14,
    marginTop: 8,
    fontSize: 16,
  },
  subHeading:{
    fontSize:18,
    fontWeight:'600'
  }
});
