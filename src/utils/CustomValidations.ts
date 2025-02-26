// import { CustomValidation } from 'input-master';

// export const emailCv: CustomValidation = {
//   func(email: string): boolean {
//     if (email === '') return true;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const englishOnlyRegex = /^[a-zA-Z0-9@.\-_]+$/;

//     return emailRegex.test(email.toString()) && englishOnlyRegex.test(email.toString());
//   },
//   error: 'یک مقدار صحیح برای ایمیل وارد کنید.',
// };

// export const alphanumericCv: CustomValidation = {
//   func(str): boolean {
//     if (str === '') return true;
//     const alphanumeric = /^[a-zA-Z0-9]+$/;
//     return alphanumeric.test(str.toString());
//   },
//   error: 'تنها از ترکیب اعداد و حروف استفاده کنید.',
// };

// type InputObject = {
//   value: number;
//   label: string;
// };

// export const unknownCV = (unknownValue?: number): CustomValidation => {
//   if (unknownValue)
//     return {
//       func(input: InputObject): boolean {
//         if (input?.value == unknownValue) {
//           return false;
//         }

//         return true;
//       },
//       error: 'لطفا این فیلد را به دقت وارد کنید',
//     };
//   return unknownCv;
// };
// export const unknownCv: CustomValidation = {
//   func(input: InputObject): boolean {
//     if (input?.value == 0) {
//       return false;
//     }

//     return true;
//   },
//   error: 'لطفا این فیلد را به دقت وارد کنید',
// };

// export const newNationalCardSerialCv: CustomValidation = {
//   func(str): boolean {
//     if (str === '') return true;
//     const newSerialRegex = /\b\d[a-zA-Z]\d{8}\b/;
//     return newSerialRegex.test(str);
//   },
//   error: 'سریال پشت کارت معتبر نیست',
// };

// export const oldNationalCardSerialCv: CustomValidation = {
//   func(str): boolean {
//     if (str === '') return true;
//     const oldSerialRegex = /^\d{8}$/;
//     return oldSerialRegex.test(str);
//   },
//   error: 'شماره سریال کارت معتبر نیست',
// };

// export const phoneNumberCv: CustomValidation = {
//   func(str): boolean {
//     if (str === '') return true;
//     const startsWith09 = /^09\d+$/;
//     return startsWith09.test(str.toString());
//   },
//   error: 'شماره باید با 09 شروع شده و تنها شامل اعداد باشد.',
// };

// export const nationalIdCv: CustomValidation = {
//   func(value): boolean {
//     if (value == '') return true;
//     if (value.length == 11) return false;
//     // بین 10 تا 12 رقمی بودن روی خود Input هندل شده است
//     return true;
//   },
//   error: 'شناسه ملی نمیتواند 11 رقمی باشد',
// };
// export const foreignBankAccount: CustomValidation = {
//   func(value): boolean {
//     if (value === '') return false;
//     const regex = /^[A-Z]{2}[0-9]{13,32}$/; // دو حرف انگلیسی بزرگ و سپس ۱۳ تا 32 رقم
//     return regex.test(value);
//   },
//   error: ' شماره شبا باید ترکیب دو حرف انگلیسی بزرگ و 13 تا 32 رقم باشد ',
// };

// export const titleValidation: CustomValidation = {
//   func(value): boolean {
//     // Trim any leading or trailing whitespace and split the string by spaces
//     const words = value.trim().split(/\s+/);
//     // Check if there are at least two words
//     return words.length >= 2;
//   },
//   error: ' عنوان را حداقل در دو کلمه ثبت نمایید ',
// };
// export const hasCharValidation: CustomValidation = {
//   func(input: string): boolean {
//     if (input.length) {
//       // Check if the input contains at least one letter
//       return /\p{L}/u.test(input);
//     } else return true;
//   },
//   error: 'این مقدار باید شامل حروف باشد',
// };
// export const required: CustomValidation = {
//   func(input: string): boolean {
//     if (input === null) {
//       // Check if the input contains at least one letter
//       return false;
//     } else return true;
//   },
//   error: 'لطفا این فیلد را به دقت وارد کنید',
// };
