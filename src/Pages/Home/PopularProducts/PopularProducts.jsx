import PopularProductsCard from "./PopularProductsCard/PopularProductsCard";

const PopularProducts = () => {
    return (
        <div>
            <div className="text-center text-xl text-black my-10 space-y-5">
                <h4 className="font-bold text-[#FF3811]">Popular Products</h4>
                <h2 className="text-3xl font-bold">Browse Our Products</h2>
                <p className="capitalize">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div>
                <PopularProductsCard></PopularProductsCard>
            </div>
            <div className="my-5 flex justify-center">
                <button className="btn btn-outline border-[#FF3811] border-2 text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-white">More Products</button>
            </div>
        </div>
    );
};

export default PopularProducts;