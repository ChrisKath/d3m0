import { useState } from 'react'
import { CheckboxProps } from '@/types/input'

export function CheckboxProvider({ name, register, ...props }: CheckboxProps) {
  // __STATE <React.Hooks>
  const [vid] = useState(`ui--form-model-${name}`)

  const [defaultChecked] = useState(props.value)

  // __RENDER
  return (
    <div className='ui--input-provider'>
      <input
        type='checkbox'
        id={vid}
        name={name}
        className='ui--input-checkbox'
        defaultChecked={defaultChecked}
        {...register(name)}
      />

      <label className='ui--input-checkbox-label' htmlFor={vid}>
        <span className='icon bi bi-check'></span>
        <span className='text'>{props.label}</span>
      </label>
    </div>
  )
}
