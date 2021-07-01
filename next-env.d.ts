/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface Array {
	findOne: (prop: string, value: any) => any;
	findAll: (prop: string, value: any) => any[];
	remove: (prop: string, value: any) => any[];
	groupBy: (prop: string) => any;
	orderBy: (prop: string, type: string) => any[];
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.webp';
