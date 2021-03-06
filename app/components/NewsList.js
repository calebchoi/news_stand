import React from 'react';
import PropTypes from 'prop-types';
import uniq from 'node-uniq';

import NewsItem from './NewsItem';

const NewsList = props => (
  <div className="news-list">
    {props.newsArticles.length === 0 ?
      <h3 className="message">No articles found. Please try another search</h3> :
      props.newsArticles && uniq(props.newsArticles, i => i.url)
        .map((article) => {
          let favorited = false;
          props.favorites.forEach((favArticle) => {
            if (article.url === favArticle.url) {
              favorited = true;
            }
          });
          return <NewsItem article={article} key={article.url} favorited={favorited} />;
        })
    }
  </div>
);

NewsList.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;
