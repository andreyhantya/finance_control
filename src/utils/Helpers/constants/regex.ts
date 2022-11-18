export const IS_NUMBER_REG_EXP = /^\d*$/;
export const IS_AMOUNT_REG_EXP = /^\d+\.?\d*$/;
export const IS_SPACE_REG_EXP = /^\S+$/;
export const ONLY_NUMBERS_SIX_DIGITS_REG_EXP = /^[0-9]{6}(?:-[0-9]{5})?$/;
export const ONLY_LATIN_LETTERS_REG_EXP = /^[A-Za-z]+$/;
export const ONLY_LETTERS_REG_EXP = /^[a-zA-ZА-Яа-я_.]+$/;
export const MIN_ONE_NUMBER_REG_EXP = /(?=.*[0-9])/;
export const MIN_ONE_LETTER_REG_EXP = /(?=.*[a-z])/;
export const MIN_ONE_LETTER_UPPERCASE_REG_EXP = /(?=.*[A-Z])/;
export const PHONE_NUMBER_REG_EXP = /^([+])\d{10,15}$/;
export const HEX_FORMAT_EIGHT_DIGITS_REG_EXP = /^[0-9A-Fa-f]{8}$/;
export const ONLY_LATIN_SYMBOLS = /^[0-9A-Za-z]*$/;
export const HEX_FORMAT_REG_EXP = /^[0-9A-Fa-f]*$/;
export const ONLY_NUMBERS_REG_EXP = /^[\d\s]{1,}$/;
export const FIRST_CHAR_PLUS_WITH_NUM = /^[+]\d*$/;
export const API_ID_REG_EXP =
    /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/;
export const EMAIL_REG_EXP =
    /^([a-zA-Zа-яА-Я0-9]+(?:[._-][a-zA-Zа-яА-Я0-9]+)*)@([a-zA-Zа-яА-Я0-9]+(?:[.-][a-zA-Zа-яА-Я0-9]+)*\.[a-zA-Zа-яА-Я]{2,})$/;
