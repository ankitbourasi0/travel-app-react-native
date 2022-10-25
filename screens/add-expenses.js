import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/common/screenWrapper';
import AddButton from '../components/common/add-button';
import BackButton from '../components/common/back-button';
import {IMAGES} from '../assets/assets';
import {COLORS} from '../themes/theme';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/slice/trip';

const AddExpenses = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const selectedTrip = route.params;

  const dispatch = useDispatch()
  const handleExpensesAdd = () => {
    //we are created the data for dispatch 
    // for id we use date because it always calculate in miliseconds 
  //then very high probability that it will take be unique
  //title amount and category as same as state 
    const expense ={
      id: Date.now(),
      title,
      amount, 
      category
    }

    const data = {
      tripId: selectedTrip.id,
      expense
    }
    dispatch(addExpense(data))
    navigation.navigate('Trip Expense', selectedTrip);
  };

  const CATEGORIES = ['SHOPPING', 'Food', 'Travel', 'Entertainment', 'Others'];
  return (
    <ScreenWrapper>
      <View style={styles.addExpenseWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.BannerContainer}>
            <Image source={IMAGES.ADDEXPENSE} style={styles.banner} />
            <View style={styles.subHeadingContainer}>
              <Text style={styles.subHeading}>ADD NEW EXPENSE</Text>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.label}>For What?</Text>
              <TextInput
                value={title}
                onChangeText={e => setTitle(e)}
                style={styles.input}
              />
            </View>

            <View style={styles.formItem}>
              <Text style={styles.label}>How Much?</Text>
              <TextInput
                value={amount}
                onChangeText={e => setAmount(e)}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>Category</Text>
              <View style={styles.categoryOptions}>
                {CATEGORIES.map((item,id) => (
                  <TouchableOpacity
                   key={id}
                    style={{
                      ...styles.category,
                      backgroundColor:
                        category === item ? COLORS.DARK_ORANGE : COLORS.WHITE,
          
                    }}
                    onPress={() => setCategory(item)}>
                    <Text style={{...styles.categoryLabel,color: category === item ? COLORS.WHITE :COLORS.TEXT}}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
        <AddButton onPress={handleExpensesAdd} />
      </View>
    </ScreenWrapper>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  addExpenseWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  banner: {
    height: 220,
    width: '110%',
  },
  BannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    color: COLORS.TEXT,
  },
  subHeadingContainer: {
    position: 'absolute',
    bottom: -25,
    paddingVertical: 12,
    width: '70%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 18,
  },
  category:{
    paddingVertical:12,
    paddingHorizontal:24,
    marginRight:6,
    marginBottom:16,
    borderRadius:18,
  },
  categoryLabel:{
    fontSize:12,
    fontWeight:'600'
  },
  categoryOptions:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:12,
  },
  label:{
    fontSize:20,
    fontWeight:'600',
    color:COLORS.TEXT
  },
  form: {
    marginVertical: 24,
    
  },
  formItem: {
    marginVertical: 16,
    marginBottom:0,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 14,
    marginTop: 8,
    fontSize: 16,
  },
});
