/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPet = /* GraphQL */ `mutation CreatePet(
  $input: CreatePetInput!
  $condition: ModelPetConditionInput
) {
  createPet(input: $input, condition: $condition) {
    id
    name
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePetMutationVariables,
  APITypes.CreatePetMutation
>;
export const updatePet = /* GraphQL */ `mutation UpdatePet(
  $input: UpdatePetInput!
  $condition: ModelPetConditionInput
) {
  updatePet(input: $input, condition: $condition) {
    id
    name
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePetMutationVariables,
  APITypes.UpdatePetMutation
>;
export const deletePet = /* GraphQL */ `mutation DeletePet(
  $input: DeletePetInput!
  $condition: ModelPetConditionInput
) {
  deletePet(input: $input, condition: $condition) {
    id
    name
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePetMutationVariables,
  APITypes.DeletePetMutation
>;

export const createTransaction = /* GraphQL */ `mutation SubmitTransaction(
  $transactionId: ID!,
  $customerId: String!,
  $supportRegionId: String!,
  $walletId: String!,
  $amount: Float!,
  $screenshot: Blob,
  $agentId: String!,
  $paymentCheck: Boolean!,
  $paymentCheckTime: AWSDateTime,
  $note: String,
  $transactionDate: AWSDateTime!,
  $paymentDeniedCheck: Boolean!
) {
  createTransaction(input: {
    transactionId: $transactionId,
    customerId: $customerId,
    supportRegionId: $supportRegionId,
    walletId: $walletId,
    amount: $amount,
    screenshot: $screenshot,
    agentId: $agentId,
    paymentCheck: $paymentCheck,
    paymentCheckTime: $paymentCheckTime,
    note: $note,
    transactionDate: $transactionDate,
    paymentDeniedCheck: $paymentDeniedCheck
  }) {
    transactionId
    customerId
    supportRegionId
    walletId
    amount
    screenshot
    agentId
    paymentCheck
    paymentCheckTime
    note
    transactionDate
    paymentDeniedCheck
  }
}
`;