import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import BackButton from '../components/common/back-button';
import ScreenWrapper from '../components/common/screenWrapper';
import ExpenseCard from '../trips/expense-card';
import EmptyExpenses from '../trips/empty-expenses';
import { useSelector } from 'react-redux';

// const MOCKDATA = [
//   {
//     id: 1,
//     title: 'Hotel Charge',
//     category: 'Others',
//     amount: 360,
//   },
//   {
//     id: 2,
//     title: 'Auto',
//     category: 'Travel',
//     amount: 40,
//   },
//   {
//     id: 3,
//     title: 'Bought Apple',
//     category: 'Food',
//     amount: 80,
//   },
//   {
//     id: 4,
//     title: 'Boating',
//     category: 'Travel',
//     amount: 240,
//   },
//   {
//     id: 5,
//     title: 'Train Ticket',
//     category: 'Travel',
//     amount: 220,
//   },
//   {
//     id: 6,
//     title: 'Movie',
//     category: 'Entertainment',
//     amount: 220,
//   },
// ];
const TripExpenses = ({navigation, route}) => {
  const selectedTrip = route.params;
  const expenseList = useSelector(state=> {
    const trips = state.trips.trips;
    const filteredExpense = trips.filter(t => t.id === selectedTrip.id);

    if(filteredExpense.length > 0){
        return filteredExpense[0].expenses;
    }
    return []
  })
  return (
    <ScreenWrapper>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={styles.bannerContainer}>
          <Image source={selectedTrip.banner} style={styles.banner} />
          <View style={styles.placeContainer}>
            <Text style={styles.place}>{selectedTrip.place}</Text>
          </View> 
        </View>
        <View style={styles.expenseHeading}>
          <Text style={styles.heading}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Add Expense', selectedTrip)}>
            <Text style={styles.buttonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatListContainer}>
        <FlatList
          data={expenseList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyExpenses/>}
          renderItem={({item}) => <ExpenseCard expense={item}/>
            // <View>
            //   <Text>{item.title}</Text>
            //   <Text>{item.category}</Text>
            //   <Text>{item.amount}</Text>
            // </View>
        }
        />
        </View>
       
      </View>
    </ScreenWrapper>
  );
};

export default TripExpenses;

const styles = StyleSheet.create({
  banner: {
    height: 220,
    width: '110%',
    resizeMode: 'cover',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  place: {
    textAlign: 'center',
    color: '#F56753',
    fontSize: 20,
    fontWeight: '700',
  },
  placeContainer: {
    backgroundColor: 'white',
    minWidth: '50%',
    paddingVertical: 12,
    borderRadius: 18,
    position: 'absolute',
    bottom: -20,
  },
  buttonText: {
    fontWeight: '700',
    color: '#F56753',
  },
  expenseHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
  },
  flatListContainer:{

  }

});
