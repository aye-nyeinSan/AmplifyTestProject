/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePetInput = {
  id?: string | null,
  name: string,
  type: string,
  owner: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPetConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPetConditionInput | null > | null,
  or?: Array< ModelPetConditionInput | null > | null,
  not?: ModelPetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type pet = {
  __typename: "pet",
  id: string,
  name: string,
  type: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePetInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePetInput = {
  id: string,
};

export type ModelPetFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPetFilterInput | null > | null,
  or?: Array< ModelPetFilterInput | null > | null,
  not?: ModelPetFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPetConnection = {
  __typename: "ModelPetConnection",
  items:  Array<pet | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  owner?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPetFilterInput | null > | null,
  or?: Array< ModelSubscriptionPetFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreatePetMutationVariables = {
  input: CreatePetInput,
  condition?: ModelPetConditionInput | null,
};

export type CreatePetMutation = {
  createPet?:  {
    __typename: "pet",
    id: string,
    name: string,
    type: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePetMutationVariables = {
  input: UpdatePetInput,
  condition?: ModelPetConditionInput | null,
};

export type UpdatePetMutation = {
  updatePet?:  {
    __typename: "pet",
    id: string,
    name: string,
    type: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePetMutationVariables = {
  input: DeletePetInput,
  condition?: ModelPetConditionInput | null,
};

export type DeletePetMutation = {
  deletePet?:  {
    __typename: "pet",
    id: string,
    name: string,
    type: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPetQueryVariables = {
  id: string,
};

export type GetPetQuery = {
  getPet?:  {
    __typename: "pet",
    id: string,
    name: string,
    type: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPetsQueryVariables = {
  filter?: ModelPetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPetsQuery = {
  listPets?:  {
    __typename: "ModelPetConnection",
    items:  Array< {
      __typename: "pet",
      id: string,
      name: string,
      type: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePetSubscriptionVariables = {
  filter?: ModelSubscriptionPetFilterInput | null,
};

export type OnCreatePetSubscription = {
  onCreatePet?:  {
    __typename: "pet",
    id: string,
    name: string,
    type: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePetSubscriptionVariables = {
  filter?: ModelSubscriptionPetFilterInput | null,
};

export type OnUpdatePetSubscription = {
  onUpdatePet?:  {
    __typename: "pet",
    id: string,
    name: string,
    type: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePetSubscriptionVariables = {
  filter?: ModelSubscriptionPetFilterInput | null,
};

export type OnDeletePetSubscription = {
  onDeletePet?:  {
    __typename: "pet",
    id: string,
    name: string,
    type: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
