import React, { useMemo, useState } from  'react';
import {View, Text} from 'react-native';


const showList =(items)=>{
  
 return(
   <View>
     {items.map(((item, index) =>{
       return <Text key={index}>{item}</Text>
     }))}
  </View>
 )
}
const App = () =>{
    //adding dummy data
  const [items, setItems] = useState( ['a','b','c','d','e','f','g','h','i','j','k','l']);
  const memoValues = useMemo(()=>
   showList(items),[items])
  return (
    <View >
        <View >
            <View >
                <Text>{memoValues}</Text>
            </View>
            
        </View>
    </View>
  )
}

export default App;