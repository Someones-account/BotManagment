import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Row, Table, Cell, TableWrapper } from "react-native-table-component";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModifyUser from "../Overlay";
import { Alert } from "react-native";

const cellButton = (toggler, userId) => {
  return(<TouchableOpacity onPress={() => toggler(userId)}>
    <View style={styles.button}>
      <Text style={{ marginHorizontal: 10, marginVertical: 5 }}>Manage</Text>
      <Text>{userId}</Text>
    </View>
  </TouchableOpacity>
  )
};

const AddUserButton = () => {
  return (
    <TouchableOpacity style={styles.addButton}>
      <Ionicons name="add-outline" size={30} />
      <Text>Add</Text>
    </TouchableOpacity>
  );
};

const Users = () => {
  const headers = ["Username", "ViberID", "Manage"];
  const requestURL =
    "https://npcfi5v8r2.execute-api.eu-west-2.amazonaws.com/prod/users";

  const [usersData, setUsersData] = useState();
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [activeUser, setActiveUser] = useState("")

  const toggleOverlay = (userId="") => {
    setOverlayVisible(!overlayVisible);
    setActiveUser(userId);
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(requestURL, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      setUsersData(await response.json());
    };
    getUsers();
  }, []);
  
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Ionicons name="person-outline" size={22} />
        <Text>Users Statistics</Text>
        <Ionicons name="person-outline" size={22} />
      </View>
      <View style={styles.content}>
        <ScrollView>
          <Table borderStyle={styles.table}>
            <Row
              data={headers}
              style={{ height: 50 }}
              textStyle={{ margin: 10 }}
            />
            {usersData ? (
              usersData.map((rowData, index) => (
                <TableWrapper key={index} style={{ flexDirection: "row" }}>
                  <Cell data={rowData.username} textStyle={{ margin: 10 }} />
                  <Cell data={rowData.viber_id} textStyle={{ margin: 10 }} />
                  <Cell data={cellButton(toggleOverlay, rowData.user_id)} />
                </TableWrapper>
              ))
            ) : (
              <></>
            )}
          </Table>
        </ScrollView>
      </View>
      <ModifyUser toggler={toggleOverlay} displayState={overlayVisible} user={activeUser} />
      <AddUserButton />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 40,
    padding: 15,
  },
  content: {
    height: "50%",
    borderWidth: 3,
  },
  table: {
    borderWidth: 2,
    borderColor: "#20B2AA",
  },
  header: {
    height: 50,
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 2,
  },
  button: {
    width: 75,
    height: 30,
    backgroundColor: "#78B7BB",
    borderRadius: 4,
    marginHorizontal: 20,
  },
  addButton: {
    width: 90,
    height: 40,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "#78B7BB",
    borderRadius: 5,
  },
});

{
  /* {usersData &&
        usersData.map((data, key) =>
          Object.entries(data).map(([k, v], idx) => (
            <Text key={key + idx}>
              {k}: {v}
            </Text>
          ))
        )} */
}

export default Users;
