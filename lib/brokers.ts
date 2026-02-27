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
  ibLink: string
  domain: string
  instruments: Instrument[]
}

export const brokers: Broker[] = [

  // =========================
  // DATA SESUAI SCREENSHOT
  // =========================

  {
    name: "Exness",
    type: "auto",
    ibLink: "https://one.exnessonelink.com/a/8cegzmlbpk",
    domain: "exness.com",
    instruments: [
      { name: "XAU/USD", rebate: 11.23 },
      { name: "FOREX", rebate: 3.99 },
      { name: "CRYPTO", rebate: 7.2 }
    ]
  },

  {
    name: "Valetax",
    type: "manual",
    ibLink: "https://ma.valetax-indonesia.com/p/5808172",
    domain: "valetax.com",
    instruments: [
      { name: "EUR/USD", rebate: 11 },
      { name: "XAU/USD", rebate: 16 },
      { name: "CRYPTO", rebate: 13 }
    ]
  },

  {
    name: "ZFX",
    type: "manual",
    ibLink: "https://my.zm-area.com/reg/truely?agentnumber=Z940752S4",
    domain: "zfx.com",
    instruments: [
      { name: "EUR/USD", rebate: 8 },
      { name: "XAU/USD", rebate: 13 },
      { name: "CRYPTO", rebate: 8 }
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
    name: "HFM",
    type: "auto",
    ibLink: "https://register.hfmtrade-ind.com/sv/en/new-live-account/?refid=30494425",
    domain: "hfm.com",
    instruments: [
      { name: "EUR/USD", rebate: 3.2 },
      { name: "XAU/USD", rebate: 9 },
      { name: "CRYPTO", rebate: 0.8 }
    ]
  },

  {
    name: "FBS",
    type: "manual",
    ibLink: "https://fbs.partners/?ibl=569605&ibp=17852638",
    domain: "fbs.com",
    instruments: [
      { name: "EUR/USD", rebate: 3.61 },
      { name: "XAU/USD", rebate: 10 },
      { name: "CRYPTO", rebate: 2.5 }
    ]
  },

  {
    name: "OctaFX/Elev8",
    type: "manual",
    ibLink: "https://octa.click/bJLCLmX8zDZ?ib=47807098",
    domain: "octafx.com",
    instruments: [
      { name: "EUR/USD", rebate: 8 },
      { name: "XAU/USD", rebate: 8 },
      { name: "CRYPTO", rebate: 8 }
    ]
  },

  {
    name: "Tickmill",
    type: "auto",
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
    type: "auto",
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
    type: "auto",
    ibLink: "https://www.vantagemarketsea.com/id/open-live-account/?affid=MjA3OTY2Mzk=",
    domain: "vantagemarketsea.com",
    instruments: [
      { name: "EUR/USD", rebate: 7.2 },
      { name: "XAU/USD", rebate: 10.4 },
      { name: "AUD/USD", rebate: 1.6 }
    ]
  },

  {
    name: "Axi",
    type: "auto",
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
    ibLink: "https://deriv.partners/rx?sidc=07DDC1C5-AE63-4FC9-A23D-C6DA444F9225&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU279711",
    domain: "deriv.com",
    instruments: [
      { name: "Forex", rebateText: "Up to 40% Trading Fee" },
      { name: "Gold", rebateText: "Volume Commission" },
      { name: "Crypto", rebateText: "Volume Commission" }
    ]
  },

  // =========================
  // YANG TIDAK ADA DI GAMBAR (ISI RANDOM)
  // =========================

  {
    name: "PU Prime",
    type: "auto",
    ibLink: "https://puvip.co/la-partners/id/0bGTzP0i",
    domain: "puprime.com",
    instruments: [
      { name: "EUR/USD", rebate: 6.5 },
      { name: "XAU/USD", rebate: 9.5 },
      { name: "CRYPTO", rebate: 5.2 }
    ]
  },

  {
    name: "VT Markets",
    type: "auto",
    ibLink: "https://www.vtmarkets.com/trade-now/?affid=22395035",
    domain: "vtmarkets.com",
    instruments: [
      { name: "EUR/USD", rebate: 7 },
      { name: "XAU/USD", rebate: 11 },
      { name: "CRYPTO", rebate: 6 }
    ]
  },

  {
    name: "EC Markets",
    type: "auto",
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
    type: "manual",
    ibLink: "https://headway.partners/user/signup?hwp=8435da",
    domain: "headway.com",
    instruments: [
      { name: "EUR/USD", rebate: 3 },
      { name: "XAU/USD", rebate: 3 },
      { name: "CRYPTO", rebate: 2 }
    ]
  },

  {
    name: "OANDA",
    type: "manual",
    ibLink: "https://go.oanda.com/visit/?bta=39193&brand=oanda",
    domain: "oanda.com",
    instruments: [
      { name: "EUR/USD", rebateText: "30% Spread Revshare" },
      { name: "XAU/USD", rebateText: "30% Spread Revshare" },
      { name: "CRYPTO", rebateText: "30% Spread Revshare" }
    ]
  }

]

export default brokers
