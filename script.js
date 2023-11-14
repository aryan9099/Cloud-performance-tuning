const url = 'https://weatherstack1.p.rapidapi.com/api.weatherstack.com/current';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '376a7fc527msh0f4cf358400de9ep11466ajsnaf06a758f941',
		'X-RapidAPI-Host': 'weatherstack1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}