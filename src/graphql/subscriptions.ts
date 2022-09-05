/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStream = /* GraphQL */ `
  subscription OnCreateStream($filter: ModelSubscriptionStreamFilterInput) {
    onCreateStream(filter: $filter) {
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
export const onUpdateStream = /* GraphQL */ `
  subscription OnUpdateStream($filter: ModelSubscriptionStreamFilterInput) {
    onUpdateStream(filter: $filter) {
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
export const onDeleteStream = /* GraphQL */ `
  subscription OnDeleteStream($filter: ModelSubscriptionStreamFilterInput) {
    onDeleteStream(filter: $filter) {
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
export const onCreateStreamer = /* GraphQL */ `
  subscription OnCreateStreamer($filter: ModelSubscriptionStreamerFilterInput) {
    onCreateStreamer(filter: $filter) {
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
export const onUpdateStreamer = /* GraphQL */ `
  subscription OnUpdateStreamer($filter: ModelSubscriptionStreamerFilterInput) {
    onUpdateStreamer(filter: $filter) {
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
export const onDeleteStreamer = /* GraphQL */ `
  subscription OnDeleteStreamer($filter: ModelSubscriptionStreamerFilterInput) {
    onDeleteStreamer(filter: $filter) {
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
export const onCreateViewers = /* GraphQL */ `
  subscription OnCreateViewers($filter: ModelSubscriptionViewersFilterInput) {
    onCreateViewers(filter: $filter) {
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
export const onUpdateViewers = /* GraphQL */ `
  subscription OnUpdateViewers($filter: ModelSubscriptionViewersFilterInput) {
    onUpdateViewers(filter: $filter) {
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
export const onDeleteViewers = /* GraphQL */ `
  subscription OnDeleteViewers($filter: ModelSubscriptionViewersFilterInput) {
    onDeleteViewers(filter: $filter) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($owner: String) {
    onCreateVote(owner: $owner) {
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
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($owner: String) {
    onUpdateVote(owner: $owner) {
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
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($owner: String) {
    onDeleteVote(owner: $owner) {
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
