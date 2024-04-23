export declare class FormHelper {
    static patterns: {
        email: RegExp;
        emptySpace: RegExp;
        emptyString: RegExp;
        nonEmptyString: RegExp;
        userName: RegExp;
    };
    static isUserNameValid(userName: string): boolean;
    static isEmailValid(email: string): boolean;
    static isDateValid(date: string, month?: string, year?: string): boolean;
    static isMonthValid(month: string): boolean;
    static isYearValid(year: string): boolean;
    static getDaysDifference: (childDob: string) => number;
    static getNumberOfDays: (start: any, end: any) => number;
    static hasWhiteSpace: (value: string) => boolean;
}
