import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Button, Pressable, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react'
const modelo = require('../assets/model5.jpg')
const back = require ('../assets/model2.jpg')

export default function ComponentsScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <ScrollView>

      <ImageBackground source={back} style={{flex: 1}}>
      <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center', textTransform: 'uppercase'}}>---texto---</Text>
      <Text style={{marginBottom: 20}}>Esto es un Text</Text>
      
      <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center', textTransform: 'uppercase'}}>----Imagenes y backgroung----</Text>
      <Image source={modelo} style={{width: 200, height: 300, resizeMode:"cover"}} />
      <Image source={{uri:'https://picsum.photos/id/237/200'}} style={styles.stretch} />

      
      <Text>
        Non consectetur veniam officia cupidatat fugiat deserunt consectetur in eiusmod cillum mollit ut ut ullamco. Nisi excepteur sunt sit ipsum reprehenderit do sunt mollit. Veniam ex deserunt non aute laborum enim. Mollit laboris irure qui proident et voluptate culpa dolore mollit.

Nulla ut ipsum cupidatat duis Lorem eu sunt sunt occaecat ullamco irure. Est consectetur proident elit mollit est irure nisi minim dolore sint amet laborum labore irure. Incididunt dolor anim enim tempor reprehenderit reprehenderit. Ut eiusmod reprehenderit aliqua tempor deserunt labore qui laborum laborum. Aute veniam eu enim anim laborum consequat incididunt amet cupidatat. Non qui nostrud ad incididunt ut proident. Cupidatat dolor officia est incididunt commodo culpa amet est veniam.

Eu eu eiusmod exercitation et veniam qui ut ut sint enim occaecat ipsum. Velit ipsum minim mollit sint exercitation ex officia cillum quis est ipsum. Non ad minim elit fugiat fugiat eu. Laborum duis exercitation nulla pariatur deserunt quis. Fugiat tempor laborum do irure ut enim ut non aliquip amet consectetur ullamco est. Deserunt anim consequat aliquip excepteur laborum incididunt irure fugiat non minim Lorem laboris irure occaecat. Voluptate id commodo elit sit.

Sunt labore incididunt officia et consectetur aliqua exercitation officia duis eiusmod velit quis. Sit excepteur magna laborum sint laboris eu. Ea sint ex dolor amet proident irure elit laboris. Nulla eiusmod et mollit magna.

Sint commodo elit mollit velit do quis veniam fugiat. Consequat officia culpa sunt aliquip consectetur consequat deserunt nulla anim aute cillum eu. Eiusmod nostrud commodo nisi labore amet ut dolor Lorem.

Consectetur cupidatat incididunt enim dolore minim esse commodo duis. Dolor culpa consectetur ullamco dolore nostrud. Pariatur ut exercitation voluptate anim dolore nostrud tempor reprehenderit esse est occaecat nostrud labore.

Magna magna in esse ut tempor officia nulla ipsum elit ullamco deserunt sit aliqua. Tempor nostrud voluptate laborum ipsum esse amet in adipisicing irure labore officia duis id. Enim aliqua mollit deserunt sint in cillum ex. Amet tempor minim sunt enim minim qui anim esse quis incididunt sint. Do anim anim do mollit et esse. Enim magna officia sint eu esse adipisicing velit.

Magna laborum proident do ea culpa exercitation consectetur id magna laborum aliqua adipisicing dolor. Dolor cupidatat nulla consequat culpa ullamco quis adipisicing consequat quis eiusmod pariatur qui. Nisi incididunt eiusmod ut eu deserunt ex aliquip dolor Lorem voluptate eu ex ex. Elit labore fugiat ullamco dolore proident culpa.

Proident id cillum ea magna. Ad quis et occaecat eu. Nulla eu elit Lorem eiusmod est minim dolore ex voluptate tempor aute adipisicing excepteur ullamco. Culpa incididunt irure eu fugiat fugiat fugiat deserunt veniam velit sint.

Ipsum enim ex consequat proident ad mollit et. Nostrud mollit dolore commodo commodo consectetur quis cupidatat mollit culpa. Tempor minim consectetur eiusmod non commodo exercitation velit sunt duis fugiat nulla. Irure amet ipsum magna duis veniam. Ad elit velit culpa voluptate. Deserunt cupidatat eiusmod nisi excepteur do labore non occaecat velit.
      </Text>

      <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center', textTransform: 'uppercase',  marginTop: 20}}>----Botones----</Text>
      <Button title='Press' onPress={()=> console.log('boton presionado')} color='midnightblue' />

      <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center', textTransform: 'uppercase',  marginTop: 20}}>----Pressable----</Text>
      <Pressable onPress={()=> console.log('Imagen Presionada')}>
      <Image source={{uri:'https://picsum.photos/id/237/200'}} style={{width: 100, height: 100}} />
      </Pressable>
      <Pressable onLongPress={()=> console.log('Texto Presionada')}>
      <Text>Duis proident commodo incididunt ut minim nisi quis anim quis cupidatat officia commodo qui.</Text>
      </Pressable>

      <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center', textTransform: 'uppercase',  marginTop: 20}}>----Modal----</Text>
      <Button title='activar Modal' onPress={()=> setIsModalVisible(true)}/>
      <Modal visible= {isModalVisible} onRequestClose={()=> setIsModalVisible(false)} animationType='slide' >
        <View style={{backgroundColor: 'gray', padding: 30, borderRadius: 10, flex: 1 }}>
          <Text>Modal content</Text>
          <Button title='Cerrar' onPress={()=> setIsModalVisible(false)} />
        </View>
      </Modal>





      </ImageBackground>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      margin: 20,
      backgroundColor: '#fff',
      flex: 1,
      borderRadius: 10,
      padding: 10,
    },
    stretch: {
      width: 300,
      height: 300,
      resizeMode: 'stretch',
    },
  }
)