import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

import { schema } from './FromValidation';
import { IUser } from './FromValidation'

const Form = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IUser>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: IUser) => {  
    console.log(data)
  }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} name="firstName" type="text" placeholder='First name'/>
        {errors.firstName && <span>{errors.firstName?.message}</span>}

        <input {...register('lastName')} name="lastName" type="text" placeholder='Last name'/>
        {errors.lastName && <span>{errors.lastName?.message}</span>}

        <input {...register('age')} name="age" type="number" placeholder='Age'/>
        {errors.age && <span>{errors.age?.message}</span>}

        <input {...register('email')} type="text" placeholder='Email'/>
        {errors.email && <span>{errors.email?.message}</span>}

        <button type='submit'>Submit</button>
      </form>
  );
}

export default Form;
