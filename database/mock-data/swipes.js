const swipe1 = {
  'base_id': {
    S: '1'
  },
  'target_id': {
    S: '2'
  },
  'timestamp': {
    S: '1539793960947'
  },
  'like': {
    BOOL: true
  }
}

const swipe2 = {
  'base_id': {
    S: '2'
  },
  'target_id': {
    S: '1'
  },
  'timestamp': {
    S: '1539793960947'
  },
  'like': {
    BOOL: true
  }
}

const swipe3 = {
  'base_id': {
    S: '3'
  },
  'target_id': {
    S: '1'
  },
  'timestamp': {
    S: '1539795936533'
  },
  'like': {
    BOOL: true
  }
}

const swipe4 = {
  'base_id': {
    S: '1'
  },
  'target_id': {
    S: '3'
  },
  'timestamp': {
    S: '1539795936533'
  },
  'like': {
    BOOL: false
  }
}

const params = {
  RequestItems: {
    'commensal-swipe': [
      {
        PutRequest: {
          Item: swipe1
        }
      },
      {
        PutRequest: {
          Item: swipe2
        }
      },
      {
        PutRequest: {
          Item: swipe3
        }
      },
      {
        PutRequest: {
          Item: swipe4
        }
      }
    ]
  },
  ReturnConsumedCapacity: 'TOTAL'
}

module.exports = { params }
