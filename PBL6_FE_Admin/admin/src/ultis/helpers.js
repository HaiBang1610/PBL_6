const helpers = {
    parseMoney: (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    },
};

export default helpers;
