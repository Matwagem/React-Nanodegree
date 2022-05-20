import { formatDate } from "./utils/helpers";
jest.setTimeout(10000);

describe('formatDate', () => {
    it('will return a formatted date from a timestamp', async() => {
        var timestamp = 1488579767190;
        const d = new Date(timestamp);
        const time = d.toLocaleTimeString('en-US');
        await expect(formatDate(timestamp)).toEqual(time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString());
    })

    it('will return an error if the timestamp cannot be read', async() => {
        var timestamp = '14885797dsassaa67190';
        await expect(formatDate(timestamp)).toContain('Invalid Date');
    })
})
