import {useStaticQuery, grapql} from 'gatsby';

const useSiteMetaData = () => {

    const {site} = useStaticQuery(graphql`
    
    query{

        site{


            siteMetadata{

                title
                description
                author
                siteURL

            }
        }


    }
    
    
    
    
    `);
    return site.siteMetadata;


}


export default useSiteMetaData;