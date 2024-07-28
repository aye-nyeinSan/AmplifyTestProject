/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTransaction = /* GraphQL */ `subscription OnCreateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onCreateTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTransactionSubscriptionVariables,
  APITypes.OnCreateTransactionSubscription
>;
export const onUpdateTransaction = /* GraphQL */ `subscription OnUpdateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onUpdateTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTransactionSubscriptionVariables,
  APITypes.OnUpdateTransactionSubscription
>;
export const onDeleteTransaction = /* GraphQL */ `subscription OnDeleteTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onDeleteTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTransactionSubscriptionVariables,
  APITypes.OnDeleteTransactionSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateSupportRegion = /* GraphQL */ `subscription OnCreateSupportRegion(
  $filter: ModelSubscriptionSupportRegionFilterInput
) {
  onCreateSupportRegion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSupportRegionSubscriptionVariables,
  APITypes.OnCreateSupportRegionSubscription
>;
export const onUpdateSupportRegion = /* GraphQL */ `subscription OnUpdateSupportRegion(
  $filter: ModelSubscriptionSupportRegionFilterInput
) {
  onUpdateSupportRegion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSupportRegionSubscriptionVariables,
  APITypes.OnUpdateSupportRegionSubscription
>;
export const onDeleteSupportRegion = /* GraphQL */ `subscription OnDeleteSupportRegion(
  $filter: ModelSubscriptionSupportRegionFilterInput
) {
  onDeleteSupportRegion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSupportRegionSubscriptionVariables,
  APITypes.OnDeleteSupportRegionSubscription
>;
export const onCreateWallet = /* GraphQL */ `subscription OnCreateWallet($filter: ModelSubscriptionWalletFilterInput) {
  onCreateWallet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWalletSubscriptionVariables,
  APITypes.OnCreateWalletSubscription
>;
export const onUpdateWallet = /* GraphQL */ `subscription OnUpdateWallet($filter: ModelSubscriptionWalletFilterInput) {
  onUpdateWallet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWalletSubscriptionVariables,
  APITypes.OnUpdateWalletSubscription
>;
export const onDeleteWallet = /* GraphQL */ `subscription OnDeleteWallet($filter: ModelSubscriptionWalletFilterInput) {
  onDeleteWallet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWalletSubscriptionVariables,
  APITypes.OnDeleteWalletSubscription
>;
export const onCreateAgent = /* GraphQL */ `subscription OnCreateAgent($filter: ModelSubscriptionAgentFilterInput) {
  onCreateAgent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAgentSubscriptionVariables,
  APITypes.OnCreateAgentSubscription
>;
export const onUpdateAgent = /* GraphQL */ `subscription OnUpdateAgent($filter: ModelSubscriptionAgentFilterInput) {
  onUpdateAgent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAgentSubscriptionVariables,
  APITypes.OnUpdateAgentSubscription
>;
export const onDeleteAgent = /* GraphQL */ `subscription OnDeleteAgent($filter: ModelSubscriptionAgentFilterInput) {
  onDeleteAgent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAgentSubscriptionVariables,
  APITypes.OnDeleteAgentSubscription
>;
