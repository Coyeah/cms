import moment from 'moment';

export const SHORT_DATE_REG = /^\d{4}\-\d{2}\-\d{2}$/;

export const isValidDate = (dateString: string = void 0, isDateObject: boolean = false): string | Date | undefined => {
    if (typeof dateString !== 'string') return;
    if (SHORT_DATE_REG.test(dateString)) {
        const m = moment(dateString.split('-'));
        if (m.isValid()) {
            const str = m.format('yyyy-MM-DD');
            return isDateObject ? new Date(str) : str;
        }
    }
    return;
}