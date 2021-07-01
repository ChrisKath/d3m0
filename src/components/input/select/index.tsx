import { useState } from 'react'
import { SelectProps } from '@/types/input'
import { getErrors } from '../utils'
import cls from 'classnames'

export function SelectProvider({ name, register, rules, options, optionGroup, ...props }: SelectProps) {
  // __STATE <React.Hooks>
  const [vid] = useState(`ui--form-model-${name}`)

  const [defaultValue] = useState(props.value)
  const [required] = useState(rules?.required)

  const [optionValue] = useState(props.optionValue || 'value')
  const [optionLabel] = useState(props.optionLabel || 'label')

  // __FUNCTIONS
  const optionRenderer = () => {
    if (optionGroup) {
      const groupLabel = optionGroup[0] || 'label'
      const groupItems = optionGroup[1] || 'items'

      return options.map((group, index) => (
        <optgroup label={group[groupLabel]} key={group.id || index}>
          {group[groupItems].map((option: any, key: number) => (
            <option value={option[optionValue]} key={option.id || index + key / 10}>
              {option[optionLabel]}
            </option>
          ))}
        </optgroup>
      ))
    } else {
      return options.map((option, index) => (
        <option value={option[optionValue]} key={index}>
          {option[optionLabel]}
        </option>
      ))
    }
  }

  // __RENDER
  return (
    <div className='ui--input-provider'>
      <label className={cls('ui--input-label', { required })} htmlFor={vid}>
        {props.icon && <span className={`icon bi bi-${props.icon}`}></span>}
        <span className='text'>{props.label}</span>
      </label>

      <div className='ui--input-desc'>{props.children}</div>

      <div className='ui--input-field'>
        <select
          id={vid}
          name={name}
          className='ui--input-select'
          defaultValue={defaultValue}
          disabled={props.disabled}
          {...register(name, rules)}
        >
          {props.placeholder && <option value=''>{props.placeholder}</option>}
          {optionRenderer()}
        </select>
        <span className='icon bi bi-play'></span>
      </div>

      <span className='ui--input-errors'>{getErrors(props.errors)}</span>
    </div>
  )
}
