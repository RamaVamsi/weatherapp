import React from "react";
import { useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import "../src/App.css";

function App() {
  const [searchString, setSearchString] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dataLoad, setDataLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  const handleData = () => {
    if (inputValue === "") {
      alert("Please enter a city name");
    } else {
      setLoading(true);
      const cityName = inputValue.trim();
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=33&appid=1635890035cbba097fd5c26c8ea672a1`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data) => {
          setSearchString(data.list);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          alert("No City Exists,Please Wait till reload");
          window.location.reload();
        });

      setTimeout(() => {
        setDataLoad(true);
      }, 1000);
    }
  };

  const Spinner = () => <div className="Loader-label"></div>;

  return (
    <div>
      <div className="App-headers">
        <label className="Head-label">Weather In Your City </label>

        <Disclosure>
          <Menu as="div" className="ml-3 relative">
            <div className="flex flex-wrap">
              <Menu.Button className="flex text-sm focus:outline-none  ">
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-orange-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="grid-city"
                  type="text"
                  placeholder="Search City"
                  value={inputValue}
                  onChange={handleInputChange}
                ></input>
                <button
                  onClick={() => handleData()}
                  class="rounded-lg ml-2 pt-3 px-6 py-3 bg-orange-600 text-white hover:bg-orange-600 duration-300"
                >
                  Search
                </button>
              </Menu.Button>
              {loading ? Spinner() : null}
            </div>
          </Menu>
        </Disclosure>
      </div>

      {dataLoad && (
        <div className="Table-headers">
          {
            <table className="Headers-table">
              <tbody>
                <tr className="Headers">
                  <th className="HeadersTop" colSpan="2">
                    Date:{searchString[0].dt_txt.slice(0, 10)}
                  </th>
                </tr>

                <tr className="Headers">
                  <th className="Headers" colSpan="2">
                    Temparature
                  </th>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Min</td>
                  <td className="Headers">Max</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">{searchString[0].main.temp_min}</td>
                  <td className="Headers">{searchString[0].main.temp_max}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Pressure</td>
                  <td className="Headers">{searchString[0].main.pressure}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Humidity</td>
                  <td className="Headers">{searchString[0].main.humidity}</td>
                </tr>
              </tbody>
            </table>
          }

          {
            <table className="Headers-table">
              <tbody>
                <tr className="Headers">
                  <th className="HeadersTop" colSpan="2">
                    Date:{searchString[6].dt_txt.slice(0, 10)}
                  </th>
                </tr>

                <tr className="Headers">
                  <th className="Headers" colSpan="2">
                    Temparature
                  </th>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Min</td>
                  <td className="Headers">Max</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">{searchString[6].main.temp_min}</td>
                  <td className="Headers">{searchString[6].main.temp_max}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Pressure</td>
                  <td className="Headers">{searchString[6].main.pressure}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Humidity</td>
                  <td className="Headers">{searchString[6].main.humidity}</td>
                </tr>
              </tbody>
            </table>
          }
          {
            <table className="Headers-table">
              <tbody>
                <tr className="Headers">
                  <th className="HeadersTop" colSpan="2">
                    Date:{searchString[14].dt_txt.slice(0, 10)}
                  </th>
                </tr>

                <tr className="Headers">
                  <th className="Headers" colSpan="2">
                    Temparature
                  </th>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Min</td>
                  <td className="Headers">Max</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">{searchString[14].main.temp_min}</td>
                  <td className="Headers">{searchString[14].main.temp_max}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Pressure</td>
                  <td className="Headers">{searchString[14].main.pressure}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Humidity</td>
                  <td className="Headers">{searchString[14].main.humidity}</td>
                </tr>
              </tbody>
            </table>
          }
          {
            <table className="Headers-table">
              <tbody>
                <tr className="Headers">
                  <th className="HeadersTop" colSpan="2">
                    Date:{searchString[22].dt_txt.slice(0, 10)}
                  </th>
                </tr>

                <tr className="Headers">
                  <th className="Headers" colSpan="2">
                    Temparature
                  </th>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Min</td>
                  <td className="Headers">Max</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">{searchString[22].main.temp_min}</td>
                  <td className="Headers">{searchString[22].main.temp_max}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Pressure</td>
                  <td className="Headers">{searchString[22].main.pressure}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Humidity</td>
                  <td className="Headers">{searchString[22].main.humidity}</td>
                </tr>
              </tbody>
            </table>
          }
          {
            <table className="Headers-table">
              <tbody>
                <tr className="Headers">
                  <th className="HeadersTop" colSpan="2">
                    Date:{searchString[29].dt_txt.slice(0, 10)}
                  </th>
                </tr>

                <tr className="Headers">
                  <th className="Headers" colSpan="2">
                    Temparature
                  </th>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Min</td>
                  <td className="Headers">Max</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">{searchString[29].main.temp_min}</td>
                  <td className="Headers">{searchString[29].main.temp_max}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Pressure</td>
                  <td className="Headers">{searchString[29].main.pressure}</td>
                </tr>

                <tr className="Headers">
                  <td className="Headers">Humidity</td>
                  <td className="Headers">{searchString[29].main.humidity}</td>
                </tr>
              </tbody>
            </table>
          }
        </div>
      )}
    </div>
  );
}

export default App;
