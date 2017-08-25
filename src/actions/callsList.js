export const methods = {
  FETCH_CALLS_LIST_START: 'FETCH_CALLS_LIST_START',
  FETCH_CALLS_LIST_SUCCESS: 'FETCH_CALLS_LIST_SUCCESS',
  FETCH_CALLS_LIST_ERROR: 'FETCH_CALLS_LIST_ERROR',
};

const calls = [
  {
    "id": 5062,
    "direction": "out",
    "time_stamp": "2017-06-26T18:42:27.411230",
    "from_number": "9851152405",
    "to_number": "4955554433",
    "duration": 0,
    "duration_total": 0,
    "canceled_by": "initiator",
    "business_case": "client-agent-vt",
    "from_fio": "Шома Шома Шома",
    "to_fio": "ГК ПИК",
    "redirect_to_number": null,
    "redirect_to_fio": null,
    "sms_time_stamp": null
  },
  {
    "id": 5063,
    "direction": "out",
    "time_stamp": "2017-06-26T18:43:41.005171",
    "from_number": "9851152405",
    "to_number": "4955554433",
    "duration": 0,
    "duration_total": 0,
    "canceled_by": "initiator",
    "business_case": "client-agent-vt",
    "from_fio": "",
    "to_fio": "ГК ПИК",
    "redirect_to_number": null,
    "redirect_to_fio": null,
    "sms_time_stamp": null
  },
];

export default {
  fetchCallsList() {
    return (dispatch) => {
      dispatch({type: methods.FETCH_CALLS_LIST_START});

      try {

        //TODO Вот тут будет ассинхронный запрос
        dispatch({
          type: methods.FETCH_CALLS_LIST_SUCCESS,
          calls
        })

      } catch (e) {
        dispatch({type: methods.FETCH_CALLS_LIST_ERROR});
      }
    };
  }
}