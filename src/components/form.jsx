import React, { useState } from "react";
import Chart from "./chart";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function Form(props) {
  const [isChartVisible, isChartVisibleSet] = useState(false);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <div className="div-form">
      <div className="div-form-inner">
        <h3>Самый известный завод Швейцарии</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <GooglePlacesAutocomplete id="exampleInputEmail1" apiKey="***" />
          </div>
          <div class="form-group">
            <label for="inputState">Material</label>
            <select id="inputState" class="form-control">
              <option selected>Concrete</option>
              <option>Glass</option>
              <option>Stell</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Volume</label>
            <form class="form-inline">
              <input
                class="form-control"
                id="exampleInputPassword1"
                placeholder="10"
              />
              <small>m²</small>
            </form>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Special equipment
            </label>
          </div>
          <div class="form-group">
            <label for="date-picker">Date and Time</label>
            <DatePicker
              className="date-picker"
              id="picker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              includeTimes={[
                setHours(setMinutes(new Date(), 0), 17),
                setHours(setMinutes(new Date(), 30), 18),
                setHours(setMinutes(new Date(), 30), 19),
                setHours(setMinutes(new Date(), 30), 17),
              ]}
              dateFormat="dd/MM/yyyy h:mm"
            />
          </div>
        </form>
        <button class="btn-custom" onClick={() => isChartVisibleSet(true)}>
            Calculate
          </button>
          {isChartVisible && <Chart data={props.test} />}
      </div>
    </div>
  );
}

export default Form;
