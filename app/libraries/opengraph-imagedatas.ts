import { HYGRAPH_API } from "./apiendpoint";

export async function getOpenGraphImageDatas() {
	const openGraphImageDatas = await fetch(HYGRAPH_API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
		},
		body: JSON.stringify({
			query: `query OpenGraphImg {
                projects(where: {projectTitle: "salat-kotasemarang"}) {
                    projectTitle
                    projectsRepositoryLink
                    projectCoverImageAttribution{
                        attributionImage{
                            url
                        }
                        attributionMarkdown
                    }
                }
            }`,
		}),
	})
		.then((res) => res.json())
		.catch((errors) => console.error(errors));
	// console.log("isi opengraphimagedatas: ", openGraphImageDatas);

	return openGraphImageDatas.data.projects;
}
