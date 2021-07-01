export interface TResponse {
  status: boolean;
  message: string;
  [propName: string]: any;
}

export interface Fruit {
  label: string;
  value: string;
}

export interface DialogOptions {
  type?: 'alert' | 'confirm';
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

export interface DialogResults {
  isConfirmed: boolean;
  isDenied: boolean;
}

export interface DialogMessage {
  [key: any]: string[];
}
