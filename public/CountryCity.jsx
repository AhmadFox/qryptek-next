import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const CountryCity = () => {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [cities, setCities] = useState([]);

	useEffect(() => {
	// Fetch all countries
	axios
		.get("https://countriesnow.space/api/v0.1/countries")
		.then((response) => {
			const countryOptions = response.data;
			console.log(countryOptions);
		setCountries(countryOptions.find(country));
		})
		.catch((error) => {
			console.error("Error fetching countries:", error);
		});
	}, []);

  useEffect(() => {
	// Fetch cities or states based on selected country
	if (selectedCountry) {
	  axios
		.get(`https://your-api-endpoint/cities/${selectedCountry.value}`)
		.then((response) => {
		  const cityOptions = response.data.map((city) => ({
			value: city.name,
			label: city.name,
		  }));
		  setCities(cityOptions);
		})
		.catch((error) => {
		  console.error("Error fetching cities:", error);
		});
	} else {
	  setCities([]);
	}
  }, [selectedCountry]);

	const handleCountryChange = (selectedOption) => {
		setSelectedCountry(selectedOption);
	};

	return (
		<div className="grid grid-cols-2 gap-x-4">
			<Select
				options={countries}
				value={selectedCountry}
				onChange={handleCountryChange}
			/>

			{cities.length > 0 && (
			<div>
				<label>Select a City</label>
				<Select options={cities} />
			</div>
			)}
		</div>
	);
};

export default CountryCity;