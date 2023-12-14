import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
type CurrencyBtnProps = PropsWithChildren<{
  name: string;
  value: number;
  flag: string;
}>;

export default function CurrencyBtn(props: CurrencyBtnProps): JSX.Element {
  return (
    <View style={styles.buttonDiv}>
      <Text style={styles.flag}> {props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonDiv: {
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    color:"#FFFFFF",
  },
  flag: {
    marginBottom:8,
    fontSize:24,
    color:"#FFFFFF"
  },
});
