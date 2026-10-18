export const ProductCard = ({ image, title }) => {
    return (
        <div className="product-card">
            <img className="product-img" src={image} title={title} />
            <span>{title}</span>
        </div>
    )
}