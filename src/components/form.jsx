import React, { useState } from "react";
import Chart from "./chart";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import $ from "jquery";

function Form(props) {
  const [isChartVisible, isChartVisibleSet] = useState(false);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const [volume, setVolume] = useState(10);

  const [address, setAddress] = useState("");

  const [data, setData] = useState({
  value: '',
  loading: true,
});

  return (
    <div className="div-form">
      <div className="div-form-inner">
        <h3>Самый известный завод Швейцарии</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            {!isChartVisible && (
              <GooglePlacesAutocomplete
                selectProps={{
                  address,
                  onChange: setAddress,
                }}
                id="exampleInputEmail1"
                apiKey="***"
              />
            )}
            {isChartVisible && (
              <select disabled={true} id="inputState2" class="form-control">
                <option selected>{address.label}</option>
                <option>Glass</option>
                <option>Stell</option>
              </select>
            )}
          </div>
          <div class="form-group">
            <label for="inputState">Material</label>
            <select disabled={true} id="inputState" class="form-control">
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
                value={volume}
                onInput={(e) => setVolume(e)}
                disabled={isChartVisible}
              />
              <small>m²</small>
            </form>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              disabled={isChartVisible}
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
              disabled={isChartVisible}
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
        <div>
        </div>
        <button
          class="btn-custom"
          disabled={isChartVisible}
          onClick={() => {
            isChartVisibleSet(true);
            console.log(address);
            $.getJSON("http://localhost:8080/predict?", {
              address: address.labels,
              volume: volume,
              date: startDate,
            })
              .then(data => {setData( {value:data, loading:false}); console.log(data)});}}
>
          Calculate
        </button>
      </div>
      {isChartVisible && !data.loading && <Chart id="chart" data={data} />}
    </div>
  );
}

export default Form;
