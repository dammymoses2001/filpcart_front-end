import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { categoryAction } from '../../redux/actions';
import './style.css';

function MenuHeader({ categoryAction, category }) {
  //
  //
  useEffect(() => {
    categoryAction();
  }, []);

  const renderCategories = (category) => {
    return category.map((cate) => (
      //categoryList.push(
      <li key={cate.name}>
        {cate.parentId ? (
          <a href={cate.slug}>{cate.name}</a>
        ) : (
          <span> {cate.name}</span>
        )}

        {cate.children.length > 0 ? (
          <ul> {renderCategories(cate.children)} </ul>
        ) : null}
      </li>
    ));
  };
  return (
    <div className='menuHeader'>
      <ul>
        {category.categories.length > 0
          ? renderCategories(category.categories)
          : null}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  category: state.category,
});

const mapDispatchToProps = (dispatch) => ({
  categoryAction: () => dispatch(categoryAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader);
