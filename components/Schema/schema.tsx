import * as Yup from 'yup';

export default Yup.object().shape({
  cep: Yup.string()
      .required('Digite um CEP!')
      .matches(/^[0-9]{5}-[0-9]{3}$/,'CEP inválido!'),
})