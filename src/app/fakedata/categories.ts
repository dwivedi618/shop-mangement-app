export class DefinedCategory{
    // static all = [
    //   {
    //     "id": "Tshirts",
    //     "name": "Tshirts",
    //     "children": [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    //   },
    //   {
    //     "id": "Sharee",
    //     "name": "Sharee",
    //     "children":[{}]
    //   },
    //   {
    //     "id": "Tops",
    //     "name": "Tops"
    //   },
    //   {
    //     "id": "Lounge Tshirts",
    //     "name": "Lounge Tshirts"
    //   },
    //   {
    //     "id": "Blazers",
    //     "name": "Blazers"
    //   },
    //   {
    //     "id": "Boxers",
    //     "name": "Boxers"
    //   },
    //   {
    //     "id": "Briefs",
    //     "name": "Briefs"
    //   },
    //   {
    //     "id": "Churidar",
    //     "name": "Churidar"
    //   },
    //   {
    //     "id": "Clothing Fabric",
    //     "name": "Clothing Fabric"
    //   },
    //   {
    //     "id": "Clothing Set",
    //     "name": "Clothing Set"
    //   },
    //   {
    //     "id": "Coats",
    //     "name": "Coats"
    //   },
    //   {
    //     "id": "Dhotis",
    //     "name": "Dhotis"
    //   },
    //   {
    //     "id": "Dungarees",
    //     "name": "Dungarees"
    //   },
    //   {
    //     "id": "Dupatta",
    //     "name": "Dupatta"
    //   },
    //   {
    //     "id": "Harem Pants",
    //     "name": "Harem Pants"
    //   },
    //   {
    //     "id": "Innerwear Vests",
    //     "name": "Innerwear Vests"
    //   },
    //   {
    //     "id": "Jackets",
    //     "name": "Jackets"
    //   },
    //   {
    //     "id": "Jeans",
    //     "name": "Jeans"
    //   },
    //   {
    //     "id": "Jumpsuit",
    //     "name": "Jumpsuit"
    //   },
    //   {
    //     "id": "Kurta Sets",
    //     "name": "Kurta Sets"
    //   },
    //   {
    //     "id": "Kurtas",
    //     "name": "Kurtas"
    //   },
    //   {
    //     "id": "Leggings",
    //     "name": "Leggings"
    //   },
    //   {
    //     "id": "Lounge Pants",
    //     "name": "Lounge Pants"
    //   },
    //   {
    //     "id": "Lounge Shorts",
    //     "name": "Lounge Shorts"
    //   },
    //   {
    //     "id": "Nehru Jackets",
    //     "name": "Nehru Jackets"
    //   },
    //   {
    //     "id": "Night suits",
    //     "name": "Night suits"
    //   },
    //   {
    //     "id": "Patiala",
    //     "name": "Patiala"
    //   },
    //   {
    //     "id": "Pyjamas",
    //     "name": "Pyjamas"
    //   },
    //   {
    //     "id": "Rain Jacket",
    //     "name": "Rain Jacket"
    //   },
    //   {
    //     "id": "Rain Suit",
    //     "name": "Rain Suit"
    //   },
    //   {
    //     "id": "Robe",
    //     "name": "Robe"
    //   },
    //   {
    //     "id": "Salwar",
    //     "name": "Salwar"
    //   },
    //   {
    //     "id": "Shapewear",
    //     "name": "Shapewear"
    //   },
    //   {
    //     "id": "Shawl",
    //     "name": "Shawl"
    //   },
    //   {
    //     "id": "Sherwani",
    //     "name": "Sherwani"
    //   },
    //   {
    //     "id": "Shirts",
    //     "name": "Shirts"
    //   },
    //   {
    //     "id": "Shorts",
    //     "name": "Shorts"
    //   },
    //   {
    //     "id": "Shrug",
    //     "name": "Shrug"
    //   },
    //   {
    //     "id": "Suits",
    //     "name": "Suits"
    //   },
    //   {
    //     "id": "Sweaters",
    //     "name": "Sweaters"
    //   },
    //   {
    //     "id": "Sweatshirts",
    //     "name": "Sweatshirts"
    //   },
    //   {
    //     "id": "Swim Bottoms",
    //     "name": "Swim Bottoms"
    //   },
    //   {
    //     "id": "Swimwear",
    //     "name": "Swimwear"
    //   },
    //   {
    //     "id": "Thermal Bottoms",
    //     "name": "Thermal Bottoms"
    //   },
    //   {
    //     "id": "Thermal Set",
    //     "name": "Thermal Set"
    //   },
    //   {
    //     "id": "Thermal Tops",
    //     "name": "Thermal Tops"
    //   },
    //   {
    //     "id": "Tights",
    //     "name": "Tights"
    //   },
    //   {
    //     "id": "Track Pants",
    //     "name": "Track Pants"
    //   },
    //   {
    //     "id": "Tracksuits",
    //     "name": "Tracksuits"
    //   },
    //   {
    //     "id": "Trousers",
    //     "name": "Trousers"
    //   },
    //   {
    //     "id": "Trunk",
    //     "name": "Trunk"
    //   },
    //   {
    //     "id": "Waistcoat",
    //     "name": "Waistcoat"
    //   }
    // ]
    static all = [
      {
          "id": 1,
          "name": "C1",
          "image": null,
          "createdAt": "2021-12-18T14:40:22.000Z",
          "updatedAt": "2021-12-18T14:40:22.000Z",
          "subCategories": [
              {
                  "id": 11,
                  "name": "C12",
                  "createdAt": "2021-12-22T09:38:46.000Z",
                  "updatedAt": "2021-12-22T09:38:46.000Z"
              },
              {
                  "id": 6,
                  "name": "c11",
                  "createdAt": "2021-12-22T05:44:18.000Z",
                  "updatedAt": "2021-12-22T05:44:18.000Z"
              }
          ],
          "searchOn": "category",
          "type": 0,
          "keys": "C1",
          "caseSensitve": false
      },
      {
          "id": 2,
          "name": "C2",
          "image": null,
          "createdAt": "2021-12-18T14:40:32.000Z",
          "updatedAt": "2021-12-18T14:40:32.000Z",
          "subCategories": [
              {
                  "id": 7,
                  "name": "c22",
                  "createdAt": "2021-12-22T05:50:02.000Z",
                  "updatedAt": "2021-12-22T05:50:02.000Z"
              },
              {
                  "id": 8,
                  "name": "c23",
                  "createdAt": "2021-12-22T05:52:16.000Z",
                  "updatedAt": "2021-12-22T05:52:16.000Z"
              }
          ],
          "searchOn": "category",
          "type": 0,
          "keys": "C2",
          "caseSensitve": false
      },
      {
          "id": 3,
          "name": "New",
          "image": null,
          "createdAt": "2021-12-21T16:13:18.000Z",
          "updatedAt": "2021-12-21T16:13:18.000Z",
          "subCategories": [
              {
                  "id": 9,
                  "name": "new 4",
                  "createdAt": "2021-12-22T06:07:37.000Z",
                  "updatedAt": "2021-12-22T06:07:37.000Z"
              },
              {
                  "id": 10,
                  "name": "new 5",
                  "createdAt": "2021-12-22T06:13:46.000Z",
                  "updatedAt": "2021-12-22T06:13:46.000Z"
              },
              {
                  "id": 4,
                  "name": "new sub 5",
                  "createdAt": "2021-12-21T17:06:41.000Z",
                  "updatedAt": "2021-12-21T17:06:41.000Z"
              },
              {
                  "id": 1,
                  "name": "subNew",
                  "createdAt": "2021-12-21T16:13:18.000Z",
                  "updatedAt": "2021-12-21T16:13:18.000Z"
              },
              {
                  "id": 5,
                  "name": "vinak",
                  "createdAt": "2021-12-22T05:37:24.000Z",
                  "updatedAt": "2021-12-22T05:37:24.000Z"
              }
          ],
          "searchOn": "category",
          "type": 0,
          "keys": "New",
          "caseSensitve": false
      }
  ]
}