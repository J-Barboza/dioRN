import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Text, Pressable, Linking} from 'react-native';

const colorGithub = '#0D1117';
const statusBarBg = '#161B22';
const colorBorder = '#30363d';
const colorNickName = '#8b949e';
const colorButton = '#21262d';
const squareImage = 180;

const imageGithub = 'https://avatars.githubusercontent.com/u/90610113?v=4';
const perfilGithub = 'https://github.com/J-Barboza';

const App = () => {
  const handlePressGoToGithub = async () => {
    //console.log('entrou');
    const res = await Linking.canOpenURL(perfilGithub);
    if (res) {
      await Linking.openURL(perfilGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={statusBarBg} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto Francisco perfil Github"
          style={style.profileImg}
          source={{uri: imageGithub}}
        />
        <Text
          accessibilityLabel="Nome: Jose F. Barboza"
          style={[style.defaultText, style.name]}>
          Jose F. Barboza
        </Text>
        <Text
          accessibilityLabel="Nickname: J-Barboza"
          style={[style.defaultText, style.nickName]}>
          J-Barboza
        </Text>
        <Text
          accessibilityLabel="Description: Support analyst and software developer, expert in logistics for automotive and retail industry."
          style={[style.defaultText, style.description]}>
          Support analyst and software developer, expert in logistics for
          automotive and retail industry.
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View>
            <Text style={[style.button, style.buttonText]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    // Columns - se quiser linha precisa forcar flexDirection = row
    backgroundColor: colorGithub,
    flex: 1,
    // justifyContent: 'center',
    // flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    padding: 10,
  },
  profileImg: {
    height: squareImage,
    width: squareImage,
    borderRadius: squareImage / 2,
    borderColor: colorBorder,
    borderWidth: 2,
  },
  defaultText: {
    color: 'white',
    marginLeft: 5,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  nickName: {
    fontSize: 18,
    color: colorNickName,
    justifyContent: 'flex-start',
  },
  description: {
    fontSize: 14,
    maxWidth: 200,
    maxHeight: 80,
  },
  button: {
    backgroundColor: colorButton,
    borderRadius: 7,
    padding: 10,
    borderColor: colorBorder,
    marginTop: 10,
    maxHeight: 60,
    maxWidth: 115,
  },
});
