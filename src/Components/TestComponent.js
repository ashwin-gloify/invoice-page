// Implementing Axios and RESTfUl APIs
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
const TestComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const axiosJsonCall = async () => {
      setLoading(true);
      await axios
        .get('http://localhost:3000/Posts')
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.debug(err));
    };

    axiosJsonCall();

    return () => {
      setLoading(false);
    };
  }, [data]);

  // PUT request
  // const handlePost = () => {
  //   axios({
  //     method: 'put',
  //     url: 'http://localhost:3000/Posts/1',
  //     data: {
  //       id: 1,
  //       title: 'testing put req',
  //       body: 'bar',
  //       userId: 1,
  //     },
  //   })
  // };

  //POST Request
  // const handlePost = () => {
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:3000/Posts/',
  //     data: {
  //       id: 201,
  //       title: 'testing put request 201',
  //       body: 'bar',
  //       userId: 1,
  //     },
  //   });
  // };

  //Delete Request
  const handlePost = () => {
    axios({
      method: 'delete',
      url: 'http://localhost:3000/Posts/201',
    });
  };

  return (
    <ScrollView>
      <View>
        {data.map((item) => {
          return (
            <TouchableOpacity onPress={() => handlePost()} key={item.id}>
              <Text style={Styles.txt}>
                {item.title}, {item.id}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  txt: {
    color: '#000',
  },
});
export default TestComponent;
