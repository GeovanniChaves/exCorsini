// importar a biblioteca geral do React
import React from 'react';
// importar os componentes utilizados
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ 
      flex: 1, 
      padding: 20, 
      backgroundColor: "white", 
      flexDirection: 'column',
      justifyContent: 'space-around' 
    }}>
      <View style={{ width: 70, height: 70, backgroundColor: 'green' }}>
      </View>
      
      <View style={{ width: 70, height: 70, backgroundColor: 'red' }}>
      </View>
      
      <View style={{ width: 70, height: 70, backgroundColor: 'black' }}>
      </View>
    </View>
  );
}

export default App;