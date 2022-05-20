import { formatDate, formatQuestion } from "./utils/helpers";
jest.setTimeout(10000);

describe('formatDate', () => {
    it('will return a formatted date from a timestamp', async() => {
        var timestamp = 1488579767190;
        await expect(formatDate(timestamp)).toEqual('10:22PM | 03/03/2017');
    })

    it('will return an error if the timestamp cannot be read', async() => {
        var timestamp = '14885797dsassaa67190';
        await expect(formatDate(timestamp)).toContain('Invalid Date');
    })
})
