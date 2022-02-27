import React from "react";
import CloseIcon from "../assets/closeIconRed.svg";
import LaysIcon from "../assets/lays.svg";

export default function CartItem() {
	return (
		<div className="cart-item d-flex align-items-center">
			<div className="cart-item-img">
				<img src={LaysIcon} alt="item" height={70} />
			</div>
			<div className="cart-item-info d-flex flex-column align-items-between ">
				<span className="cart-item-name">شيبسي لايز 150جم</span>
				<span className="cart-item-price">
					<b>7.5 ريال </b>
					<span className="cart-item-quantity">{"2x "}</span>
				</span>
			</div>
			<div className="cart-item-total d-flex">
				<span className="cart-item-total-price">18.00 ريال</span>
			</div>

			<span className="closeIcon pointer">
				<img src={CloseIcon} alt="close" />
			</span>
		</div>
	);
}
