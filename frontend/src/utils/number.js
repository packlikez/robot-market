const number = {
  toLocaleString(val) {
    const number = Math.floor(Number(val) * 100) / 100;
    return number.toLocaleString("th-TH", {
      maximumFractionDigits: 2,
    });
  },
};

export default number;
