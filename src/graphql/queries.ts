/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStream = /* GraphQL */ `
  query GetStream($id: ID!) {
    getStream(id: $id) {
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
export const listStreams = /* GraphQL */ `
  query ListStreams(
    $filter: ModelStreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStreamer = /* GraphQL */ `
  query GetStreamer($id: ID!) {
    getStreamer(id: $id) {
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
      viewers {
        items {
          id
          viewers
          createdAt
          updatedAt
          streamerViewersId
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
export const listStreamers = /* GraphQL */ `
  query ListStreamers(
    $filter: ModelStreamerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStreamers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        viewers {
          nextToken
        }
        startedAt
        endedAt
        createdAt
        updatedAt
        streamStreamersId
      }
      nextToken
    }
  }
`;
export const getViewers = /* GraphQL */ `
  query GetViewers($id: ID!) {
    getViewers(id: $id) {
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
        viewers {
          nextToken
        }
        startedAt
        endedAt
        createdAt
        updatedAt
        streamStreamersId
      }
      viewers
      createdAt
      updatedAt
      streamerViewersId
    }
  }
`;
export const listViewers = /* GraphQL */ `
  query ListViewers(
    $filter: ModelViewersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listViewers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        streamer {
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
        viewers
        createdAt
        updatedAt
        streamerViewersId
      }
      nextToken
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
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
        viewers {
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
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        streamer {
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
        vote
        createdAt
        updatedAt
        streamerVotesId
        owner
      }
      nextToken
    }
  }
`;
