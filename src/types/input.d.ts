import { ReactNode } from 'react'
import { FieldError, UseFormRegister, RegisterOptions } from 'react-hook-form'

export interface INPUTAttributes {
  key: string;
  vid?: string;
  name: string;
  label: string;
  icon?: string;
  register: UseFormRegister;
  errors?: FieldError;
  rules?: RegisterOptions;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
}

export interface InputProps extends INPUTAttributes {
  type?: 'text' | 'number' | 'search' | 'email' | 'password' | 'date';
  value?: string | number | readonly string[];
  autofocus?: boolean;
  autocomplete?: string;
  placeholder?: string;
  maxlength?: number;
  children?: ReactNode;
}

export interface TextareaProps extends INPUTAttributes {
  value?: string | number | readonly string[];
  rows?: number;
  placeholder?: string;
  maxlength?: number;
  children?: ReactNode;
}

export interface SelectProps extends INPUTAttributes {
  value?: string | number | readonly string[];
  placeholder?: string;
  children?: ReactNode;
  options: any[];
  optionValue?: string;
  optionLabel?: string;
  optionGroup?: string[];
}

export interface RadioProps extends INPUTAttributes {
  value?: string | number;
  placeholder?: string;
  children?: ReactNode;
  options: any[];
  optionValue?: string;
  optionLabel?: string;
}

export interface CheckboxProps extends INPUTAttributes {
  value?: boolean;
}
