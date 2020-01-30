import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

export default class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      numText: ""
    };
  }

  _onButtonPressed(num) {

    var str = this.state.numText;

    if(str == "" && isNaN(num)) { return; }
    
    if(isNaN(num) && isNaN(str.charAt(str.length - 1))) { return; }

    this.setState({numText: str + num});
  }

  _onDelPressed() {
    var str = this.state.numText
    this.setState({numText: str.substring(0, str.length - 1)});
  }

  _onDelAllPressed() {
    var str = this.state.numText
    this.setState({numText: ""});
  }

  _onCalPressed() {
    var str = this.state.numText;

    if(str == "") { return; }

    var numArr = new Array() , operationArr = new Array();
    var i, num="";
    for(i=0; i<str.length; i++) {
      if(!isNaN(str[i]) || str[i] == ".") {
        num = num + str[i];
      } else {
        numArr.push( parseFloat(num) );
        num = "";
        operationArr.push(str[i]);
      }
    }
    numArr.push(num);
    //alert(numArr);
    //alert(operationArr);

    var temp_num;

    for(i=0; i<operationArr.length; i++) {
      if(operationArr[i] == "*") {
        temp_num = numArr[i] * numArr[i+1];
        numArr[i] = temp_num;
        numArr.splice(i+1, 1);
        operationArr.splice(i, 1);
      }
    }

    for(i=0; i<operationArr.length; i++) {
      if(operationArr[i] == "/") {
        temp_num = numArr[i] / numArr[i+1];
        numArr[i] = temp_num;
        numArr.splice(i+1, 1);
        operationArr.splice(i, 1);
      }
    }

    for(i=0; i<operationArr.length; i++) {
      if(operationArr[i] == "-") {
        temp_num = numArr[i] - numArr[i+1];
        numArr[i] = temp_num;
        numArr.splice(i+1, 1);
        operationArr.splice(i, 1);
      }
    }

    for(i=0; i<operationArr.length; i++) {
      if(operationArr[i] == "+") {
        temp_num = numArr[i] + numArr[i+1];
        numArr[i] = temp_num;
        numArr.splice(i+1, 1);
        operationArr.splice(i, 1);
      }
    }

    this.setState({numText: numArr[0].toString()});

  }

  render() {
    return (
      <View style={{flex:1}} >
        <View style={{flex:1, padding: 20}}>
          <Text
            style={{height: 50, 
            borderWidth: 2,
            fontSize:30,
            textAlign: "right"}}
          >
            {this.state.numText}
          </Text>
        </View>

        <View style={{flex: 5, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(7)}><Text style={styles.numText}>7</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(4)}><Text style={styles.numText}>4</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(1)}><Text style={styles.numText}>1</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(0)}><Text style={styles.numText}>0</Text></TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(8)}><Text style={styles.numText}>8</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(5)}><Text style={styles.numText}>5</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(2)}><Text style={styles.numText}>2</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed('.')}><Text style={styles.numText}>.</Text></TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(9)}><Text style={styles.numText}>9</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(6)}><Text style={styles.numText}>6</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed(3)}><Text style={styles.numText}>3</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onCalPressed()}><Text style={styles.numText}>=</Text></TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onDelPressed()} onLongPress={()=>this._onDelAllPressed()} ><Text style={styles.numText}>DEL</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed('/')}><Text style={styles.numText}>/</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed('*')}><Text style={styles.numText}>*</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed('-')}><Text style={styles.numText}>-</Text></TouchableOpacity>
              <TouchableOpacity style={ styles.conatiner } onPress={()=>this._onButtonPressed('+')}><Text style={styles.numText}>+</Text></TouchableOpacity>
            </View>
        </View>      
      </View> 
    ); 
    }
  }

  const styles = StyleSheet.create({
    conatiner: {
      flex: 1, 
      alignItems: 'center'
    },
    numText: {
      fontSize: 30
    }
  });