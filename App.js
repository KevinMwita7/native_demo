/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { Appbar, Provider as PaperProvider } from 'react-native-paper';
 import { StyleSheet, View } from 'react-native';
 import { Headline, TextInput, Button, Snackbar } from 'react-native-paper';
 
const App = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => console.log('Pressed label')} />
        <Appbar.Content title="Upwork Demo" />
      </Appbar.Header>
      <Appbar style={styles.bottom}>
        <Appbar.Action icon="account-circle" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="book" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="content-copy" onPress={() => console.log('Pressed label')} />
      </Appbar>
      <View style={styles.container}>
        <Headline style={styles.headline}>Sign Up</Headline>
        <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        mode="outlined"
        />
        <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="outlined"
        />
        <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        mode="outlined"
        />
        <Button mode="contained" style={styles.btn} onPress={() => onToggleSnackBar()}>
          Sign up
        </Button>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        You are now signed up
      </Snackbar>
    </PaperProvider>
  )
};


 
export default App;
 
const styles = StyleSheet.create({
   bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "space-between"
  },
  container: {
    justifyContent: "center",
    padding: 10
  },
  headline: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15
  },
  btn: {
    marginTop: 25
  }
 });