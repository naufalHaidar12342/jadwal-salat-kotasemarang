"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CardFlip() {
	const [isFlipped, setisFlipped] = useState(false);
	const [isAnimated, setisAnimated] = useState(false);

	function handleFlip() {
		setisAnimated(true);
		setisFlipped(!isFlipped);
	}
	return (
		<div className="flex items-center justify-center cursor-pointer">
			<div
				className="flip-card w-full h-full xl:w-80 xl:h-80 rounded-xl"
				onClick={handleFlip}
			>
				<motion.div
					className="flip-card-inner w-full h-full"
					initial={false}
					animate={{ rotateY: isFlipped ? 180 : 360 }}
					transition={{ duration: 0.5, animationDirection: "normal" }}
					onAnimationComplete={() => setisAnimated(false)}
				>
					<div className="flip-card-front w-full h-full bg-cover border-1 rounded-xl p-4">
						<h2>Icons</h2>
					</div>
					<div className="flip-card-back w-full h-full bg-cover border-1 p-4">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Cupiditate vero placeat soluta rem! Voluptatum ab, in repudiandae
							molestiae delectus libero. Architecto, veniam cumque delectus nemo
							similique aspernatur quam harum beatae.
						</p>
					</div>
				</motion.div>
			</div>{" "}
		</div>
	);
}
