import { useState } from 'react'
import { TextareaProps } from '@/types/input'
import { getErrors } from '../utils'
import cls from 'classnames'

export function TextareaProvider({ name, register, rules, ...props }: TextareaProps) {
  // __STATE <React.Hooks>
  const [vid] = useState(`ui--form-model-${name}`)

  const [defaultValue] = useState(props.value)
  const [required] = useState(rules?.required)

  // __RENDER
  return (
    <div className='ui--input-provider'>
      <label className={cls('ui--input-label', { required })} htmlFor={vid}>
        {props.icon && <span className={`icon bi bi-${props.icon}`}></span>}
        <span className='text'>{props.label}</span>
      </label>

      <div className='ui--input-desc'>{props.children}</div>

      <div className='ui--input-field'>
        <textarea
          id={vid}
          name={name}
          className='ui--input-textarea'
          defaultValue={defaultValue}
          placeholder={props.placeholder}
          maxLength={props.maxlength}
          readOnly={props.readonly}
          rows={props.rows}
          disabled={props.disabled}
          {...register(name, rules)}
        />
      </div>

      <span className='ui--input-errors'>{getErrors(props.errors)}</span>
    </div>
  )
}
