export const fetchOptions: RequestInit = {
	method: "GET",
	next: {
		revalidate: 100,
	},
};
