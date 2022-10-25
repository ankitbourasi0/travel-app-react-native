import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CATEGORY_BG, COLORS} from '../themes/theme';

const ExpenseCard = ({expense}) => {
  return (
    <View
      style={{
        ...styles.cardWrapper,
        backgroundColor: CATEGORY_BG[expense.category],
      }}>
      <View>
        <Text style={styles.expenseTitle}>{expense.title}</Text>
        <Text style={styles.expenseCategory}>{expense.category}</Text>
      </View>
      <View>
        <Text style={styles.expenseAmount}>₹{expense.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 12,
    marginBottom: 12,
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  expenseCategory: {
    fontSize: 12,
    marginVertical: 4,
    color: COLORS.FADED_TEXT,
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
});
