/// <reference types="next" />

declare interface Window<T = any> {
	dataLayer: any[];
	gtag: (prop: string, value: any) => void
}

declare module '*.json'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.webp'
