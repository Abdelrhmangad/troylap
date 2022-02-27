import React from "react";
import ExclamationMark from "../assets/exlamationMark.svg";
import ManIcon from "../assets/manIcon.svg";
import LaysImg from "../assets/lays.svg";
import plusIcon from "../assets/plusIcon.svg";
export default function ProductCard() {
	return (
		<div className="product-card">
			<div className="card-header d-flex justify-content-between align-items-center">
				<img
					src={ExclamationMark}
					alt="exclamation"
					width={20}
					height={20}
				/>
				<p className="product-calories">
					<span>230 kcal</span>
					<img src={ManIcon} alt="man icon" width={20} height={20} />
				</p>
			</div>
			<div className="card-details">
				<div className="product-image">
					<img
						src={LaysImg}
						alt="layesImg"
						width={150}
						height={150}
					/>
				</div>
				<span className="product-name">عصير تفاح 250مل</span>
				<span className="product-stock">
					الكمية بالمخزون: <span className="product-quantity">5</span>
				</span>
				<span className="product-price">200 ريال</span>
			</div>

			<span className="addToCart-btn pointer">
				<img src={plusIcon} alt="add to cart" width={20} height={20} />
			</span>
		</div>
	);
}
