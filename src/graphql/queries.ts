/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTransaction = /* GraphQL */ `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
    id
    customer {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    supportRegion {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    wallet {
      id
      WalletAccount
      createdAt
      updatedAt
      __typename
    }
    amount
    screenshot
    agent {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    paymentCheck
    paymentCheckTime
    note
    transactionDate
    paymentDeniedCheck
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTransactionQueryVariables,
  APITypes.GetTransactionQuery
>;
export const listTransactions = /* GraphQL */ `query ListTransactions(
  $id: ID
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTransactions(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      amount
      screenshot
      paymentCheck
      paymentCheckTime
      note
      transactionDate
      paymentDeniedCheck
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionsQueryVariables,
  APITypes.ListTransactionsQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    id
    name
    transactions {
      id
      amount
      screenshot
      paymentCheck
      paymentCheckTime
      note
      transactionDate
      paymentDeniedCheck
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $id: ID
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCustomers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const getSupportRegion = /* GraphQL */ `query GetSupportRegion($id: ID!) {
  getSupportRegion(id: $id) {
    id
    name
    transactions {
      id
      amount
      screenshot
      paymentCheck
      paymentCheckTime
      note
      transactionDate
      paymentDeniedCheck
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSupportRegionQueryVariables,
  APITypes.GetSupportRegionQuery
>;
export const listSupportRegions = /* GraphQL */ `query ListSupportRegions(
  $id: ID
  $filter: ModelSupportRegionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSupportRegions(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSupportRegionsQueryVariables,
  APITypes.ListSupportRegionsQuery
>;
export const getWallet = /* GraphQL */ `query GetWallet($id: ID!) {
  getWallet(id: $id) {
    id
    WalletAccount
    transactions {
      id
      amount
      screenshot
      paymentCheck
      paymentCheckTime
      note
      transactionDate
      paymentDeniedCheck
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetWalletQueryVariables, APITypes.GetWalletQuery>;
export const listWallets = /* GraphQL */ `query ListWallets(
  $id: ID
  $filter: ModelWalletFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listWallets(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      WalletAccount
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWalletsQueryVariables,
  APITypes.ListWalletsQuery
>;
export const getAgent = /* GraphQL */ `query GetAgent($id: ID!) {
  getAgent(id: $id) {
    id
    name
    transactions {
      id
      amount
      screenshot
      paymentCheck
      paymentCheckTime
      note
      transactionDate
      paymentDeniedCheck
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAgentQueryVariables, APITypes.GetAgentQuery>;
export const listAgents = /* GraphQL */ `query ListAgents(
  $id: ID
  $filter: ModelAgentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAgents(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAgentsQueryVariables,
  APITypes.ListAgentsQuery
>;
