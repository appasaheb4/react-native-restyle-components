import dayjs from 'dayjs';

export class FormHelper {
  static patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    emptySpace: /^\S$|^\S[\s\S]*\S$/,
    emptyString: /^\s*$/,
    nonEmptyString: /^(?!\s*$).+/,
    userName: /^[a-z][a-z0-9_.]+$/,
  };

  static isUserNameValid(userName: string): boolean {
    return this.patterns.userName.test(userName);
  }

  static isEmailValid(email: string): boolean {
    return this.patterns.email.test(email);
  }

  static isDateValid(date: string, month?: string, year?: string): boolean {
    if (!Number(month) || !Number(year)) {
      return !!Number(date) && Number(date) <= 31;
    }

    const daysInMonth = new Date(Number(year), Number(month), 0).getDate();
    return Number(date) <= daysInMonth;
  }

  static isMonthValid(month: string): boolean {
    return !!Number(month) && Number(month) <= 12;
  }

  static isYearValid(year: string): boolean {
    return !!Number(year) && year.length === 4;
  }

  static getDaysDifference = (childDob: string): number => {
    const today = dayjs();
    const childBirthDate = dayjs(childDob).set('year', today.get('year'));
    const differnceInDays = childBirthDate.diff(today, 'day', true);
    return differnceInDays;
  };

  static getNumberOfDays = (start: any, end: any) => {
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

  static hasWhiteSpace = (value: string): boolean =>
    this.patterns.emptySpace.test(value);
}
