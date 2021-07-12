import moment from "moment";

const time = {
  toDate(val) {
    return moment(val).format("DD-MM-YYYY");
  },
};

export default time;
