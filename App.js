import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
          <View style={styles.container}>
              {/*  borderWidth를 1로 지정 */}
              <Example style={{borderWidth: 1}}>
                  <Text>borderWidth: 1</Text>
              </Example>
                  {/*  borderWidth를 3으로 늘리고 왼쪽의 테두리를 없애고 borderLeftWidth를 0으로 지정 */}
              <Example style={{borderWidth: 3, borderLeftWidth: 0}}>
                  <Text>borderWidth: 3, borderLeftWidth: 0</Text>
              </Example>
              {/* borderWidth를 3으로 지정하고 왼쪽 테두리를 다시 만들고 테두리의 색상을 빨강 색으로 지정*/}
              <Example style={{borderWidth: 3, borderLeftColor: 'red'}}>
                  <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
              </Example>
              
              {/* 왼쪽 테두리만 지정하고 borderLeftWidth를 3으로 설정 */}
              <Example style={{borderLeftWidth: 3}}>
                  <Text>borderLeftWidth: 3</Text>
              </Example>
              
              {/* -  borderStyle을 기본 solid에서 dashed로 변경*/}
              <Example style={{borderWidth: 1, borderStyle: 'dashed'}}>
                  <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
              </Example>
          </View>
        );
    }
}

/* 재사용할 수 있는 Example 컴포넌트. 기본 스타일 속성을 전달된 스타일 속성으로 쉽게 오버라이드할 수 있음  */
const Example = (props) => (
  <View style={[styles.example,props.style]}>
      {props.children}
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    example: {
        marginBottom: 15
    }
});
