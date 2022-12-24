console.log("Hello World");
// code for getting the data of covid-19

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '360a782228msh5f55c13f59c9f8fp184d1fjsnd4190517b2b0',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

const getAllTheNews = (event) => {
	event.preventDefault();

	if (UserCity.value.length <= 1) {
		// console.log("Please Enter A City.")
		country.innerText = "__";
		confirmedCases.innerText = 0 + "+";
		deaths.innerText = 0 + "+";
		myErrorBox.style.display = "block";
		MyError.innerText = "Please Enter A Country.!!.";
	}
	else {
		fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${UserCity.value}`, options)
			.then(response => response.json())
			.then((response) => {
				console.log(response)

				if (response.data.location == "Global") {
					country.innerText = "__";
					confirmedCases.innerText = 0 + "+";
					deaths.innerText = 0 + "+";
					myErrorBox.style.display = "block";
					MyError.innerText = `${UserCity.value} Is Not A Proper Country Name.!!.`;
				}
				else {
					myErrorBox.style.display = "none";
					country.innerText = response.data.location
					confirmedCases.innerText = response.data.confirmed + "+"
					deaths.innerText = response.data.deaths + "+"

				}

			})
			.catch(err => console.error(err));
	}
}

searchButton.addEventListener("click", getAllTheNews);

// {{!-- COMPLETE WEBSITE IS BUILD --}}