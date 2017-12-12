// URL: "https://randomuser.me/api/"

export function fetchProfile() {
	return dispatch => {
		dispatch({ type: "ASYNC_START" });
		fetch("https://randomuser.me/api/")
			.then(res => res.json())
			.then(json => {
				let user = {
					firstName: json.results[0].name.first,
					picture: json.results[0].picture.large
				};
				dispatch({ type: "FETCH_PROFILE", user: user });
			});
	};
}
