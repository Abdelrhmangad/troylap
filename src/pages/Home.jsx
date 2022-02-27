import React from "react";
import SearchIcon from "../assets/searchIcon.svg";
import SearchGrey from "../assets/searchGrey.svg";
import UserIcon from "../assets/userIcon.svg";
import EmptySide from "../assets/emptySide.svg";
import PizzaIcon from "../assets/pizza.svg";
import CupIcon from "../assets/coffee-cup.svg";
import ProductCard from "../components/productCard";

export default function Home() {
	return (
		<div className="homepage d-flex flex-nowrap">
			<main className="homepage-mainContent">
				<div className="filters-icons-btns d-flex">
					<button className="btn pointer filters-btn  active">
						الكل
					</button>
					<button className="btn pointer filters-btn ">
						<img
							src={PizzaIcon}
							alt="pizaa"
							width={30}
							height={30}
						/>
						<span>بيتزا</span>
					</button>
					<button className="btn pointer filters-btn ">
						<img src={CupIcon} alt="pizaa" width={30} height={30} />
						<span>مشروبات</span>
					</button>
					<button className="btn pointer filters-btn ">
						<img
							src={PizzaIcon}
							alt="pizaa"
							width={30}
							height={30}
						/>
						<span>بيتزا</span>
					</button>
					<button className="btn pointer filters-btn ">
						<img src={CupIcon} alt="pizaa" width={30} height={30} />
						<span>مشروبات</span>
					</button>
				</div>

				<div className="products-container d-flex justif-content-center align-items-stretch">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</main>
			<aside className="homepage-sideMenu">
				<div className="homepage-sideMenu-header">
					<div className="searchInput-container">
						<input
							className="search-input"
							type="search"
							placeholder="اسم الطالب"
						/>
						<img
							src={SearchGrey}
							className="search-absolute-icon pointer"
							alt="search icon"
							width={25}
							height={15}
						/>
					</div>
					<span className="icon searchIcon pointer">
						<img
							src={SearchIcon}
							alt="search icon"
							width={25}
							height={15}
						/>
					</span>
					<span className="icon userIcon pointer">
						<img
							src={UserIcon}
							alt="user icon"
							width={25}
							height={15}
						/>
					</span>
				</div>

				<div className="aside-placeholder-empty">
					<div>
						<img src={EmptySide} alt="" height={80} width={120} />
					</div>
					<p>يجب عليك اختيار طالب اولا</p>
				</div>
			</aside>
		</div>
	);
}
