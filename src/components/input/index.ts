import { InputProvider } from './main'
import { SelectProvider } from './select'
import { RadioProvider } from './radio'
import { TextareaProvider } from './textarea'
import { CheckboxProvider } from './checkbox'

export const Input = {
  Main: InputProvider,
  Select: SelectProvider,
  Radio: RadioProvider,
  Textarea: TextareaProvider,
  Checkbox: CheckboxProvider
}
