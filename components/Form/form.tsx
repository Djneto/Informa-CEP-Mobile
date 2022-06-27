import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, GestureResponderEvent } from 'react-native';
import { Formik } from 'formik';
import request from '../Request/request';
import Schema from '../Schema/schema';
import Info from '../Info/info'
import { Botao, BotaoTexto, Card, Entrada, Erro, Loading, Titulo } from './style';

const schema = Schema;

const Form = () => {
  const [info , setInfo] = useState<any>([])

  const onSubmit = async (values: any, setSubmitting: any) => {
    setInfo([]);
    setSubmitting(true)
    const data = await request.get(values.cep.replace('-',''))
    setSubmitting(false)
    format(data)
  }

  const edit = (key: Array<string>) => {
    if (key[0] == 'cep' || key[0] == 'uf' || key[0] == 'ibge' || key[0] == 'ddd' || key[0] == 'siafi'){
      key[0] = key[0].toUpperCase();
    } else {
      key[0] = key[0].charAt(0).toUpperCase() + key[0].slice(1);
    }
    return key;
  }

  const format = (data: object) => {
    const asArray = Object.entries(data);
    const filtered = asArray.filter((key) => key[1] !== '');
    const edited = filtered.map((key) => edit(key))
    saveState(edited)
  }

  const saveState = (data: object) => {
    setInfo(data);
  }

  return (
    <Card>
      <Titulo>INFORMA CEP</Titulo>
      <Formik
        initialValues={{
          cep: ''
        }}
        validateOnMount={false}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => { onSubmit(values, setSubmitting)}}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <View> 
            <Entrada
              onChangeText={handleChange('cep')}
              onBlur={handleBlur('cep')}
              value={values.cep}
              placeholder={'00000-000'}
              keyboardType="numeric"
              maxLength={9}
            />
            <Botao onPress={handleSubmit} bgColor={'black'}>
              <BotaoTexto>CONSULTAR</BotaoTexto>
            </Botao>
            { errors.cep && touched.cep ? <Erro>{errors.cep}</Erro> : null }
            { isSubmitting && <Loading><ActivityIndicator size="large" color="black"/></Loading> }
            { info && !errors.cep && <Info response={info}/>}
          </View> 
        )}
      </Formik> 
    </Card>  
  );
};

export default Form;
