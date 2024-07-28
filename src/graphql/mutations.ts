/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTransaction = /* GraphQL */ `mutation CreateTransaction(
  $input: CreateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  createTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTransactionMutationVariables,
  APITypes.CreateTransactionMutation
>;
export const updateTransaction = /* GraphQL */ `mutation UpdateTransaction(
  $input: UpdateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  updateTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTransactionMutationVariables,
  APITypes.UpdateTransactionMutation
>;
export const deleteTransaction = /* GraphQL */ `mutation DeleteTransaction(
  $input: DeleteTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  deleteTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTransactionMutationVariables,
  APITypes.DeleteTransactionMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createSupportRegion = /* GraphQL */ `mutation CreateSupportRegion(
  $input: CreateSupportRegionInput!
  $condition: ModelSupportRegionConditionInput
) {
  createSupportRegion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSupportRegionMutationVariables,
  APITypes.CreateSupportRegionMutation
>;
export const updateSupportRegion = /* GraphQL */ `mutation UpdateSupportRegion(
  $input: UpdateSupportRegionInput!
  $condition: ModelSupportRegionConditionInput
) {
  updateSupportRegion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSupportRegionMutationVariables,
  APITypes.UpdateSupportRegionMutation
>;
export const deleteSupportRegion = /* GraphQL */ `mutation DeleteSupportRegion(
  $input: DeleteSupportRegionInput!
  $condition: ModelSupportRegionConditionInput
) {
  deleteSupportRegion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSupportRegionMutationVariables,
  APITypes.DeleteSupportRegionMutation
>;
export const createWallet = /* GraphQL */ `mutation CreateWallet(
  $input: CreateWalletInput!
  $condition: ModelWalletConditionInput
) {
  createWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateWalletMutationVariables,
  APITypes.CreateWalletMutation
>;
export const updateWallet = /* GraphQL */ `mutation UpdateWallet(
  $input: UpdateWalletInput!
  $condition: ModelWalletConditionInput
) {
  updateWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateWalletMutationVariables,
  APITypes.UpdateWalletMutation
>;
export const deleteWallet = /* GraphQL */ `mutation DeleteWallet(
  $input: DeleteWalletInput!
  $condition: ModelWalletConditionInput
) {
  deleteWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteWalletMutationVariables,
  APITypes.DeleteWalletMutation
>;
export const createAgent = /* GraphQL */ `mutation CreateAgent(
  $input: CreateAgentInput!
  $condition: ModelAgentConditionInput
) {
  createAgent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAgentMutationVariables,
  APITypes.CreateAgentMutation
>;
export const updateAgent = /* GraphQL */ `mutation UpdateAgent(
  $input: UpdateAgentInput!
  $condition: ModelAgentConditionInput
) {
  updateAgent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAgentMutationVariables,
  APITypes.UpdateAgentMutation
>;
export const deleteAgent = /* GraphQL */ `mutation DeleteAgent(
  $input: DeleteAgentInput!
  $condition: ModelAgentConditionInput
) {
  deleteAgent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAgentMutationVariables,
  APITypes.DeleteAgentMutation
>;
