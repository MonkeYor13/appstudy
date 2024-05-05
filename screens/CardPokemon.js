import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import PokemonCard from '../components/PokemonCard'

export default function CardPokemon() {

    const charmanderData={
        name: 'Charmander',
        image: require('../assets/charmander.png'),
        type: 'Fire',
        hp: 39,
        moves: ['scratch', 'ember', 'growl', 'leer'],
        weaknesses: ['water', 'rock']
    }

  return (
    <View style={styles.container}>
     <PokemonCard {...charmanderData} />
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#d2d2d2',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    }
})