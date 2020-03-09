import React from 'react';
import Media from 'react-media';
import { variables } from '../../variables';
//components
import ArticleHorizontal from './ArticleHorizontal';
import ArticleVertical from './ArticleVertical';


const Article = ({ data = {}, source = '' }) => {

    return(
        <Media queries={{
            mobile: `(${variables.mobileMediaRule})`,
            desktop:`(${variables.desktopMediaRule})`
          }}>
            {matches => (
              <>
                {matches.mobile && 
                    <ArticleVertical {...{...data, source }} />
                    }
                {matches.desktop && 
                    <ArticleHorizontal {...{...data, source }} />
                    }
              </>
            )}
          </Media> 
    )

};

export default Article;


