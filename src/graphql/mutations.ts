/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStream = /* GraphQL */ `
  mutation CreateStream(
    $input: CreateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    createStream(input: $input, condition: $condition) {
      id
      name
      language
      type
      streamers {
        items {
          id
          name
          title
          language
          type
          startedAt
          endedAt
          createdAt
          updatedAt
          streamStreamersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStream = /* GraphQL */ `
  mutation UpdateStream(
    $input: UpdateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    updateStream(input: $input, condition: $condition) {
      id
      name
      language
      type
      streamers {
        items {
          id
          name
          title
          language
          type
          startedAt
          endedAt
          createdAt
          updatedAt
          streamStreamersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStream = /* GraphQL */ `
  mutation DeleteStream(
    $input: DeleteStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    deleteStream(input: $input, condition: $condition) {
      id
      name
      language
      type
      streamers {
        items {
          id
          name
          title
          language
          type
          startedAt
          endedAt
          createdAt
          updatedAt
          streamStreamersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStreamer = /* GraphQL */ `
  mutation CreateStreamer(
    $input: CreateStreamerInput!
    $condition: ModelStreamerConditionInput
  ) {
    createStreamer(input: $input, condition: $condition) {
      id
      name
      title
      language
      type
      stream {
        id
        name
        language
        type
        streamers {
          nextToken
        }
        createdAt
        updatedAt
      }
      votes {
        items {
          id
          vote
          createdAt
          updatedAt
          streamerVotesId
          owner
        }
        nextToken
      }
      startedAt
      endedAt
      createdAt
      updatedAt
      streamStreamersId
    }
  }
`;
export const updateStreamer = /* GraphQL */ `
  mutation UpdateStreamer(
    $input: UpdateStreamerInput!
    $condition: ModelStreamerConditionInput
  ) {
    updateStreamer(input: $input, condition: $condition) {
      id
      name
      title
      language
      type
      stream {
        id
        name
        language
        type
        streamers {
          nextToken
        }
        createdAt
        updatedAt
      }
      votes {
        items {
          id
          vote
          createdAt
          updatedAt
          streamerVotesId
          owner
        }
        nextToken
      }
      startedAt
      endedAt
      createdAt
      updatedAt
      streamStreamersId
    }
  }
`;
export const deleteStreamer = /* GraphQL */ `
  mutation DeleteStreamer(
    $input: DeleteStreamerInput!
    $condition: ModelStreamerConditionInput
  ) {
    deleteStreamer(input: $input, condition: $condition) {
      id
      name
      title
      language
      type
      stream {
        id
        name
        language
        type
        streamers {
          nextToken
        }
        createdAt
        updatedAt
      }
      votes {
        items {
          id
          vote
          createdAt
          updatedAt
          streamerVotesId
          owner
        }
        nextToken
      }
      startedAt
      endedAt
      createdAt
      updatedAt
      streamStreamersId
    }
  }
`;
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
      id
      streamer {
        id
        name
        title
        language
        type
        stream {
          id
          name
          language
          type
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        startedAt
        endedAt
        createdAt
        updatedAt
        streamStreamersId
      }
      vote
      createdAt
      updatedAt
      streamerVotesId
      owner
    }
  }
`;
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
      id
      streamer {
        id
        name
        title
        language
        type
        stream {
          id
          name
          language
          type
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        startedAt
        endedAt
        createdAt
        updatedAt
        streamStreamersId
      }
      vote
      createdAt
      updatedAt
      streamerVotesId
      owner
    }
  }
`;
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
      id
      streamer {
        id
        name
        title
        language
        type
        stream {
          id
          name
          language
          type
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        startedAt
        endedAt
        createdAt
        updatedAt
        streamStreamersId
      }
      vote
      createdAt
      updatedAt
      streamerVotesId
      owner
    }
  }
`;
