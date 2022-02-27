import React from "react";
import KidImg from "../assets/kidImg.svg";
import CloseIcon from "../assets/closeIcon.svg";
import CartItem from "./cartItem";
export default function KidCartDetails() {
	return (
		<div className="kidCartDetails">
			<div className="cartDetailsHeader">
				<div className="kid-image">
					<img src={KidImg} alt="kid" height={70} />
				</div>
				<div className="kid-info">
					<span className="kidNumber">الرقم المقصفي: 374</span>
					<span className="kidName">محمد بن بندر الوشيقيرى</span>
				</div>
				<span className="closeIcon pointer">
					<img src={CloseIcon} alt="close" />
				</span>
			</div>
			<div className="cart-content">
				<h4>6 منتجات</h4>
				<div className="cart-items">
					<CartItem />
					<CartItem />
					<CartItem />
				</div>
			</div>
			<div className="totalCart-details">
				<p className="totalCart-detailsRow">
					<span className="label">الملاحظات</span>
					<span className="value">يفضل تاريخ صلاحية حديث </span>
				</p>
				<p className="totalCart-detailsRow">
					<span className="label">عمولة التطبيق</span>
					<span className="value">
						<b>2.5</b> ريال
					</span>
				</p>
				<p className="totalCart-detailsRow">
					<span className="label">المجموع</span>
					<span className="value">
						<b>22.5</b> ريال
					</span>
				</p>
				<button className="buyBtn btn pointer">شراء</button>
			</div>
		</div>
	);
}
