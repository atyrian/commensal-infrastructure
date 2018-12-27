const user1 = {
  'id': {
    S: '1'
  },
  'geohash': {
    S: 'u3chr'
  },
  'last_active': {
    S: '1539514714'
  },
  'created_at': {
    S: '1539514710'
  },
  'pref': {
    N: '0'
  },
  'person': {
    M: {
      'name': {
        S: 'victor'
      },
      'last_name': {
        S: 'ricart'
      },
      'birthday': {
        S: '04/07/1990'
      },
      'bio': {
        S: 'I like tacos'
      },
      'gender': {
        N: '0'
      },
      'photos': {
        M: {
          'photo_1': {
            S: 'https://photo.1'
          },
          'photo_2': {
            S: 'https://photo.2'
          },
          'photo_3': {
            S: 'https://photo.3'
          }
        }
      },
      'fav_venues': {
        M: {
          'venue_1': {
            M: {
              'venue_name': {
                S: 'TacoBell'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12345'
              }
            }
          },
          'venue_2': {
            M: {
              'venue_name': {
                S: 'LemonGrass'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12346'
              }
            }
          },
          'venue_3': {
            M: {
              'venue_name': {
                S: 'TexMex'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12347'
              }
            }
          }
        }
      }
    }
  },
  'shown_to': {
    SS: [
      '2',
      '3'
    ]
  },
  'match_id': {
    SS: [
      'm1'
    ]
  }

}

const user2 = {
  'id': {
    S: '2'
  },
  'geohash': {
    S: 'u3chr'
  },
  'last_active': {
    S: '1539514714'
  },
  'created_at': {
    S: '1539514710'
  },
  'pref': {
    N: '0'
  },
  'person': {
    M: {
      'name': {
        S: 'Second'
      },
      'last_name': {
        S: 'User'
      },
      'birthday': {
        S: '04/07/1990'
      },
      'bio': {
        S: 'I also like tacos'
      },
      'gender': {
        N: '1'
      },
      'photos': {
        M: {
          'photo_1': {
            S: 'https://photo.1'
          },
          'photo_2': {
            S: 'https://photo.2'
          },
          'photo_3': {
            S: 'https://photo.3'
          }
        }
      },
      'fav_venues': {
        M: {
          'venue_1': {
            M: {
              'venue_name': {
                S: 'TacoBell'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12345'
              }
            }
          },
          'venue_2': {
            M: {
              'venue_name': {
                S: 'LemonGrass'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12346'
              }
            }
          },
          'venue_3': {
            M: {
              'venue_name': {
                S: 'TexMex'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12347'
              }
            }
          }
        }
      }
    }
  },
  'shown_to': {
    SS: [
      '1'
    ]
  },
  'match_id': {
    SS: [
      'm1'
    ]
  }
}

const user3 = {
  'id': {
    S: '3'
  },
  'geohash': {
    S: 'u3chr'
  },
  'last_active': {
    S: '1539514714'
  },
  'created_at': {
    S: '1539514710'
  },
  'pref': {
    N: '1'
  },
  'person': {
    M: {
      'name': {
        S: 'Third'
      },
      'last_name': {
        S: 'User'
      },
      'birthday': {
        S: '04/07/1990'
      },
      'bio': {
        S: 'I like beer'
      },
      'gender': {
        N: '1'
      },
      'photos': {
        M: {
          'photo_1': {
            S: 'https://photo.1'
          },
          'photo_2': {
            S: 'https://photo.2'
          },
          'photo_3': {
            S: 'https://photo.3'
          }
        }
      },
      'fav_venues': {
        M: {
          'venue_1': {
            M: {
              'venue_name': {
                S: 'TacoBell'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12345'
              }
            }
          },
          'venue_2': {
            M: {
              'venue_name': {
                S: 'LemonGrass'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12346'
              }
            }
          },
          'venue_3': {
            M: {
              'venue_name': {
                S: 'TexMex'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12347'
              }
            }
          }
        }
      }
    }
  },
  'shown_to': {
    SS: [
      '1'
    ]
  },
  'match_id': {
    SS: [
      'm0'
    ]
  }
}

const user4 = {
  'id': {
    S: '4'
  },
  'geohash': {
    S: 'u3chq'
  },
  'last_active': {
    S: '1539514714'
  },
  'created_at': {
    S: '1539514710'
  },
  'pref': {
    N: '2'
  },
  'person': {
    M: {
      'name': {
        S: 'Fourth'
      },
      'last_name': {
        S: 'User'
      },
      'birthday': {
        S: '04/07/1990'
      },
      'bio': {
        S: 'I like fish'
      },
      'gender': {
        N: '1'
      },
      'photos': {
        M: {
          'photo_1': {
            S: 'https://photo.1'
          },
          'photo_2': {
            S: 'https://photo.2'
          },
          'photo_3': {
            S: 'https://photo.3'
          }
        }
      },
      'fav_venues': {
        M: {
          'venue_1': {
            M: {
              'venue_name': {
                S: 'TacoBell'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12345'
              }
            }
          },
          'venue_2': {
            M: {
              'venue_name': {
                S: 'LemonGrass'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12346'
              }
            }
          },
          'venue_3': {
            M: {
              'venue_name': {
                S: 'TexMex'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12347'
              }
            }
          }
        }
      }
    }
  },
  'shown_to': {
    SS: [
      '0'
    ]
  },
  'match_id': {
    SS: [
      'm0'
    ]
  }
}

const user5 = {
  'id': {
    S: '5'
  },
  'geohash': {
    S: 'u3ck0'
  },
  'last_active': {
    S: '1539514714'
  },
  'created_at': {
    S: '1539514710'
  },
  'pref': {
    N: '3'
  },
  'person': {
    M: {
      'name': {
        S: 'Fourth'
      },
      'last_name': {
        S: 'User'
      },
      'birthday': {
        S: '04/07/1990'
      },
      'bio': {
        S: 'I am out of bounds'
      },
      'gender': {
        N: '1'
      },
      'photos': {
        M: {
          'photo_1': {
            S: 'https://photo.1'
          },
          'photo_2': {
            S: 'https://photo.2'
          },
          'photo_3': {
            S: 'https://photo.3'
          }
        }
      },
      'fav_venues': {
        M: {
          'venue_1': {
            M: {
              'venue_name': {
                S: 'TacoBell'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12345'
              }
            }
          },
          'venue_2': {
            M: {
              'venue_name': {
                S: 'LemonGrass'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12346'
              }
            }
          },
          'venue_3': {
            M: {
              'venue_name': {
                S: 'TexMex'
              },
              'venue_location': {
                S: 'Malmö'
              },
              'venue_photo': {
                S: 'https://venue.photo.12347'
              }
            }
          }
        }
      }
    }
  },
  'shown_to': {
    SS: [
      '0'
    ]
  },
  'match_id': {
    SS: [
      'm0'
    ]
  }
}

const params = {
  RequestItems: {
    'commensal-user': [
      {
        PutRequest: {
          Item: user1
        }
      },
      {
        PutRequest: {
          Item: user2
        }
      }
      ,
      {
        PutRequest: {
          Item: user3
        }
      }
      ,
      {
        PutRequest: {
          Item: user4
        }
      }
      ,
      {
        PutRequest: {
          Item: user5
        }
      }
    ]
  },
  ReturnConsumedCapacity: 'TOTAL'
}
module.exports = {params}
