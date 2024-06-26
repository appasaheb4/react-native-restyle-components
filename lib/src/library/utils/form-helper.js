import dayjs from 'dayjs';
export class FormHelper {
    static patterns = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        emptySpace: /^\S$|^\S[\s\S]*\S$/,
        emptyString: /^\s*$/,
        nonEmptyString: /^(?!\s*$).+/,
        userName: /^[a-z][a-z0-9_.]+$/,
    };
    static isUserNameValid(userName) {
        return this.patterns.userName.test(userName);
    }
    static isEmailValid(email) {
        return this.patterns.email.test(email);
    }
    static isDateValid(date, month, year) {
        if (!Number(month) || !Number(year)) {
            return !!Number(date) && Number(date) <= 31;
        }
        const daysInMonth = new Date(Number(year), Number(month), 0).getDate();
        return Number(date) <= daysInMonth;
    }
    static isMonthValid(month) {
        return !!Number(month) && Number(month) <= 12;
    }
    static isYearValid(year) {
        return !!Number(year) && year.length === 4;
    }
    static getDaysDifference = (childDob) => {
        const today = dayjs();
        const childBirthDate = dayjs(childDob).set('year', today.get('year'));
        const differnceInDays = childBirthDate.diff(today, 'day', true);
        return differnceInDays;
    };
    static getNumberOfDays = (start, end) => {
        const date1 = new Date(start);
        const date2 = new Date(end);
        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;
        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - date1.getTime();
        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);
        return diffInDays;
    };
    static hasWhiteSpace = (value) => this.patterns.emptySpace.test(value);
}
