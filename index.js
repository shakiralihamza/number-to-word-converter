const firstTwentyStrings = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];
const tensStrings = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

const TEN = 10;
const HUNDRED = 100;
const THOUSAND = 1000;
const LAC = 100000;
const CRORE = 10000000;
const ARAB = 1000000000;

const isAndorComma = (remainder) => (remainder === 0 ? '' : remainder < HUNDRED ? ' and' : ',');

const findLessThanTen = (num) => firstTwentyStrings[num];

const findLessThanHundred = (num) => {
    if (num <= 20) {
        return findLessThanTen(num);
    } else {
        const base = Math.floor(num / TEN);
        const remainder = num % TEN;
        return `${tensStrings[base - 2]} ${firstTwentyStrings[remainder]}`;
    }
}

const findLessThanThousand = (num) => {
    const base = Math.floor(num / HUNDRED);
    const remainder = num % HUNDRED;
    const restPart = findLessThanHundred(remainder);
    return `${firstTwentyStrings[base]} hundred${isAndorComma(remainder)} ${restPart}`;
}

const findLessThanLac = (num) => {
    const base = Math.floor(num / THOUSAND);
    const remainder = num % THOUSAND;
    const restPart = remainder < HUNDRED ? findLessThanHundred(remainder) : findLessThanThousand(remainder);
    return `${findLessThanHundred(base)} thousand${isAndorComma(remainder)} ${restPart}`;
}


const findLessThanCrore = (num) => {
    const base = Math.floor(num / LAC);
    const remainder = num % LAC;
    const restPart = remainder < HUNDRED ? findLessThanHundred(remainder) : remainder < THOUSAND ? findLessThanThousand(remainder) : findLessThanLac(remainder);
    return `${findLessThanHundred(base)} lac${isAndorComma(remainder)} ${restPart}`;
}

const findLessThanArab = (num) => {
    const base = Math.floor(num / CRORE);
    const remainder = num % CRORE;
    const restPart = remainder < HUNDRED ? findLessThanHundred(remainder) : remainder < THOUSAND ? findLessThanThousand(remainder) : remainder < LAC ? findLessThanLac(remainder) : findLessThanCrore(remainder);
    return `${findLessThanHundred(base)} crore${isAndorComma(remainder)} ${restPart}`;
}

for (let i = -26710010; i <= -26710000; i++) {
    const absoluteNumber = Math.abs(i);
    const isNegative = i < 0 ? 'Minus ' : '';

    if (absoluteNumber === 0) {
        console.log('Zero')
    } else if (absoluteNumber <= 20) {
        console.log(isNegative + firstTwentyStrings[absoluteNumber])
    } else if (absoluteNumber < HUNDRED) {
        console.log(isNegative + findLessThanHundred(absoluteNumber))
    } else if (absoluteNumber < THOUSAND) {
        console.log(isNegative + findLessThanThousand(absoluteNumber));
    } else if (absoluteNumber < LAC) {
        console.log(isNegative + findLessThanLac(absoluteNumber));
    } else if (absoluteNumber < CRORE) {
        console.log(isNegative + findLessThanCrore(absoluteNumber));
    } else if (absoluteNumber < ARAB) {
        console.log(isNegative + findLessThanArab(absoluteNumber))
    } else if (absoluteNumber === ARAB) {
        console.log("That's one arab")
    } else {
        console.log("That's greater than arab");
    }
}
