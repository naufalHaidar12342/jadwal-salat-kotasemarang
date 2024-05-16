"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateJadwalSebulan() {
	revalidatePath("/jadwal-sebulan");
}
export async function revalidateTagJadwalSebulan() {
	revalidateTag("jadwal-sebulan");
}
