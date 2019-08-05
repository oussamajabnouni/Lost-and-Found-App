import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput
} from "react-native";
import { Avatar } from "react-native-elements";

import Icon from "react-native-vector-icons/Feather";

const Data = [
  {
    id: 0,
    createdDate: "01/01/2001",
    username: "Hassen Mlayeh",
    description: `اليوم وقت مع 5 متاع صباح مكان سوسة بتحديد سهلول مقابل جامع فاطمة زهراء تسرقة`,
    picture: "https://via.placeholder.com/150"
  },
  {
    id: 1,
    createdDate: "02/01/2001",
    username: "Hanen Hbh Hbh ",
    description: `Bellehi hedhouma 3 sorre9 sar9ouli Dari fi tri9 sokra km 5 bahdha gazerna `,
    picture: "https://via.placeholder.com/150"
  }
];

function PostItem({ item, index }) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.row}>
        <Avatar rounded />
        <View style={styles.topRight}>
          <Text style={styles.postUsername}>{item.username}</Text>
          <Text style={styles.postDate}>{item.createdDate}</Text>
        </View>
      </View>
      <Text style={styles.postDiscreption}>{item.description}</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: item.picture }}
      />
      <View style={styles.containerBottom}>
        <Icon
          name="arrow-up"
          size={24}
          color="#1C1D21"
          style={styles.iconVote}
        />
        <Icon
          name="arrow-down"
          size={24}
          color="#1C1D21"
          style={styles.iconVote}
        />
        <TextInput
          style={styles.inputComment}
          placeholder="Add a comment ..."
        />
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={Data} renderItem={PostItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADDE4"
  },
  postContainer: {
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 10
  },
  postUsername: {
    fontSize: 16,
    fontWeight: "bold"
  },
  postDate: {
    color: "#DADDE4",
    fontSize: 12
  },
  row: {
    flexDirection: "row"
  },
  topRight: {
    marginLeft: 5
  },
  postDiscreption: {
    margin: 5
  },
  iconVote: {
    backgroundColor: "#F1F2F6",
    borderRadius: 100,
    padding: 5,
    marginRight: 5
  },
  inputComment: {
    backgroundColor: "#F1F2F6",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "75%"
  },
  containerBottom: {
    marginTop: 10,
    flexDirection: "row"
  }
});
