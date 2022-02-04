// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      name: 'John Doe',
      kind: "youtube#channelListResponse",
      etag: "XNS7RGr7aqu7tCl8ysGMp9BbSMg",
      pageInfo: {
        "totalResults": 1,
        "resultsPerPage": 5
      },
      items: [
        {
          kind: "youtube#channel",
          etag: "I7WuGr0YB_IFbBx4j_5-wQ9fKvA",
          id: "UCwNsgnp07DPQFzhfhIGsgaA",
          snippet: {
            title: "Liore",
            description: "",
            publishedAt: "2014-10-25T11:46:09Z",
            thumbnails: {
              default: {
                url: "https://yt3.ggpht.com/ytc/AKedOLRuLWDQhFvcuIws4xuEUEjHgm8bKF-_8YGPb4Dw=s88-c-k-c0x00ffffff-no-rj",
                width: 88,
                height: 88
              },
              medium: {
                url: "https://yt3.ggpht.com/ytc/AKedOLRuLWDQhFvcuIws4xuEUEjHgm8bKF-_8YGPb4Dw=s240-c-k-c0x00ffffff-no-rj",
                width: 240,
                height: 240
              },
              high: {
                url: "https://yt3.ggpht.com/ytc/AKedOLRuLWDQhFvcuIws4xuEUEjHgm8bKF-_8YGPb4Dw=s800-c-k-c0x00ffffff-no-rj",
                width: 800,
                height: 800
              }
            },
            localized: {
              title: "Liore",
              description: ""
            },
            country: "ID"
          },
          statistics: {
            viewCount: "746",
            subscriberCount: "17",
            hiddenSubscriberCount: false,
            videoCount: "28"
          }
        }
      ]
    })
}
