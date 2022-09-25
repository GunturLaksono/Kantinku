import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import { dummyProfile } from '../data'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../utils'
import { Inputan, Tombol } from '../components'

export default class EditProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: dummyProfile
    }
  }

  render() {
    const { profile } = this.state
    return (
      <View style={styles.pages}>
        <View>
          <Inputan label={"Nama"} value={profile.nama} />
          <Inputan label={"Email"} value={profile.email} />
          <Inputan label={"No. Handphone"} value={profile.nomerHP} />

          <View style={styles.InputFoto}>
            <Text style={styles.label}>
              Foto Profile
            </Text>
            <View style={styles.wrapperUpload}>
              <Image source={profile.avatar} style={styles.foto} />

              <View style={styles.tombolChangePhoto}>
                <Tombol title="Change Photo" type="text" padding={7} />
              </View>
            </View>
          </View>
        </View>
          <View style={styles.submit}>
            <Tombol title="Submit" type="textIcon" icon="submit" padding={responsiveHeight(15)} fontSize={18} />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    marginTop: 10,
    justifyContent: 'space-between'
  },

  InputFoto: {
    marginTop: 20
  },

  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular
  },

  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40
  },

  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },

  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1
  },
  submit: {
    marginVertical: 30
  }
})