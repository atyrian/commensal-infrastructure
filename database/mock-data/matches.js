const match1 = {
  'match_id': {
    S: 'm1'
  },
  'createdAt': {
    S: '1539793960947'
  },
  'messages': {
    L: [
      {
        M: {
          'message': {
            S: 'Hello, it is cool that you like tacos'
          },
          'from': {
            S: '1'
          },
          'to': {
            S: '2'
          },
          'sent_date': {
            S: '1539793960947'
          }
        }
      },
      {
        M: {
          'message': {
            S: 'Hi, yeah that is a very unique character trait!'
          },
          'from': {
            S: '2'
          },
          'to': {
            S: '1'
          },
          'sent_date': {
            S: '1539793960949'
          }
        }
      }
    ]
  },
  'participants': {
    SS: [
      '1',
      '2'
    ]
  },
  'connectionIds': {
    M: {
      '1': {
        S: 'p1ConnectionId'
      },
      '2': {
        S: 'p2ConnectionId'
      }
    }
  }
}

const params = {
  RequestItems: {
    'commensal-match': [
      {
        PutRequest: {
          Item: match1
        }
      }
    ]
  },
  ReturnConsumedCapacity: 'TOTAL'
}

module.exports = { params }
