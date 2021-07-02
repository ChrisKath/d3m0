/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.webp';

declare interface Array<T = any> {
	findOne: (prop: string, value: string | number | boolean) => T;
	findAll: (prop: string, value: string | number | boolean) => T[];
	remove: (prop: string, value: string | number | boolean) => T[];
	groupBy: (prop: string) => T;
	orderBy: (prop: string, type?: string) => T[];
}
