import { gql } from "@apollo/client";

export const kbQuery = gql`
  query knowledgeBaseCategoryDetail($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
      title
      description
      icon
      code
      articles {
        _id
        title
        summary
        content
        status
        isPrivate
        __typename
        image {
          url
        }
      }
      firstTopic {
        _id
        title
        __typename
      }
      __typename
    }
  }
`;
