/* eslint-disable prettier/prettier */
function numberWithCommas(x) {
    const numberFormatter = Intl.NumberFormat('en-US');
    const formatted = numberFormatter.format(x);
    return formatted

}

export default numberWithCommas;
