```js

{
  session: {
    currentUser: {
      id: 1,
      username: "ryan"
    }
  },

  places: {
    1: {
      name: "Super Duper Burger",
      address: "98 Mission St",
      city: "San Francisco",
      state: "CA",
      zip: 94105,
      phone_number: "(415) 974-1200",
      description: "Best burgers in SF"
      }
    }
  }

  place: {
    1: {
      name: "Super Duper Burger",
      address: "98 Mission St",
      city: "San Francisco",
      state: "CA",
      zip: 94105,
      phone_number: "(415) 974-1200",
      description: "Best burgers in SF",
      lat: 100,
      lng: 100
      photos: {
        1: {
          image_url: "Link to photo"
          description: "Cool place!"
          tag: "Inside"
        }
      }
      reviews: {
        1: {
          rating: 5,
          price: 4,
          review: "Great happy hour!",
          reviewer_id: 1,
          place_id: 1
        }
      }
    }
  }

  errors: {
    session: [],
    review: []
  }
}
```
