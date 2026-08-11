// Typed brokers data used by the app

export type Instrument = {
  name: string
  rebate?: number
  rebateText?: string
}

export type BrokerType = 'auto' | 'manual' | 'volume'

export type Broker = {
  name: string
  type: BrokerType
  ibLink?: string
  registerOptions?: {
    name: string
    url: string
  }[]
  domain: string
  instruments: Instrument[]
}

export const brokers: Broker[] = [

  // =========================
  // DATA SESUAI SCREENSHOT
  // =========================

{
  name: "TMGM",
  type: "manual",
  registerOptions: [
    {
      name: "STANDARD",
      url: "https://portal.tmgm-tmc.com/register?node=MzUyNjY3&language=en"
    },
    {
      name: "CENT",
      url: "https://portal.tmgm-tmc.com/register?node=MzUyNjA4&language=en"
    }
  ],
  domain: "tmgm.com",
  instruments: [
    { name: "EUR/USD", rebate: 5 },
    { name: "XAU/USD", rebate: 18 },
    { name: "CRYPTO", rebate: 1 }
  ]
},

  {
    name: "Valetax",
    type: "manual",
    ibLink: "https://ma.valetax-indonesia.com/p/5808172",
    domain: "valetax.com",
    instruments: [
      { name: "eurUsd", rebate: 11 },
      { name: "xauUsd", rebate: 16 },
      { name: "crypto", rebate: 13 }
    ]
  },

    {
    name: "Exness",
    type: "auto",
    ibLink: "https://one.exnessonelink.com/boarding/sign-up/a/fxpayout?lng=id",
    domain: "exness.com",
    instruments: [
      { name: "xauUsd", rebate: 11.23 },
      { name: "forex", rebate: 3.99 },
      { name: "crypto", rebate: 7.2 }
    ]
  },

  {
    name: "PU Prime",
    type: "manual",
    ibLink: "https://puvip.co/la-partners/id/0bGTzP0i",
    domain: "puprime.com",
    instruments: [
      { name: "eurUsd", rebate: 6.5 },
      { name: "xauUsd", rebate: 9.5 },
      { name: "crypto", rebate: 5.2 }
    ]
  },

  {
    name: "ZFX",
    type: "manual",
    ibLink: "https://my.zm-area.com/reg/truely?agentnumber=Z940752S4",
    domain: "zfx.com",
    instruments: [
      { name: "eurUsd", rebate: 8 },
      { name: "xauUsd", rebate: 13 },
      { name: "crypto", rebate: 8 }
    ]
  },

  {
    name: "HFM",
    type: "auto",
    ibLink: "https://register.hfmtrade-ind.com/sv/en/new-live-account/?refid=30494425",
    domain: "hfm.com",
    instruments: [
      { name: "eurUsd", rebate: 3.2 },
      { name: "xauUsd", rebate: 9 },
      { name: "crypto", rebate: 0.8 }
    ]
  },

  {
    name: "FBS",
    type: "manual",
    ibLink: "https://fbs.partners/?ibl=569605&ibp=17852638",
    domain: "fbs.com",
    instruments: [
      { name: "eurUsd", rebate: 3.61 },
      { name: "xauUsd", rebate: 10 },
      { name: "crypto", rebate: 2.5 }
    ]
  },

  {
    name: "Elev8",
    type: "manual",
    ibLink: "https://clickto.trade/bJLCLmX8zDZ?ib=47807098",
    domain: "eleveightmarkets.net/",
    instruments: [
      { name: "eurUsd", rebate: 8 },
      { name: "xauUsd", rebate: 8 },
      { name: "crypto", rebate: 8 }
    ]
  },

  {
    name: "XM",
    type: "auto",
    ibLink: "https://affs.click/4gFt7",
    domain: "xm.com",
    instruments: [
      { name: "EUR/USD", rebate: 9 },
      { name: "XAU/USD", rebate: 15 },
      { name: "CRYPTO", rebate: 25 }
    ]
  },
  
  {
    name: "VT Markets",
    type: "manual",
    ibLink: "https://www.vtmarkets.com/trade-now/?affid=22395035",
    domain: "vtmarkets.com",
    instruments: [
      { name: "EUR/USD", rebate: 7 },
      { name: "XAU/USD", rebate: 11 },
      { name: "CRYPTO", rebate: 6 }
    ]
  },

  {
  name: "Ultima Markets",
  type: "manual",
  ibLink: "https://ultgo.com/la-com/id/LPtmn9kq",
  domain: "ultimamarkets.com",
  instruments: [
    { name: "EUR/USD", rebate: 11 },
    { name: "XAU/USD", rebate: 12 },
    { name: "CRYPTO", rebate: 6 }
  ]
},

  {
    name: "Tickmill",
    type: "manual",
    ibLink: "https://secure.itr-tickmill.com/?utm_campaign=ib_link&utm_content=IB89045395&utm_medium=Open+Account&utm_source=link&lp=https%3A%2F%2Fsecure.itr-tickmill.com%2Fid%2Fsign-up%2F",
    domain: "tickmill.com",
    instruments: [
      { name: "EUR/USD", rebate: 8 },
      { name: "XAU/USD", rebate: 8 },
      { name: "AUD/USD", rebate: 0.8 }
    ]
  },

  {
    name: "Pepperstone",
    type: "manual",
    ibLink: "https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=42191",
    domain: "pepperstone.com",
    instruments: [
      { name: "EUR/USD", rebate: 2.4 },
      { name: "XAU/USD", rebate: 2.4 },
      { name: "CRYPTO", rebate: 2.4 }
    ]
  },

  {
    name: "FP Markets",
    type: "manual",
    ibLink: "https://portal.fpmarkets.com/register?redir=stv&fpm-affiliate-utm-source=IB&fpm-affiliate-agt=64952",
    domain: "fpmarkets.com",
    instruments: [
      { name: "EUR/USD", rebate: 4.4 },
      { name: "XAU/USD", rebate: 4.4 },
      { name: "CRYPTO", rebate: 4.4 }
    ]
  },

  {
    name: "Vantage",
    type: "manual",
    ibLink: "https://www.vantagemarketsea.com/id/open-live-account/?affid=MjA3OTY2Mzk=",
    domain: "vantagemarketsea.com",
    instruments: [
      { name: "EUR/USD", rebate: 7.2 },
      { name: "XAU/USD", rebate: 10.4 },
      { name: "AUD/USD", rebate: 1.6 }
    ]
  },

{
  name: "IC Markets",
  type: "manual",
  ibLink: "https://icmarkets.com/?camp=90586",
  domain: "icmarkets.com",
  instruments: [
    { name: "EUR/USD", rebate: 7 },
    { name: "XAU/USD", rebate: 10 },
    { name: "CRYPTO", rebate: 6 }
  ]
},

  {
    name: "Axi",
    type: "manual",
    ibLink: "https://www.axi.com/int/live-account?promocode=4736053",
    domain: "axi.com",
    instruments: [
      { name: "EUR/USD", rebate: 4.5 },
      { name: "XAU/USD", rebate: 6 },
      { name: "AUD/USD", rebate: 4 }
    ]
  },

  {
    name: "Finex",
    type: "manual",
    ibLink: "https://track.finex.co.id/click?pid=5759&offer_id=12",
    domain: "finex.co.id",
    instruments: [
      { name: "EUR/USD", rebate: 3 },
      { name: "XAU/USD", rebate: 5 },
      { name: "AUD/USD", rebate: 3 }
    ]
  },
 
  {
    name: "Deriv",
    type: "volume",
    ibLink: "https://t.deriv.link?t=CH9N2Q7ARXR5",
    domain: "deriv.com",
    instruments: [
      { name: "forex", rebateText: "upTo40TradingFee" },
      { name: "gold", rebateText: "volumeCommission" },
      { name: "crypto", rebateText: "volumeCommission" }
    ]
  },

  // =========================
  // YANG TIDAK ADA DI GAMBAR (ISI RANDOM)
  // =========================

  {
    name: "EC Markets",
    type: "manual",
    ibLink: "https://i.ecmarkets.sc/api/client/pm/2/JTX4W",
    domain: "ecmarkets.com",
    instruments: [
      { name: "EUR/USD", rebate: 10 },
      { name: "XAU/USD", rebate: 15 },
      { name: "CRYPTO", rebate: 10 }
    ]
  },

  {
    name: "Headway",
    type: "auto",
    ibLink: "https://headway.partners/user/signup?hwp=8435da",
    domain: "headway.com",
    instruments: [
      { name: "EUR/USD", rebate: 3 },
      { name: "XAU/USD", rebate: 3 },
      { name: "CRYPTO", rebate: 2 }
    ]
  },

{
    name: "Markets4you",
    type: "manual",
    ibLink: "https://account.markets4you.online/en/user-registration/?affid=tvborws",
    domain: "markets4you.com",
    instruments: [
      { name: "EUR/USD", rebate: 3 },
      { name: "XAU/USD", rebate: 3 },
      { name: "CRYPTO", rebate: 3 }
    ]
  },

  {
    name: "OANDA",
    type: "manual",
    ibLink: "https://go.oanda.com/visit/?bta=39193&brand=oanda",
    domain: "oanda.com",
    instruments: [
      { name: "eurUsd", rebateText: "spreadRevshare" },
      { name: "xauUsd", rebateText: "spreadRevshare" },
      { name: "crypto", rebateText: "spreadRevshare" }
    ]
  },

 {
    name: "JustMarkets",
    type: "manual",
    ibLink: "https://one.justmarkets.link/a/tp7yd30m8b",
    domain: "justmarkets.com",
    instruments: [
      { name: "EUR/USD", rebate: 3 },
      { name: "XAU/USD", rebate: 7 },
      { name: "CRYPTO", rebate: 4 }
    ]
  },

  {
    name: "FxPro",
    type: "manual",
    ibLink: "https://direct-fxpro.com/en/partner/2iFzxC9Pf",
    domain: "fxpro.com",
    instruments: [
      { name: "EUR/USD", rebate: 5 },
      { name: "XAU/USD", rebate: 8 },
      { name: "CRYPTO", rebate: 4 }
    ]
  },

  {
    name: "AvaTrade",
    type: "manual",
    ibLink: "https://www.avatrade.com?tag=219594",
    domain: "avatrade.com",
    instruments: [
      { name: "eurUsd", rebate: 5 },
      { name: "xauUsd", rebate: 17 },
      { name: "crypto", rebate: 4 }
    ]
  },

     {
    name: "CXM",
    type: "manual",
    ibLink: "https://secure.cxmid.com/links/go/346478",
    domain: "cxm.com",
    instruments: [
      { name: "EUR/USD", rebate: 3 },
      { name: "XAU/USD", rebate: 7 },
      { name: "CRYPTO", rebate: 2 }
    ]
  },


{
    name: "MIFX",
    type: "manual",
    ibLink: "https://mifx.com/live/r/fxpayout",
    domain: "mifx.com",
    instruments: [
      { name: "EUR/USD", rebate: 3 },
      { name: "XAU/USD", rebate: 3 },
      { name: "CRYPTO", rebate: 3 }
    ]
  },

  {
    name: "HSB",
    type: "manual",
    ibLink: "https://www.hsb.co.id/register?ref_code=QYLW0W-AW2SP",
    domain: "hsb.co.id",
    instruments: [
      { name: "EUR/USD", rebate: 3 },
      { name: "XAU/USD", rebate: 3 },
      { name: "CRYPTO", rebate: 3 }
    ]
  }




]

export default brokers
