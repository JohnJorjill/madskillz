import { ImageLoader } from "components/common";

export const Skill: React.FC<{ skill: any }> = ({ skill }) => {
  const history = useHistory();

  const onClickItem = () => {
    if (!skill) return;

    if (skill.id) {
      history.push(`/product/${skill.id}`);
    }
  };

  const itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;

  const handleAddToBasket = () => {
    if (addToBasket)
      addToBasket({ ...product, selectedSize: product.sizes[0] });
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!product.id ? "product-loading" : ""}`}
        style={{
          border: product && itemOnBasket ? "1px solid #a6a5a5" : "",
          boxShadow:
            product && itemOnBasket ? "0 10px 15px rgba(0, 0, 0, .07)" : "none",
        }}
      >
        {itemOnBasket && (
          <CheckOutlined className="fa fa-check product-card-check" />
        )}
        <div
          className="product-card-content"
          onClick={onClickItem}
          role="presentation"
        >
          <div className="product-card-img-wrapper">
            {product.image ? (
              <ImageLoader
                alt={product.name}
                className="product-card-img"
                src={product.image}
              />
            ) : (
              <Skeleton width="100%" height="90%" />
            )}
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {product.name || <Skeleton width={80} />}
            </h5>
            <p className="product-card-brand">
              {product.brand || <Skeleton width={60} />}
            </p>
            <h4 className="product-card-price">
              {product.price ? (
                displayMoney(product.price)
              ) : (
                <Skeleton width={40} />
              )}
            </h4>
          </div>
        </div>
        {product.id && (
          <button
            className={`product-card-button button-small button button-block ${
              itemOnBasket ? "button-border button-border-gray" : ""
            }`}
            onClick={handleAddToBasket}
            type="button"
          >
            {itemOnBasket ? "Remove from basket" : "Add to basket"}
          </button>
        )}
      </div>
    </SkeletonTheme>
  );
};