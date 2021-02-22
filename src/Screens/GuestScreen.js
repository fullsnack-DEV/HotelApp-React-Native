import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const GuestScreen = ({navigation}) => {
  const [adults, setadults] = useState(0);
  const [children, setchildren] = useState(0);
  const [infants, setinfants] = useState(0);

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        {/* row1 */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 16 or above</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* buttons */}
            <Pressable
              onPress={() => setadults(Math.max(0, adults - 1))}
              style={styles.btn}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 18}}>{adults}</Text>

            <Pressable onPress={() => setadults(adults + 1)} style={styles.btn}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* row2 */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* buttons */}
            <Pressable
              onPress={() => setchildren(Math.max(0, children - 1))}
              style={styles.btn}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 18}}>{children}</Text>

            <Pressable
              onPress={() => setchildren(children + 1)}
              style={styles.btn}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* row3 */}
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* buttons */}
            <Pressable
              onPress={() => setinfants(Math.max(0, infants - 1))}
              style={styles.btn}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 18}}>{infants}</Text>

            <Pressable
              onPress={() => setinfants(infants + 1)}
              style={styles.btn}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate('SearchScreen')}
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e4e4e4',
  },
  btn: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d4d4d4',
  },
});

export default GuestScreen;
