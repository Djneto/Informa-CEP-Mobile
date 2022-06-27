import React from "react"
import { FlatList, Text, View } from "react-native"
import { Campo, Const, Lista, Valor, } from "./style"

const Info = React.memo(({ response }: any | object) => {
  return (
    <Lista>
      <FlatList 
        data={response} 
        renderItem={({ item }: any | object) => <Campo><Const>{item[0]} :</Const><Valor> {item[1]}</Valor></Campo>} 
      />
    </Lista>
  )
})

export default Info