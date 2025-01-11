import qs from 'query-string'
import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'
import {z} from 'zod'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const formatDateTime = (dateString:Date)=>{

    const dateTimeOptions : Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short',
    };

    const dateDayOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: '2-digit',
    };

    const dateOptions : Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    };

    const timeOptions : Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    const formatDateTime : string = new Date(dateString).toLocaleString('en-US', dateTimeOptions);
    const formatDateDay : string = new Date(dateString).toLocaleString('en-US', dateDayOptions);
    const formatDate : string = new Date(dateString).toLocaleString('en-US', dateOptions);
    const formatTime : string = new Date(dateString).toLocaleString('en-US', timeOptions);

    return {
        dateTime: formatDateTime,
        dateDay: formatDateDay,
        date: formatDate,
        time: formatTime
    }
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const authFormSchema = (type:string)=> z.object({
    firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3, 'First Name is required'),
    lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3, 'Last name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Password is required'),
    confirmPassword: type === 'sign-in' ? z.string().optional() : z.string().min(8, 'Password is required'),
});

export function UrlQuery({ params, key, value }: UrlQueryParams) {
    const query = qs.parse(params);
    query[key] = value;
    return qs.stringifyUrl({
        url: window.location.pathname,
        query: query,
    }, {
        skipNull: true,
        skipEmptyString: true,
    });
}
export function encryptId(id: string) {
    return btoa(id);
}

export function decryptId(id: string) {
    return atob(id);
}