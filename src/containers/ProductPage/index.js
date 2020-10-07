import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { productAction } from '../../redux/actions';
import { showProductImage } from '../../urlconfig';
import './style.css';

function ProductPage({ productAction, match, getSlugProduct }) {
  // console.log(getSlugProduct);
  useEffect(() => {
    productAction(match.params.slug);
  }, []);
  return (
    <Layout>
      {
        /* {Object.keys(getSlugProduct.productsByPrice.map((key, index) => key))} */ console.log(
          getSlugProduct
        )
      }
      {Object.keys(getSlugProduct.productsByPrice).map((key, index) => (
        <div className='card'>
          <div className='cardHeader'>
            <div>
              {match.params.slug} mobile {key}
            </div>
            <button>view all</button>
          </div>
          <div style={{ display: 'flex' }}>
            {getSlugProduct.productsByPrice[key].map((product) => (
              <div className='productContainer'>
                <div className='productImgContainer'>
                  {product.productPictures ? (
                    <img
                      src={showProductImage(product.productPictures[0])}
                      alt=''
                    />
                  ) : null}
                </div>
                <div className='productInfo'>
                  <div style={{ margin: '5px 0' }}>{product.name}</div>
                  <div>
                    <span>4.3</span>&nbsp;
                    <span>3353</span>
                  </div>
                  <div className='productPrice'>{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  getSlugProduct: state.getSlugProduct,
});

const mapDispatchToProps = (dispatch) => ({
  productAction: (slug) => dispatch(productAction(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
