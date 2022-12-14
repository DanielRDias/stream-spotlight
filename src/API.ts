/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should  t be edited.

export type CreateStreamInput = {
  id?: string | null;
  name: string;
  language?: string | null;
  type?: string | null;
};

export type ModelStreamConditionInput = {
  name?: ModelStringInput | null;
  language?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelStreamConditionInput | null> | null;
  or?: Array<ModelStreamConditionInput | null> | null;
  not?: ModelStreamConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Stream = {
  __typename: "Stream";
  id: string;
  name: string;
  language?: string | null;
  type?: string | null;
  streamers?: ModelStreamerConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelStreamerConnection = {
  __typename: "ModelStreamerConnection";
  items: Array<Streamer | null>;
  nextToken?: string | null;
};

export type Streamer = {
  __typename: "Streamer";
  id: string;
  name: string;
  title?: string | null;
  language?: string | null;
  type?: string | null;
  stream?: Stream | null;
  votes?: ModelVoteConnection | null;
  viewers?: ModelViewersConnection | null;
  startedAt?: string | null;
  endedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  streamStreamersId?: string | null;
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection";
  items: Array<Vote | null>;
  nextToken?: string | null;
};

export type Vote = {
  __typename: "Vote";
  id: string;
  streamer: Streamer;
  vote: boolean;
  createdAt: string;
  updatedAt: string;
  streamerVotesId?: string | null;
  owner?: string | null;
};

export type ModelViewersConnection = {
  __typename: "ModelViewersConnection";
  items: Array<Viewers | null>;
  nextToken?: string | null;
};

export type Viewers = {
  __typename: "Viewers";
  id: string;
  streamer: Streamer;
  viewers: number;
  createdAt?: string | null;
  updatedAt: string;
  streamerViewersId?: string | null;
};

export type UpdateStreamInput = {
  id: string;
  name?: string | null;
  language?: string | null;
  type?: string | null;
};

export type DeleteStreamInput = {
  id: string;
};

export type CreateStreamerInput = {
  id?: string | null;
  name: string;
  title?: string | null;
  language?: string | null;
  type?: string | null;
  startedAt?: string | null;
  endedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  streamStreamersId?: string | null;
};

export type ModelStreamerConditionInput = {
  name?: ModelStringInput | null;
  title?: ModelStringInput | null;
  language?: ModelStringInput | null;
  type?: ModelStringInput | null;
  startedAt?: ModelStringInput | null;
  endedAt?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelStreamerConditionInput | null> | null;
  or?: Array<ModelStreamerConditionInput | null> | null;
  not?: ModelStreamerConditionInput | null;
  streamStreamersId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateStreamerInput = {
  id: string;
  name?: string | null;
  title?: string | null;
  language?: string | null;
  type?: string | null;
  startedAt?: string | null;
  endedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  streamStreamersId?: string | null;
};

export type DeleteStreamerInput = {
  id: string;
};

export type CreateViewersInput = {
  id?: string | null;
  viewers: number;
  createdAt?: string | null;
  streamerViewersId?: string | null;
};

export type ModelViewersConditionInput = {
  viewers?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelViewersConditionInput | null> | null;
  or?: Array<ModelViewersConditionInput | null> | null;
  not?: ModelViewersConditionInput | null;
  streamerViewersId?: ModelIDInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateViewersInput = {
  id: string;
  viewers?: number | null;
  createdAt?: string | null;
  streamerViewersId?: string | null;
};

export type DeleteViewersInput = {
  id: string;
};

export type CreateVoteInput = {
  id?: string | null;
  vote: boolean;
  streamerVotesId?: string | null;
};

export type ModelVoteConditionInput = {
  vote?: ModelBooleanInput | null;
  and?: Array<ModelVoteConditionInput | null> | null;
  or?: Array<ModelVoteConditionInput | null> | null;
  not?: ModelVoteConditionInput | null;
  streamerVotesId?: ModelIDInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateVoteInput = {
  id: string;
  vote?: boolean | null;
  streamerVotesId?: string | null;
};

export type DeleteVoteInput = {
  id: string;
};

export type ModelStreamFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  language?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelStreamFilterInput | null> | null;
  or?: Array<ModelStreamFilterInput | null> | null;
  not?: ModelStreamFilterInput | null;
};

export type ModelStreamConnection = {
  __typename: "ModelStreamConnection";
  items: Array<Stream | null>;
  nextToken?: string | null;
};

export type ModelStreamerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  title?: ModelStringInput | null;
  language?: ModelStringInput | null;
  type?: ModelStringInput | null;
  startedAt?: ModelStringInput | null;
  endedAt?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelStreamerFilterInput | null> | null;
  or?: Array<ModelStreamerFilterInput | null> | null;
  not?: ModelStreamerFilterInput | null;
  streamStreamersId?: ModelIDInput | null;
};

export type ModelViewersFilterInput = {
  id?: ModelIDInput | null;
  viewers?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelViewersFilterInput | null> | null;
  or?: Array<ModelViewersFilterInput | null> | null;
  not?: ModelViewersFilterInput | null;
  streamerViewersId?: ModelIDInput | null;
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null;
  vote?: ModelBooleanInput | null;
  and?: Array<ModelVoteFilterInput | null> | null;
  or?: Array<ModelVoteFilterInput | null> | null;
  not?: ModelVoteFilterInput | null;
  streamerVotesId?: ModelIDInput | null;
};

export type ModelSubscriptionStreamFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  language?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStreamFilterInput | null> | null;
  or?: Array<ModelSubscriptionStreamFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStreamerFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  language?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  startedAt?: ModelSubscriptionStringInput | null;
  endedAt?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStreamerFilterInput | null> | null;
  or?: Array<ModelSubscriptionStreamerFilterInput | null> | null;
};

export type ModelSubscriptionViewersFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  viewers?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionViewersFilterInput | null> | null;
  or?: Array<ModelSubscriptionViewersFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateStreamMutationVariables = {
  input: CreateStreamInput;
  condition?: ModelStreamConditionInput | null;
};

export type CreateStreamMutation = {
  createStream?: {
    __typename: "Stream";
    id: string;
    name: string;
    language?: string | null;
    type?: string | null;
    streamers?: {
      __typename: "ModelStreamerConnection";
      items: Array<{
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateStreamMutationVariables = {
  input: UpdateStreamInput;
  condition?: ModelStreamConditionInput | null;
};

export type UpdateStreamMutation = {
  updateStream?: {
    __typename: "Stream";
    id: string;
    name: string;
    language?: string | null;
    type?: string | null;
    streamers?: {
      __typename: "ModelStreamerConnection";
      items: Array<{
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteStreamMutationVariables = {
  input: DeleteStreamInput;
  condition?: ModelStreamConditionInput | null;
};

export type DeleteStreamMutation = {
  deleteStream?: {
    __typename: "Stream";
    id: string;
    name: string;
    language?: string | null;
    type?: string | null;
    streamers?: {
      __typename: "ModelStreamerConnection";
      items: Array<{
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateStreamerMutationVariables = {
  input: CreateStreamerInput;
  condition?: ModelStreamerConditionInput | null;
};

export type CreateStreamerMutation = {
  createStreamer?: {
    __typename: "Streamer";
    id: string;
    name: string;
    title?: string | null;
    language?: string | null;
    type?: string | null;
    stream?: {
      __typename: "Stream";
      id: string;
      name: string;
      language?: string | null;
      type?: string | null;
      streamers?: {
        __typename: "ModelStreamerConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    votes?: {
      __typename: "ModelVoteConnection";
      items: Array<{
        __typename: "Vote";
        id: string;
        vote: boolean;
        createdAt: string;
        updatedAt: string;
        streamerVotesId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewersConnection";
      items: Array<{
        __typename: "Viewers";
        id: string;
        viewers: number;
        createdAt?: string | null;
        updatedAt: string;
        streamerViewersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    startedAt?: string | null;
    endedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    streamStreamersId?: string | null;
  } | null;
};

export type UpdateStreamerMutationVariables = {
  input: UpdateStreamerInput;
  condition?: ModelStreamerConditionInput | null;
};

export type UpdateStreamerMutation = {
  updateStreamer?: {
    __typename: "Streamer";
    id: string;
    name: string;
    title?: string | null;
    language?: string | null;
    type?: string | null;
    stream?: {
      __typename: "Stream";
      id: string;
      name: string;
      language?: string | null;
      type?: string | null;
      streamers?: {
        __typename: "ModelStreamerConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    votes?: {
      __typename: "ModelVoteConnection";
      items: Array<{
        __typename: "Vote";
        id: string;
        vote: boolean;
        createdAt: string;
        updatedAt: string;
        streamerVotesId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewersConnection";
      items: Array<{
        __typename: "Viewers";
        id: string;
        viewers: number;
        createdAt?: string | null;
        updatedAt: string;
        streamerViewersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    startedAt?: string | null;
    endedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    streamStreamersId?: string | null;
  } | null;
};

export type DeleteStreamerMutationVariables = {
  input: DeleteStreamerInput;
  condition?: ModelStreamerConditionInput | null;
};

export type DeleteStreamerMutation = {
  deleteStreamer?: {
    __typename: "Streamer";
    id: string;
    name: string;
    title?: string | null;
    language?: string | null;
    type?: string | null;
    stream?: {
      __typename: "Stream";
      id: string;
      name: string;
      language?: string | null;
      type?: string | null;
      streamers?: {
        __typename: "ModelStreamerConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    votes?: {
      __typename: "ModelVoteConnection";
      items: Array<{
        __typename: "Vote";
        id: string;
        vote: boolean;
        createdAt: string;
        updatedAt: string;
        streamerVotesId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewersConnection";
      items: Array<{
        __typename: "Viewers";
        id: string;
        viewers: number;
        createdAt?: string | null;
        updatedAt: string;
        streamerViewersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    startedAt?: string | null;
    endedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    streamStreamersId?: string | null;
  } | null;
};

export type CreateViewersMutationVariables = {
  input: CreateViewersInput;
  condition?: ModelViewersConditionInput | null;
};

export type CreateViewersMutation = {
  createViewers?: {
    __typename: "Viewers";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    viewers: number;
    createdAt?: string | null;
    updatedAt: string;
    streamerViewersId?: string | null;
  } | null;
};

export type UpdateViewersMutationVariables = {
  input: UpdateViewersInput;
  condition?: ModelViewersConditionInput | null;
};

export type UpdateViewersMutation = {
  updateViewers?: {
    __typename: "Viewers";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    viewers: number;
    createdAt?: string | null;
    updatedAt: string;
    streamerViewersId?: string | null;
  } | null;
};

export type DeleteViewersMutationVariables = {
  input: DeleteViewersInput;
  condition?: ModelViewersConditionInput | null;
};

export type DeleteViewersMutation = {
  deleteViewers?: {
    __typename: "Viewers";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    viewers: number;
    createdAt?: string | null;
    updatedAt: string;
    streamerViewersId?: string | null;
  } | null;
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput;
  condition?: ModelVoteConditionInput | null;
};

export type CreateVoteMutation = {
  createVote?: {
    __typename: "Vote";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    vote: boolean;
    createdAt: string;
    updatedAt: string;
    streamerVotesId?: string | null;
    owner?: string | null;
  } | null;
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput;
  condition?: ModelVoteConditionInput | null;
};

export type UpdateVoteMutation = {
  updateVote?: {
    __typename: "Vote";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    vote: boolean;
    createdAt: string;
    updatedAt: string;
    streamerVotesId?: string | null;
    owner?: string | null;
  } | null;
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput;
  condition?: ModelVoteConditionInput | null;
};

export type DeleteVoteMutation = {
  deleteVote?: {
    __typename: "Vote";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    vote: boolean;
    createdAt: string;
    updatedAt: string;
    streamerVotesId?: string | null;
    owner?: string | null;
  } | null;
};

export type GetStreamQueryVariables = {
  id: string;
};

export type GetStreamQuery = {
  getStream?: {
    __typename: "Stream";
    id: string;
    name: string;
    language?: string | null;
    type?: string | null;
    streamers?: {
      __typename: "ModelStreamerConnection";
      items: Array<{
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListStreamsQueryVariables = {
  filter?: ModelStreamFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListStreamsQuery = {
  listStreams?: {
    __typename: "ModelStreamConnection";
    items: Array<{
      __typename: "Stream";
      id: string;
      name: string;
      language?: string | null;
      type?: string | null;
      streamers?: {
        __typename: "ModelStreamerConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetStreamerQueryVariables = {
  id: string;
};

export type GetStreamerQuery = {
  getStreamer?: {
    __typename: "Streamer";
    id: string;
    name: string;
    title?: string | null;
    language?: string | null;
    type?: string | null;
    stream?: {
      __typename: "Stream";
      id: string;
      name: string;
      language?: string | null;
      type?: string | null;
      streamers?: {
        __typename: "ModelStreamerConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    votes?: {
      __typename: "ModelVoteConnection";
      items: Array<{
        __typename: "Vote";
        id: string;
        vote: boolean;
        createdAt: string;
        updatedAt: string;
        streamerVotesId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewersConnection";
      items: Array<{
        __typename: "Viewers";
        id: string;
        viewers: number;
        createdAt?: string | null;
        updatedAt: string;
        streamerViewersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    startedAt?: string | null;
    endedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    streamStreamersId?: string | null;
  } | null;
};

export type ListStreamersQueryVariables = {
  filter?: ModelStreamerFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListStreamersQuery = {
  listStreamers?: {
    __typename: "ModelStreamerConnection";
    items: Array<{
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetViewersQueryVariables = {
  id: string;
};

export type GetViewersQuery = {
  getViewers?: {
    __typename: "Viewers";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    viewers: number;
    createdAt?: string | null;
    updatedAt: string;
    streamerViewersId?: string | null;
  } | null;
};

export type ListViewersQueryVariables = {
  filter?: ModelViewersFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListViewersQuery = {
  listViewers?: {
    __typename: "ModelViewersConnection";
    items: Array<{
      __typename: "Viewers";
      id: string;
      streamer: {
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      };
      viewers: number;
      createdAt?: string | null;
      updatedAt: string;
      streamerViewersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetVoteQueryVariables = {
  id: string;
};

export type GetVoteQuery = {
  getVote?: {
    __typename: "Vote";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    vote: boolean;
    createdAt: string;
    updatedAt: string;
    streamerVotesId?: string | null;
    owner?: string | null;
  } | null;
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListVotesQuery = {
  listVotes?: {
    __typename: "ModelVoteConnection";
    items: Array<{
      __typename: "Vote";
      id: string;
      streamer: {
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      };
      vote: boolean;
      createdAt: string;
      updatedAt: string;
      streamerVotesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateStreamSubscriptionVariables = {
  filter?: ModelSubscriptionStreamFilterInput | null;
};

export type OnCreateStreamSubscription = {
  onCreateStream?: {
    __typename: "Stream";
    id: string;
    name: string;
    language?: string | null;
    type?: string | null;
    streamers?: {
      __typename: "ModelStreamerConnection";
      items: Array<{
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateStreamSubscriptionVariables = {
  filter?: ModelSubscriptionStreamFilterInput | null;
};

export type OnUpdateStreamSubscription = {
  onUpdateStream?: {
    __typename: "Stream";
    id: string;
    name: string;
    language?: string | null;
    type?: string | null;
    streamers?: {
      __typename: "ModelStreamerConnection";
      items: Array<{
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteStreamSubscriptionVariables = {
  filter?: ModelSubscriptionStreamFilterInput | null;
};

export type OnDeleteStreamSubscription = {
  onDeleteStream?: {
    __typename: "Stream";
    id: string;
    name: string;
    language?: string | null;
    type?: string | null;
    streamers?: {
      __typename: "ModelStreamerConnection";
      items: Array<{
        __typename: "Streamer";
        id: string;
        name: string;
        title?: string | null;
        language?: string | null;
        type?: string | null;
        startedAt?: string | null;
        endedAt?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        streamStreamersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateStreamerSubscriptionVariables = {
  filter?: ModelSubscriptionStreamerFilterInput | null;
};

export type OnCreateStreamerSubscription = {
  onCreateStreamer?: {
    __typename: "Streamer";
    id: string;
    name: string;
    title?: string | null;
    language?: string | null;
    type?: string | null;
    stream?: {
      __typename: "Stream";
      id: string;
      name: string;
      language?: string | null;
      type?: string | null;
      streamers?: {
        __typename: "ModelStreamerConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    votes?: {
      __typename: "ModelVoteConnection";
      items: Array<{
        __typename: "Vote";
        id: string;
        vote: boolean;
        createdAt: string;
        updatedAt: string;
        streamerVotesId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewersConnection";
      items: Array<{
        __typename: "Viewers";
        id: string;
        viewers: number;
        createdAt?: string | null;
        updatedAt: string;
        streamerViewersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    startedAt?: string | null;
    endedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    streamStreamersId?: string | null;
  } | null;
};

export type OnUpdateStreamerSubscriptionVariables = {
  filter?: ModelSubscriptionStreamerFilterInput | null;
};

export type OnUpdateStreamerSubscription = {
  onUpdateStreamer?: {
    __typename: "Streamer";
    id: string;
    name: string;
    title?: string | null;
    language?: string | null;
    type?: string | null;
    stream?: {
      __typename: "Stream";
      id: string;
      name: string;
      language?: string | null;
      type?: string | null;
      streamers?: {
        __typename: "ModelStreamerConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    votes?: {
      __typename: "ModelVoteConnection";
      items: Array<{
        __typename: "Vote";
        id: string;
        vote: boolean;
        createdAt: string;
        updatedAt: string;
        streamerVotesId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewersConnection";
      items: Array<{
        __typename: "Viewers";
        id: string;
        viewers: number;
        createdAt?: string | null;
        updatedAt: string;
        streamerViewersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    startedAt?: string | null;
    endedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    streamStreamersId?: string | null;
  } | null;
};

export type OnDeleteStreamerSubscriptionVariables = {
  filter?: ModelSubscriptionStreamerFilterInput | null;
};

export type OnDeleteStreamerSubscription = {
  onDeleteStreamer?: {
    __typename: "Streamer";
    id: string;
    name: string;
    title?: string | null;
    language?: string | null;
    type?: string | null;
    stream?: {
      __typename: "Stream";
      id: string;
      name: string;
      language?: string | null;
      type?: string | null;
      streamers?: {
        __typename: "ModelStreamerConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    votes?: {
      __typename: "ModelVoteConnection";
      items: Array<{
        __typename: "Vote";
        id: string;
        vote: boolean;
        createdAt: string;
        updatedAt: string;
        streamerVotesId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewersConnection";
      items: Array<{
        __typename: "Viewers";
        id: string;
        viewers: number;
        createdAt?: string | null;
        updatedAt: string;
        streamerViewersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    startedAt?: string | null;
    endedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    streamStreamersId?: string | null;
  } | null;
};

export type OnCreateViewersSubscriptionVariables = {
  filter?: ModelSubscriptionViewersFilterInput | null;
};

export type OnCreateViewersSubscription = {
  onCreateViewers?: {
    __typename: "Viewers";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    viewers: number;
    createdAt?: string | null;
    updatedAt: string;
    streamerViewersId?: string | null;
  } | null;
};

export type OnUpdateViewersSubscriptionVariables = {
  filter?: ModelSubscriptionViewersFilterInput | null;
};

export type OnUpdateViewersSubscription = {
  onUpdateViewers?: {
    __typename: "Viewers";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    viewers: number;
    createdAt?: string | null;
    updatedAt: string;
    streamerViewersId?: string | null;
  } | null;
};

export type OnDeleteViewersSubscriptionVariables = {
  filter?: ModelSubscriptionViewersFilterInput | null;
};

export type OnDeleteViewersSubscription = {
  onDeleteViewers?: {
    __typename: "Viewers";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    viewers: number;
    createdAt?: string | null;
    updatedAt: string;
    streamerViewersId?: string | null;
  } | null;
};

export type OnCreateVoteSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateVoteSubscription = {
  onCreateVote?: {
    __typename: "Vote";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    vote: boolean;
    createdAt: string;
    updatedAt: string;
    streamerVotesId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateVoteSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateVoteSubscription = {
  onUpdateVote?: {
    __typename: "Vote";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    vote: boolean;
    createdAt: string;
    updatedAt: string;
    streamerVotesId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteVoteSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteVoteSubscription = {
  onDeleteVote?: {
    __typename: "Vote";
    id: string;
    streamer: {
      __typename: "Streamer";
      id: string;
      name: string;
      title?: string | null;
      language?: string | null;
      type?: string | null;
      stream?: {
        __typename: "Stream";
        id: string;
        name: string;
        language?: string | null;
        type?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      votes?: {
        __typename: "ModelVoteConnection";
        nextToken?: string | null;
      } | null;
      viewers?: {
        __typename: "ModelViewersConnection";
        nextToken?: string | null;
      } | null;
      startedAt?: string | null;
      endedAt?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      streamStreamersId?: string | null;
    };
    vote: boolean;
    createdAt: string;
    updatedAt: string;
    streamerVotesId?: string | null;
    owner?: string | null;
  } | null;
};
