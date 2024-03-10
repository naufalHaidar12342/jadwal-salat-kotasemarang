import { AiTwotoneApi } from "react-icons/ai";
import { MdPhotoCameraBack } from "react-icons/md";
import { getOpenGraphImageDatas } from "@/app/libraries/opengraph-imagedatas";
import { METADATA_BASEURL } from "../libraries/metadata-baseurl";
import { METADATA_ROBOTS } from "../libraries/metadata-robots";
import { Divider } from "@nextui-org/divider";
import CardFlip from "./cardflip";
import { Link } from "@nextui-org/link";

export async function generateMetadata() {
	const [fetchedOpenGraphImageDatas] = await getOpenGraphImageDatas();
	const openGraphImageUrl =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionImage
			.url;
	const openGraphImageAttribution =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionMarkdown;
	const openGraphProject = fetchedOpenGraphImageDatas.projectTitle;
	const openGraphProjectSource =
		fetchedOpenGraphImageDatas.projectsRepositoryLink;
	return {
		title: "Attribution",
		description: `Attribution/credits untuk komponen yang digunakan dalam proyek "${openGraphProject}", sebuah proyek iseng saya yang dapat dilihat sumbernya di ${openGraphProjectSource}.`,
		...METADATA_BASEURL,
		...METADATA_ROBOTS,
		openGraph: {
			title: "Attribution",
			description: `Attribution/credits untuk komponen yang digunakan dalam proyek "${openGraphProject}", sebuah proyek iseng saya yang dapat dilihat sumbernya di ${openGraphProjectSource}.`,
			url: `${METADATA_BASEURL.metadataBase}attribution`,
			images: [
				{
					url: openGraphImageUrl,
					alt: `${openGraphImageAttribution}`,
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

export default async function Credits() {
	return (
		<div className="w-full h-full max-w-screen-xl flex flex-col">
			<div className="w-full h-full flex flex-col items-center">
				<div className="flex flex-col">
					<h2 className="font-bold text-2xl xl:text-5xl">
						Credits/Attribution
					</h2>
					<Divider className="w-full bg-gradient-to-r from-bluetransparent via-blueopaque to-bluetransparent my-8" />
					<span className="text-2xl font-normal">
						Berikut <i>attribution</i> dari beberapa sumber yang digunakan dalam
						proyek ini.
					</span>
				</div>
				<div className="flex flex-col gap-5 py-14 md:flex-row">
					<div
						className="flex flex-col justify-center w-full rounded-xl border-2 border-indigo-300 p-5"
						// style={{
						// 	background:
						// 		"linear-gradient(white, white)padding-box,linear-gradient(to bottom, #7087D9,#6E8CF60D)border-box",
						// 	border: "1px solid transparent",
						// }}
					>
						<Link
							href="https://www.flaticon.com/free-icon/pray_3167301?term=prayer&page=1&position=50&origin=tag&related_id=3167301"
							target="_blank"
							showAnchorIcon
							className="text-white-shade text-xl"
						>
							favicons
						</Link>
					</div>
					<div
						className="flex flex-col justify-center w-full rounded-xl border-2 border-indigo-300 p-5"
						// style={{
						// 	background:
						// 		"linear-gradient(white, white)padding-box,linear-gradient(to bottom, #7087D9,#6E8CF60D)border-box",
						// 	border: "1px solid transparent",
						// }}
					>
						<Link
							href="https://react-icons.github.io/react-icons/"
							target="_blank"
							showAnchorIcon
							className="text-white-shade text-xl"
						>
							react-icons
						</Link>
					</div>
					<div
						className="flex flex-col justify-center w-full rounded-xl border-2 border-indigo-300 p-5"
						// style={{
						// 	background:
						// 		"linear-gradient(white, white)padding-box,linear-gradient(to bottom, #7087D9,#6E8CF60D)border-box",
						// 	border: "1px solid transparent",
						// }}
					>
						<Link
							href="https://documenter.getpostman.com/view/841292/2s9YsGittd#intro"
							target="_blank"
							showAnchorIcon
							className="text-white-shade text-xl"
						>
							API myQuran v2
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
