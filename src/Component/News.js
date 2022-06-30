import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Natalie Weiner",
      title:
        "Stanford Wins a Rematch With Texas and a Trip to the Final Four - The New York Times",
      description:
        "Stanford, a No. 1 seed, took one of its three losses this season in November against Texas, but it bested the Longhorns on Sunday to reach the national semifinals.",
      url: "https://www.nytimes.com/2022/03/27/sports/ncaabasketball/stanford-texas-score.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/27/multimedia/27wcbb-stanford-texas-lexiehull/27wcbb-stanford-texas-lexiehull-facebookJumbo.jpg",
      publishedAt: "2022-03-28T05:15:00Z",
      content:
        "That defense is very taxing, Jones said. Im excited to get back and shower and get to bed.\r\nJones was able to bring Stanfords lead back up to 5 points by the end of the third quarter, when she was fo… [+1526 chars]",
    },
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: null,
      title:
        "United States vs. Panama - Football Match Report - March 27, 2022 - ESPN",
      description:
        "Get a report of the United States vs. Panama 2022 FIFA  World Cup Qualifying - CONCACAF, Third Round football match.",
      url: "https://www.espn.com/soccer/report/_/gameId/606048",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0328%2Fr992110_1296x729_16%2D9.jpg",
      publishedAt: "2022-03-28T05:03:39Z",
      content:
        "The United States men's national team couldn't confirm its place at this winter's World Cup after Costa Rica's win at El Salvador earlier in the day, but its 5-1 win over Panama in Orlando, Florida, … [+3833 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Israel attack: Two shot dead in Hadera - BBC.com",
      description:
        "Security is stepped up across the country after two police are killed by Israeli Arab gunmen.",
      url: "https://www.bbc.com/news/world-middle-east-60895393",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/C40E/production/_123909105_gettyimages-1239550222.jpg",
      publishedAt: "2022-03-28T04:31:37Z",
      content:
        "Image source, AFP/Getty Images\r\nImage caption, It was the second deadly attack claimed by IS in Israel within five days\r\nTwo police officers have been killed in an attack by two Israeli Arab gunmen i… [+2712 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Zack Sharf",
      title:
        "Chris Rock Declines to File Police Report After Will Smith Slap at Oscars, LAPD Says - Variety",
      description:
        "The Los Angeles Police Department confirms to Variety that Chris Rock has “declined to file a police report” following an altercation with Will Smith at the 94th Academy Awards. Smith took to the stage during the 2022 Oscars and slapped Rock after the comedia…",
      url: "https://variety.com/2022/film/news/chris-rock-police-report-will-smith-slap-oscars-1235216542/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2022/03/Will-Smith-Chris-Rock-Slap-Oscars-2.jpg?w=1000",
      publishedAt: "2022-03-28T04:30:00Z",
      content:
        "The Los Angeles Police Department confirms to Variety that Chris Rock has “declined to file a police report” following an altercation with Will Smith at the 94th Academy Awards. Smith took to the sta… [+2043 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: null,
      title:
        "Much of Shanghai locked down as mass COVID-19 testing begins - The Associated Press - en Español",
      description:
        "BEIJING (AP) — China began its most extensive lockdown in two years Monday to conduct mass testing and control a growing outbreak in Shanghai as questions are raised about the economic toll of the nation's “zero-COVID” strategy.",
      url: "https://apnews.com/article/covid-business-health-china-beijing-b406df3a0113b9be99273324fec2c12e",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/4d47b22a10d745bd86c5439b7435b170/3000.jpeg",
      publishedAt: "2022-03-28T04:04:58Z",
      content:
        "BEIJING (AP) China began its most extensive lockdown in two years Monday to conduct mass testing and control a growing outbreak in Shanghai as questions are raised about the economic toll of the nati… [+4462 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Yen tumbles as BOJ intervenes to keep bond yields pinned down - Reuters.com",
      description:
        "The Japanese yen slipped nearly 1% to a six-year low on Monday, after the Bank of Japan intervened to stop government bond yields from rising above its key target, while rising U.S. yields pushed the dollar higher against other currencies too.",
      url: "https://www.reuters.com/business/yen-back-under-pressure-boj-steps-bitcoin-takes-leap-2022-03-28/",
      urlToImage:
        "https://www.reuters.com/resizer/0NDhRIGM4zEDt3Cufv-4uvLSHB8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VDP7E34G6ZIKHIRCTPHB4ZDPOA.jpg",
      publishedAt: "2022-03-28T03:53:00Z",
      content:
        "HONG KONG/TOKYO, March 28 (Reuters) - The Japanese yen slipped nearly 1% to a six-year low on Monday, after the Bank of Japan intervened to stop government bond yields from rising above its key targe… [+3381 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Lisa Respers France, CNN",
      title: "Oscar winners 2022: See the list - CNN",
      description: "The 94th Academy Awards are being presented on Sunday.",
      url: "https://www.cnn.com/2022/03/27/entertainment/oscar-winners-2022/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211118150216-03-encanto-disney-super-tease.jpg",
      publishedAt: "2022-03-28T03:38:00Z",
      content: null,
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: ", USA TODAY",
      title:
        "March Madness 2022 live updates: South Carolina, Stanford women and Kansas, UNC men reach Final Four - USA TODAY",
      description:
        "Top women's seeds South Carolina and Stanford punch tickets to Final Four; Kansas, North Carolina join Duke, Villanova in Final Four men's bracket.",
      url: "https://www.usatoday.com/story/sports/ncaab/2022/03/27/march-madness-ncaa-tournament-live-updates-elite-8/7184359001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/03/28/USAT/489f5344-d919-4294-ac31-23c890611931-GTY_1388083461.jpg?auto=webp&crop=4329,2435,x0,y213&format=pjpg&width=1200",
      publishedAt: "2022-03-28T03:28:02Z",
      content:
        "There will be a quartet of traditional college basketball powers gathering next weekend in New Orleans for the men's Final Four. \r\nNorth Carolina and Kansas punched their tickets on Sunday in dominat… [+17435 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Adam Sabes",
      title: "Oil prices slide amid Shanghai two-stage lockdown - Fox Business",
      description:
        "Oil prices went down on Sunday amid Shanghai authorities announcing the city will go through a lock-down in two stages in order for residents to undergo COVID-19 testing, and the city will be split for the exercise.",
      url: "https://www.foxbusiness.com/energy/oil-prices-slide-amid-shanghai-two-stage-lockdown",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/03/0/0/GettyImages-1239430405.jpg?ve=1&tl=1",
      publishedAt: "2022-03-28T01:44:09Z",
      content:
        "Oil prices went down on Sunday amid Shanghai authorities announcing the city will lockdown in two stages in order for residents to undergo COVID-19 testing.\r\nThe lockdown announcement comes amid a ne… [+1620 chars]",
    },
    {
      source: {
        id: null,
        name: "WLS-TV",
      },
      author: "Carolina Cardona, WKMG",
      title:
        "Orlando ride death: Witness recounts moments after Tyre Sampson falls to death at ICON Park in Florida - WLS-TV",
      description:
        "Orlando's ICON Park free fall ride remains closed, as investigators continue to look for answers surrounding the death of Tyre Sampson.",
      url: "https://abc7chicago.com/florida-park-death-amusement-ride-tyre-sampson/11686014/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/11686089_032722-wls-florida-park-death-img.jpg?w=1600",
      publishedAt: "2022-03-28T01:40:11Z",
      content:
        "ORLANDO, Florida -- The parents of a teen who fell to his death from a Florida amusement park ride have hired attorneys.Now, ride experts and witnesses talk about what happened.\r\nOrlando's ICON Park … [+1938 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Sabrina Siddiqui, Tarini Parti",
      title:
        "Biden’s Remark on Putin Stirs Anxiety Among Western Allies - The Wall Street Journal",
      description:
        "President Biden’s remark that Vladimir Putin ‘cannot remain in power’ marks escalation in verbal attacks on Russian president",
      url: "https://www.wsj.com/articles/u-s-officials-rush-to-clarify-bidens-comment-on-russias-putin-11648401478",
      urlToImage: "https://images.wsj.net/im-512918/social",
      publishedAt: "2022-03-28T01:36:00Z",
      content:
        "WASHINGTONPresident Bidens remark that Russian President Vladimir Putin cannot remain in power came under fire for muddying U.S. policy and threatening to undermine diplomatic efforts to end the war … [+314 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Nicki Gostin",
      title:
        "Jason Momoa had hernia surgery one day before Oscars 2022 - Page Six",
      description:
        "The “Dune” star, 42, joked on the red carpet that he is “getting old” after wrapping filming for “Aquaman and the Lost Kingdom.”",
      url: "https://pagesix.com/2022/03/27/jason-momoa-had-hernia-surgery-one-day-before-oscars-2022/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/03/Jason-Momoa-surgery-oscars-2022.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2022-03-28T01:13:00Z",
      content:
        "Now that’s what you call a commitment to the Oscars.\r\nJason Momoa revealed on the red carpet that he went under the knife Saturday after wrapping filming for “Aquaman and the Lost Kingdom.”\r\n“I had s… [+1449 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Adam Sabes",
      title:
        "White House principal deputy press secretary tests positive for COVID-19 after returning from Europe trip - Fox News",
      description:
        "White House Principal Deputy Press Secretary Karine Jean-Pierre tested positive for COVID-19 after returning from President Biden's trip to Europe, according to a statement",
      url: "https://www.foxnews.com/politics/white-house-deputy-press-secretary-tests-positive-covid-19-after-returning-europe-trip",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/03/Screenshot-2022-03-27-220055.jpg",
      publishedAt: "2022-03-28T01:00:23Z",
      content:
        "White House Principal Deputy Press Secretary Karine Jean-Pierre tested positive for COVID-19 after returning from President Biden's trip to Europe.\r\nA statement from Jean-Pierre released Sunday night… [+982 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Kaylene Chassie and Keith Allen, CNN",
      title:
        "Four people are dead after a driver crashed a vehicle into Salem, Oregon, encampment of unhoused people - CNN",
      description:
        'Alcohol "may have been a contributing factor" in a crash that saw a motorist drive into an encampment of unhoused people in Salem, Oregon, Sunday morning, killing four, police say.',
      url: "https://www.cnn.com/2022/03/27/us/salem-oregon-crash-unhoused-camp/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/150325082152-social-gfx-cnn-logo-super-tease.jpg",
      publishedAt: "2022-03-28T00:58:00Z",
      content:
        '(CNN)Alcohol "may have been a contributing factor" in a crash that saw a motorist drive into an encampment of unhoused people in Salem, Oregon, Sunday morning, killing four, police say.\r\nA preliminar… [+1386 chars]',
    },
    {
      source: {
        id: null,
        name: "Bitcoin.com",
      },
      author: null,
      title:
        "Elon Musk Giving 'Serious Thought' to Creating Social Media Platform With Free Speech as Top Priority – Featured Bitcoin News - Bitcoin News",
      description:
        'Tesla and Spacex CEO Elon Musk says that he is "giving serious thought to" creating a new social media platform with free speech as a top priority.',
      url: "https://news.bitcoin.com/elon-musk-giving-serious-thought-to-creating-social-media-platform-free-speech-top-priority/",
      urlToImage:
        "https://static.news.bitcoin.com/wp-content/uploads/2022/03/musk-social-media.jpg",
      publishedAt: "2022-03-28T00:31:44Z",
      content:
        "Tesla and Spacex CEO Elon Musk says that he is “giving serious thought to” creating a new social media platform with free speech as a top priority. “Given that Twitter serves as the de facto public t… [+3211 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Lois Beckett, Samantha Lock",
      title:
        "Russia-Ukraine war: what we know on day 33 of the Russian invasion - The Guardian",
      description:
        "Macron distances himself from Biden’s comments that Putin ‘cannot remain in power’; Russia and Ukraine to hold fresh talks on Monday",
      url: "https://amp.theguardian.com/world/2022/mar/28/russia-ukraine-war-what-we-know-on-day-33-of-the-russian-invasion",
      urlToImage:
        "https://i.guim.co.uk/img/media/3373442307c8cbbcbed4e284a672f00b9ec76d39/0_225_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=91f4c75b5f7b6a7330b3966fb960065e",
      publishedAt: "2022-03-28T00:23:00Z",
      content:
        "<li>US president Joe Bidenhas denied he is calling for regime change in Russia, after he said during a visit to Poland that Putin cannot remain in power. When asked by a reporter if he wanted to see … [+2995 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Amy McGorry",
      title:
        "Long COVID symptoms may depend on the variant a person contracted - Fox News",
      description:
        "Symptoms could be different in people who are infected with different variants, study suggests",
      url: "https://www.foxnews.com/health/long-covid-symptoms-may-depend-variant-individual-contracted",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/03/COVID-patient-2.jpg",
      publishedAt: "2022-03-27T23:37:47Z",
      content:
        "Different variants of SARS-CoV-2, the virus that causes COVID, may give rise to different long COVID symptoms, according to a study that will be presented atthe European Congress of Clinical Microbio… [+5107 chars]",
    },
    {
      source: {
        id: null,
        name: "MMA Mania",
      },
      author: "Adam Guillen Jr.",
      title:
        "UFC Columbus results: Matches to make for ‘Blaydes vs Daukaus’ main card winners - MMA Mania",
      description:
        "UFC Columbus Results: It’s time to look ahead to see what could be next for all of the main card winner’s from last night’s “Blaydes vs Daukaus” event on Columbus, Ohio.",
      url: "https://www.mmamania.com/2022/3/27/22998975/ufc-columbus-results-matches-make-curtis-blaydes-chris-daukaus-main-card-winners-espn-mma",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/SEmmM8Lc-h_BHh09TZH3Dt9l8jM=/0x0:5430x2843/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23349249/1387916654.jpg",
      publishedAt: "2022-03-27T23:12:34Z",
      content:
        "UFC Columbus provided fight fans with an exciting night of fights last Saturday night (Sat., March 26, 2022) inside Nationwide Arena in Columbus, Ohio, which featured a Heavyweight fight between Curt… [+4341 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Amy B Wang, Brady Dennis",
      title:
        "Amy Klobuchar and Cory Booker call on Clarence Thomas to recuse himself after wife Ginni Thomas's texts emerge - The Washington Post",
      description:
        "Two Democratic members of the Senate Judiciary Committee called on the Supreme Court justice to recuse himself from election-related cases after text messages from his wife, Ginni Thomas, emerged showing she had pushed the Trump White House to try to overturn…",
      url: "https://www.washingtonpost.com/politics/2022/03/27/clarence-ginni-thomas-supreme-court-texts/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/X6IVJXN6NZBQXNW43LWNAN3VAU.jpg&w=1440",
      publishedAt: "2022-03-27T21:47:41Z",
      content:
        "Sen. Amy Klobuchar (D-Minn.), a member of the Senate Judiciary Committee, which has oversight of federal judicial and Supreme Court nominees, called the situation a textbook case in which Thomas shou… [+5824 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "2nd COVID booster may be approved for adults 50+ - PIX11 News",
      description:
        "The Biden administration will be giving elderly Americans a second COVID-19 booster shot, multiple people familiar with the plan told The New York Times.",
      url: "https://www.youtube.com/watch?v=I-w-vnv0Ims",
      urlToImage: "https://i.ytimg.com/vi/I-w-vnv0Ims/hqdefault.jpg",
      publishedAt: "2022-03-27T21:24:03Z",
      content: null,
    },
  ];

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0

    }; document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsPoint `;

  }

  async updateNews() {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&key=${this.props.key}&apiKey=fbdb6916499944a18441734fdd407700&pageSize=20`;
    this.props.setProgress(10);
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(parsedData);
    
    this.setState({
      articles: parsedData.articles,
      loading: false,
      page: 1,
      totalResults: parsedData.totalResults
    });
    this.props.setProgress(100);
    
  } 


  async componentDidMount() {

    this.setState({
      page: 1
    }); this.updateNews();
  }


  /*handlePrevClick=async()=>{
    this.setState({
      page: this.state.page - 1,
                  
    }); this.updateNews();
  }*/


  /* handleNextClick=async()=>{
      this.setState({
                    page: this.state.page + 1,
      });  this.updateNews();
     console.log("next")}
     */

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&key=${this.props.key}&apiKey=fbdb6916499944a18441734fdd407700&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      totalResults: parsedData.totalResults
    });
  }

    ;



  render() {
    return (
      <>

        <h2 className="text-center my-3">NewsPoint-Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>


        <div className="text-center">
          {this.state.loading && <div className="spinner-border" role="status" ></div>}
        </div>


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.results}
          loader={<div className="text-center">{this.state.loading && <div className="spinner-border" role="status"></div>}</div>}
        >
         
         
         
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>

                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageurl={element.urlToImage}
                      newsUrl={element.url}
                      Author={element.author}
                      date={element.publishedAt}
                    />
                  </div>

                );
              })}
            </div>
          </div>
       
       
       
        </InfiniteScroll>



      </>
    );

  }
}
