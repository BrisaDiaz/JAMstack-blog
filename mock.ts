export const json = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "THE WEB-BASED SOFTWARE known as the Animal Health Emergency Reporting Diagnostic System, or USAHERDS, serves as a helpful digital tool for state governments to track and trace animal diseases through populations of livestock. Now it's turned out to be a kind of infection vector of its own—in the hands of one of China's most prolific groups of hackers.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "On Tuesday, the cybersecurity incident-response firm Mandiant revealed a long-running hacking campaign that breached at least six US state governments over the past year. Mandiant says the campaign, which it believes to have been the work of the notorious ",
          nodeType: "text",
        },
        {
          data: {
            uri: "https://www.wired.com/story/barium-winnti-china-hackers-video-game-loot-indictments/",
          },
          content: [
            {
              data: {},
              marks: [],
              value: "Chinese cyberespionage group APT41",
              nodeType: "text",
            },
          ],
          nodeType: "hyperlink",
        },
        {
          data: {},
          marks: [],
          value:
            "—also known as Barium, or as a part of the larger Chinese hacker group Winnti—used a vulnerability in USAHERDS to penetrate at least two of those targets. It may have hit many more, given that 18 states run USAHERDS on web servers, and any of those servers could have been commandeered by the hackers.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "APT41 has gained a reputation as one of China's most aggressive hacking groups. The US Department of Justice ",
          nodeType: "text",
        },
        {
          data: {
            uri: "https://www.wired.com/story/barium-winnti-china-hackers-video-game-loot-indictments/",
          },
          content: [
            {
              data: {},
              marks: [],
              value: "indicted five of its members in absentia in 2020",
              nodeType: "text",
            },
          ],
          nodeType: "hyperlink",
        },
        {
          data: {},
          marks: [],
          value:
            " and accused them of hacking into hundreds of victims' systems across Asia and the West, both for state-sponsored espionage and for profit. The group’s goal in this latest series of intrusions, or what data they may have been seeking, remains a mystery. But Mandiant analyst Rufus Brown says that it nonetheless shows just how active APT41 remains, and how inventive and thorough it's been in searching for any toehold that might allow them into yet another set of targets—even an obscure livestock management tool most Americans have never heard of.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: "“It's very unnerving to see this group ",
          nodeType: "text",
        },
        {
          data: {},
          marks: [
            {
              type: "italic",
            },
          ],
          value: "everywhere",
          nodeType: "text",
        },
        {
          data: {},
          marks: [],
          value:
            ",” says Brown. “APT41 is going after any external-facing web application that can give them access to a network. Just very persistent, very continuous targeting.”",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: "",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: "bold",
                },
              ],
              value:
                "“There are 18 states that use USAHERDS. If you're APT41, why not exploit all of them?”",
              nodeType: "text",
            },
            {
              data: {},
              marks: [],
              value: "\n-RUFUS BROWN, MANDIANT",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "blockquote",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "Late last year, Mandiant warned the developer of USAHERDS, a Pennsylvania-based company called Acclaim Systems, of a ",
          nodeType: "text",
        },
        {
          data: {
            uri: "https://nvd.nist.gov/vuln/detail/CVE-2021-44207",
          },
          content: [
            {
              data: {},
              marks: [],
              value: "high-severity hackable bug in the app",
              nodeType: "text",
            },
          ],
          nodeType: "hyperlink",
        },
        {
          data: {},
          marks: [],
          value:
            ". The app encrypts and signs the data sent between PCs and the server running it using keys that are meant to be unique to every installation. Instead, the keys were hard-coded into the application, meaning they were the same for every server that ran USAHERDS. That meant that any hacker who learned the hard-coded key values—as Mandiant believes APT41 did during its reconnaissance of another, earlier victim's network—could manipulate data sent from a user's PC to the server to exploit another bug in its code, allowing the hacker to run their own code on the server at will. Mandiant says Acclaim Systems has since patched the USAHERDS vulnerability. (WIRED reached out to Acclaim Systems but didn't receive a response.)",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "USAHERDS is hardly the only web app APT41 appears to have hacked as a way into its victims' systems. Based on a series of incident-response cases over the past year, Mandiant believes that the Chinese group has since at least May 2021 been targeting US state governments by exploiting web applications that use a development framework called ASP.NET. At first, the group appears to have used a vulnerability in two such web apps, which Mandiant declined to name, to hack into two US state governments. Each of those apps was used solely by one of the two state agencies, Mandiant says.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "But the next month, and continuing through the end of 2021, Mandiant saw the hackers move on to target USAHERDS as another means of entry. APT41 hacked USAHERDS first as a way into one of the two state governments it had already targeted, and then to breach a third. Mandiant hasn't confirmed that the same vulnerability was used to hack any other victims. Starting in December, Mandiant found that APT41 moved on to exploiting the ",
          nodeType: "text",
        },
        {
          data: {
            uri: "https://www.wired.com/story/log4j-flaw-hacking-internet/",
          },
          content: [
            {
              data: {},
              marks: [],
              value:
                "widely publicized vulnerability in Log4j, the commonly used Apache logging framework",
              nodeType: "text",
            },
          ],
          nodeType: "hyperlink",
        },
        {
          data: {},
          marks: [],
          value:
            ", using it to breach at least two other US state governments.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Mandiant nonetheless chose to reveal the exploitation of USAHERDS in the two earlier breaches due to the broad use of the app across state governments, the severity of the bug, and the likelihood that it was also used to quietly penetrate other state networks. "There are 18 states that use USAHERDS. If you\'re APT41, why not exploit all of them?" says Mandiant\'s Brown. "We don\'t know how broad this is. We just really want to get the information out there."',
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Once it had access to a server on a target network, APT41 would advance using relatively common "credential harvesting" tools, such as the ',
          nodeType: "text",
        },
        {
          data: {
            uri: "https://www.wired.com/story/how-mimikatz-became-go-to-hacker-tool/",
          },
          content: [
            {
              data: {},
              marks: [],
              value: "Mimikatz",
              nodeType: "text",
            },
          ],
          nodeType: "hyperlink",
        },
        {
          data: {},
          marks: [],
          value:
            " technique of accessing passwords in a machine's memory and then using them to gain access to other computers on the network. It then planted backdoor code in victim computers that allowed it broad, ongoing access to the state governments' networks. The group used malware and infrastructure that Mandiant says it clearly recognized as that of APT41, including tools with names like KEYPLUG, DEADEYE, and DUSTPAN.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "The half-dozen US state governments that Mandiant has highlighted join a massive list of APT41's targets over the past several years, from the US, France, Australia, the United Kingdom, and Chile to a dozen Asian countries. The group, which the Department of Justice has ",
          nodeType: "text",
        },
        {
          data: {
            uri: "https://www.wired.com/story/barium-winnti-china-hackers-video-game-loot-indictments/",
          },
          content: [
            {
              data: {},
              marks: [],
              value:
                "linked to a Chengdu, China-based company called Chengdu 404 Network Technology",
              nodeType: "text",
            },
          ],
          nodeType: "hyperlink",
        },
        {
          data: {},
          marks: [],
          value:
            ", has carried out an unusual mix of espionage-focused hacking—seemingly in the service of the Chinese government—and for-profit hacking, from stealing virtual video game currency to ransomware.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
  ],
  nodeType: "document",
};
export const extract = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "THE WEB-BASED SOFTWARE known as the Animal Health Emergency Reporting Diagnostic System, or USAHERDS, serves as a helpful digital tool for state governments to track and trace animal diseases through populations of livestock. Now it's turned out to be a kind of infection vector of its own—in the hands of one of China's most prolific groups of hackers.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "On Tuesday, the cybersecurity incident-response firm Mandiant revealed a long-running hacking campaign that breached at least six US state governments over the past year. Mandiant says the campaign, which it believes to have been the work of the notorious ",
          nodeType: "text",
        },
        {
          data: {
            uri: "https://www.wired.com/story/barium-winnti-china-hackers-video-game-loot-indictments/",
          },
          content: [
            {
              data: {},
              marks: [],
              value: "Chinese cyberespionage group APT41",
              nodeType: "text",
            },
          ],
          nodeType: "hyperlink",
        },
        {
          data: {},
          marks: [],
          value:
            "—also known as Barium, or as a part of the larger Chinese hacker group Winnti—used a vulnerability in USAHERDS to penetrate at least two of those targets. It may have hit many more, given that 18 states run USAHERDS on web servers, and any of those servers could have been commandeered by the hackers.",
          nodeType: "text",
        },
      ],
      nodeType: "paragraph",
    },
  ],
  nodeType: "document",
};

export const posts = {
  data: {
    blogsCollection: {
      total: 2,
      items: [
        {
          slug: "bitcoin-cash-machines-ordered-to-shut-down-in-uk",
          title: "Bitcoin cash machines ordered to shut down in UK",
          author: "bbc news",
          topic: {
            name: "economy",
            slug: "economy",
          },
          sys: {
            publishedAt: "2022-03-16T16:10:05.669Z",
          },
          featured: false,
          thumbnail: {
            title: "Bitcoin ",
            description: "Bitcoin on a keyboard",
            url: "https://images.ctfassets.net/d24otek6mn76/52u3UXxNdVJfQeZfbzOqHh/f69c0d183ba7c33d99552b4e8c4aeacb/_123642993_mediaitem123642989.jpg",
          },
          extract: {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "All UK crypto-currency cash machines (ATMs) are operating illegally and must be shut down, the Financial Conduct Authority has announced. Crypto-ATMs look like regular cash machines and let people buy crypto-currency, such as Bitcoin, using their bank cards.",
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
          },
        },
        {
          slug: "chinese-spies-hacked-a-livestock-app-to-breach-us-state-networks",
          title:
            "Chinese Spies Hacked a Livestock App to Breach US State Networks",
          author: "wired",
          topic: {
            name: " security",
            slug: " security",
          },
          sys: {
            publishedAt: "2022-03-16T16:07:07.874Z",
          },
          featured: false,
          thumbnail: {
            title: " Noah Ortega / FILMING FOR LIBERATION",
            description: "Dairy cows at a dairy farm",
            url: "https://images.ctfassets.net/d24otek6mn76/1KkSyRA56x99vR8FIjHjDS/9327a2efede74f097e929c55d5f47402/e00e8cd2-a1b6-4fd0-bfe0-3b4aef775160_16-9-aspect-ratio_default_0.jpg",
          },
          extract: {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "THE WEB-BASED SOFTWARE known as the Animal Health Emergency Reporting Diagnostic System, or USAHERDS, serves as a helpful digital tool for state governments to track and trace animal diseases through populations of livestock. Now it's turned out to be a kind of infection vector of its own...",
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
          },
        },
      ],
    },
  },
};
const postTopics = {
  data: {
    blogsCollection: {
      items: [
        {
          topic: {
            name: "economy",
            slug: "economy",
          },
        },
        {
          topic: {
            name: " security",
            slug: " security",
          },
        },
      ],
    },
  },
};
const post = {
  data: {
    blogsCollection: {
      total: 1,
      items: [
        {
          slug: "bitcoin-cash-machines-ordered-to-shut-down-in-uk",
          title: "Bitcoin cash machines ordered to shut down in UK",
          subtitle:
            "All UK crypto-currency cash machines (ATMs) are operating illegally and must be shut down, the Financial Conduct Authority has announced.",
          author: "bbc news",
          sys: {
            publishedAt: "2022-03-16T19:13:43.701Z",
          },
          topic: {
            name: "economy",
            slug: "economy",
          },
          tags: ["economy", "cryptocurrency", "bitcoin"],
          featured: false,
          thumbnail: {
            title: "Bitcoin ",
            description: "Bitcoin on a keyboard",
            url: "https://images.ctfassets.net/d24otek6mn76/52u3UXxNdVJfQeZfbzOqHh/f69c0d183ba7c33d99552b4e8c4aeacb/_123642993_mediaitem123642989.jpg",
          },
          recommendationCollection: {
            items: [
              {
                title:
                  "Chinese Spies Hacked a Livestock App to Breach US State Networks",
                slug: "chinese-spies-hacked-a-livestock-app-to-breach-us-state-networks",
                sys: {
                  publishedAt: "2022-03-16T19:14:13.872Z",
                },
                thumbnail: {
                  description: "Dairy cows at a dairy farm",
                  title: " Noah Ortega / FILMING FOR LIBERATION",
                  url: "https://images.ctfassets.net/d24otek6mn76/1KkSyRA56x99vR8FIjHjDS/9327a2efede74f097e929c55d5f47402/e00e8cd2-a1b6-4fd0-bfe0-3b4aef775160_16-9-aspect-ratio_default_0.jpg",
                },
              },
            ],
          },
          content: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "Crypto-ATMs look like regular cash machines and let people buy crypto-currency, such as Bitcoin, using their bank cards.",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "But no company offering crypto-currency services in the UK has a licence to operate a crypto-ATM.",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "The FCA said all such machines must be shut down or it will take action.",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "According to crypto-ATM directory Coin ATM Radar, there are 81 functional crypto-ATMS in the UK.",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'The FCA said: "We regularly warn consumers that crypto-assets are unregulated and high-risk which means people are very unlikely to have any protection if things go wrong.',
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        '"People should be prepared to lose all their money if they choose to invest in them."',
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "The FCA ",
                      nodeType: "text",
                    },
                    {
                      data: {
                        uri: "https://register.fca.org.uk/s/search?predefined=U",
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            "publishes a list of companies that appear to be involved in crypto-currency",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "hyperlink",
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        " but have not registered their business with the regulator for anti-money-laundering checks.",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "It said that since the publication of its list, 110 of the crypto companies had ceased trading.",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
          },
        },
      ],
    },
  },
};

const page = {
  data: {
    pageCollection: {
      items: [
        {
          title: "About",
          description: "who we are, our history.",
          slug: "about",
          content: {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  content: [
                    {
                      nodeType: "text",
                      value:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
          },
        },
      ],
    },
  },
};

const websiteWidgets = {
  data: {
    postsTopics: {
      items: [
        {
          name: "business",
          slug: "business",
          linkedFrom: {
            blogsCollection: {
              total: 1,
            },
          },
        },
        {
          name: "security",
          slug: "security",
          linkedFrom: {
            blogsCollection: {
              total: 1,
            },
          },
        },
        {
          name: "development",
          slug: "development",
          linkedFrom: {
            blogsCollection: {
              total: 1,
            },
          },
        },
        {
          name: "economy",
          slug: "economy",
          linkedFrom: {
            blogsCollection: {
              total: 1,
            },
          },
        },
        {
          name: "technology",
          slug: "technology",
          linkedFrom: {
            blogsCollection: {
              total: 1,
            },
          },
        },
      ],
    },
    latestPosts: {
      items: [
        {
          slug: "three-types-of-technology-that-can-help-boost-your-sales",
          title: "Three types of technology that can help boost your sales",
          author: "retailtechinnovationhub",
          thumbnail: {
            title: "Three types of technology that can help boost your sales",
            description:
              "Three types of technology that can help boost your sales",
            url: "https://images.ctfassets.net/d24otek6mn76/4Xbj53xf4wkFLLfM0FPwK9/ef0854f1e2b6b69f8ee7c76a1222f714/7-Ways-to-Increase-Sales-Using-SEO-blog.gif",
          },
          sys: {
            publishedAt: "2022-03-18T16:30:23.653Z",
          },
        },
        {
          slug: "artificial-insurance-how-machine-learning-is-transforming-underwriting",
          title:
            "Artificial Insurance? How Machine Learning Is Transforming Underwriting",
          author: "businessnewsdaily",
          thumbnail: {
            title: "Machine learning",
            description: "machine learning",
            url: "https://images.ctfassets.net/d24otek6mn76/6fIc0sMH2eiRhICQwqwJaP/14cee344e1f77ae3cf7779c4cab2f5b5/machine-learning-covid-19.webp",
          },
          sys: {
            publishedAt: "2022-03-18T02:55:43.772Z",
          },
        },
        {
          slug: "bitcoin-cash-machines-ordered-to-shut-down-in-uk",
          title: "Bitcoin cash machines ordered to shut down in UK",
          author: "bbc news",
          thumbnail: {
            title: "Bitcoin ",
            description: "Bitcoin on a keyboard",
            url: "https://images.ctfassets.net/d24otek6mn76/52u3UXxNdVJfQeZfbzOqHh/f69c0d183ba7c33d99552b4e8c4aeacb/_123642993_mediaitem123642989.jpg",
          },
          sys: {
            publishedAt: "2022-03-18T01:34:33.812Z",
          },
        },
        {
          slug: "three-web-development-trends-driving-a-better-user-experience-this-year",
          title:
            "Three Web Development Trends Driving a Better User Experience This Year",
          author: "technative",
          thumbnail: {
            title: "Let’s delve into the topic",
            description: "Top Web Development Trends",
            url: "https://images.ctfassets.net/d24otek6mn76/KDr85UgS3la1lRIRQFK3l/5f4d4f96eb73adba741fcf61c1efc796/Top-Web-Development-Trends-1.webp",
          },
          sys: {
            publishedAt: "2022-03-18T01:33:44.630Z",
          },
        },
        {
          slug: "4-post-pandemic-cybersecurity-trends",
          title: "4 Post-Pandemic Cybersecurity Trends",
          author: "netscout",
          thumbnail: {
            title:
              "Digital Network Data and Communication Network Concept Abstract Background",
            description: "The constant evolution of computer security",
            url: "https://images.ctfassets.net/d24otek6mn76/5NiCvd6i3NNiEkkz6BneNz/0ce8979b55942bbc3cc910b6eb584973/ciberseguridad.jpeg",
          },
          sys: {
            publishedAt: "2022-03-18T01:04:06.599Z",
          },
        },
      ],
    },
    websiteWidgets: {
      tags: [
        "development",
        "machine learning",
        "cybersecurity",
        "bitcoin",
        "trends",
      ],
      featuredPost: {
        slug: "three-web-development-trends-driving-a-better-user-experience-this-year",
        title:
          "Three Web Development Trends Driving a Better User Experience This Year",
        thumbnail: {
          title: "Let’s delve into the topic",
          description: "Top Web Development Trends",
          url: "https://images.ctfassets.net/d24otek6mn76/KDr85UgS3la1lRIRQFK3l/5f4d4f96eb73adba741fcf61c1efc796/Top-Web-Development-Trends-1.webp",
        },
        sys: {
          publishedAt: "2022-03-18T01:33:44.630Z",
        },
        author: "technative",
      },
      popularPosts: {
        items: [
          {
            slug: "4-post-pandemic-cybersecurity-trends",
            title: "4 Post-Pandemic Cybersecurity Trends",
            author: "netscout",
            thumbnail: {
              title:
                "Digital Network Data and Communication Network Concept Abstract Background",
              description: "The constant evolution of computer security",
              url: "https://images.ctfassets.net/d24otek6mn76/5NiCvd6i3NNiEkkz6BneNz/0ce8979b55942bbc3cc910b6eb584973/ciberseguridad.jpeg",
            },
            sys: {
              publishedAt: "2022-03-18T01:04:06.599Z",
            },
          },
          {
            slug: "three-web-development-trends-driving-a-better-user-experience-this-year",
            title:
              "Three Web Development Trends Driving a Better User Experience This Year",
            author: "technative",
            thumbnail: {
              title: "Let’s delve into the topic",
              description: "Top Web Development Trends",
              url: "https://images.ctfassets.net/d24otek6mn76/KDr85UgS3la1lRIRQFK3l/5f4d4f96eb73adba741fcf61c1efc796/Top-Web-Development-Trends-1.webp",
            },
            sys: {
              publishedAt: "2022-03-18T01:33:44.630Z",
            },
          },
          {
            slug: "artificial-insurance-how-machine-learning-is-transforming-underwriting",
            title:
              "Artificial Insurance? How Machine Learning Is Transforming Underwriting",
            author: "businessnewsdaily",
            thumbnail: {
              title: "Machine learning",
              description: "machine learning",
              url: "https://images.ctfassets.net/d24otek6mn76/6fIc0sMH2eiRhICQwqwJaP/14cee344e1f77ae3cf7779c4cab2f5b5/machine-learning-covid-19.webp",
            },
            sys: {
              publishedAt: "2022-03-18T02:55:43.772Z",
            },
          },
        ],
      },
      randomPosts: {
        items: [
          {
            slug: "bitcoin-cash-machines-ordered-to-shut-down-in-uk",
            title: "Bitcoin cash machines ordered to shut down in UK",
            author: "bbc news",
            thumbnail: {
              title: "Bitcoin ",
              description: "Bitcoin on a keyboard",
              url: "https://images.ctfassets.net/d24otek6mn76/52u3UXxNdVJfQeZfbzOqHh/f69c0d183ba7c33d99552b4e8c4aeacb/_123642993_mediaitem123642989.jpg",
            },
            sys: {
              publishedAt: "2022-03-18T01:34:33.812Z",
            },
          },
          {
            slug: "4-post-pandemic-cybersecurity-trends",
            title: "4 Post-Pandemic Cybersecurity Trends",
            author: "netscout",
            thumbnail: {
              title:
                "Digital Network Data and Communication Network Concept Abstract Background",
              description: "The constant evolution of computer security",
              url: "https://images.ctfassets.net/d24otek6mn76/5NiCvd6i3NNiEkkz6BneNz/0ce8979b55942bbc3cc910b6eb584973/ciberseguridad.jpeg",
            },
            sys: {
              publishedAt: "2022-03-18T01:04:06.599Z",
            },
          },
          {
            slug: "three-web-development-trends-driving-a-better-user-experience-this-year",
            title:
              "Three Web Development Trends Driving a Better User Experience This Year",
            author: "technative",
            thumbnail: {
              title: "Let’s delve into the topic",
              description: "Top Web Development Trends",
              url: "https://images.ctfassets.net/d24otek6mn76/KDr85UgS3la1lRIRQFK3l/5f4d4f96eb73adba741fcf61c1efc796/Top-Web-Development-Trends-1.webp",
            },
            sys: {
              publishedAt: "2022-03-18T01:33:44.630Z",
            },
          },
        ],
      },
      socials: {
        items: [
          {
            name: "facebook",
            url: "https://brisa-diaz.netlify.app",
          },
          {
            name: "twitter",
            url: "https://github.com/BrisaDiaz",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/brisa-d%C3%ADaz/",
          },
          {
            name: "reddit",
            url: "https://brisa-diaz.netlify.app",
          },
          {
            name: "pinterest",
            url: "https://github.com/BrisaDiaz",
          },
          {
            name: "vk",
            url: "https://www.linkedin.com/in/brisa-d%C3%ADaz/",
          },
          {
            name: "instagram",
            url: "https://brisa-diaz.netlify.app/",
          },
          {
            name: "youtube",
            url: "https://brisa-diaz.netlify.app/",
          },
          {
            name: "whatsapp",
            url: "https://www.linkedin.com/in/brisa-d%C3%ADaz/",
          },
          {
            name: "skipe",
            url: "https://brisa-diaz.netlify.app",
          },
          {
            name: "facebook",
            url: "https://brisa-diaz.netlify.app",
          },
          {
            name: "twitter",
            url: "https://github.com/BrisaDiaz",
          },
          {
            name: "skipe",
            url: "https://brisa-diaz.netlify.app",
          },
          {
            name: "instagram",
            url: "https://brisa-diaz.netlify.app/",
          },
          {
            name: "youtube",
            url: "https://brisa-diaz.netlify.app/",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/brisa-d%C3%ADaz/",
          },
        ],
      },
      socialsInBanner: {
        items: [],
      },
    },
  },
};
// {
//   websiteWidgets(id: "6qdBspgR9EfIvWfxc2Q8Fy") {
//     tags
//     featuredPost {
//       slug
//       title
//       thumbnail {
//         title
//         description
//         url
//       }
//       sys {
//         publishedAt
//       }
//       author
//     }
//     popularPostsCollection {
//       items {
//         slug
//         title
//         thumbnail {
//           title
//           description
//           url
//         }
//         sys {
//           publishedAt
//         }
//       }
//     }
//     randomPostsCollection {
//       items {
//         slug
//         title
//         thumbnail {
//           title
//           description
//           url
//         }
//         sys {
//           publishedAt
//         }
//       }
//     }
//     socialPluginCollection{
//       items{
//         name
//         url
//       }
//     }
//      socialsInBannerCollection{
//       items{
//         name
//         url
//       }
//     }
//   }
// }

// {
//   blogsCollection(limit:100,order:sys_publishedAt_DESC){
//     total
//     items{
//       slug
//       title
//       author
//       topic{
//         name
//         slug
//       }
//       sys{
//         publishedAt
//       }
//       featured
//       thumbnail{
//         title
//         description
//         url
//       }
//       extract{
//         json
//       }
//     }
//   }
// }

// {
//   blogsCollection(where:{slug:"bitcoin-cash-machines-ordered-to-shut-down-in-uk"},limit:1){

//     total
//     items{
//       slug
//       title
//       subtitle
//       author
//       sys{
//         publishedAt
//       }

//     topic{
//       name
//       slug
//     }
//      tags
//       featured
//       thumbnail{
//         title
//         description
//         url
//       }
//    recommendationCollection{
//     items{
//       title
//    sys{
//     publishedAt
//   }
//       thumbnail{
//         description
//         title
//         url

//       }
//     }
//   }
//       content{
//         json
//       }
//     }
//   }
// }

// {

//  tags
// }
// }

// {

//  pageCollection(where:{slug:"about"},limit:1){

//  items{
//   title
// slug
//   description
//   content{
//     json
//   }
// }
// }}
