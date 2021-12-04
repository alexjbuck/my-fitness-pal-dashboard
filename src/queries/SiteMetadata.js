import { useStaticQuery, graphql } from 'gatsby';

const SiteMetadata = () => {
  const { site } = useStaticQuery(
  graphql`
    query {
    site {
      siteMetadata {
      title
      description
      siteUrl
      }
    }
    }
  `,
  );
  return site.siteMetadata;
};

export default SiteMetadata;
