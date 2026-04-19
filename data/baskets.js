// data/baskets.js — all gear baskets
window.BASKETS_DATA = [
  {
    id: 'b1',
    num: '01',
    topPick: true,
    ribbon: '⭐ TOP PICK — Best All-Round Setup · Video + Studio + Nature',
    tags: ['studio','travel','pro','sony'],
    totalINR: 268000,
    totalClass: 'green',
    thumbs: [
      { icon: '💡', brand: 'Godox ×2', name: 'SL100D LED' },
      { icon: '📷', brand: 'Sony', name: 'a6700 Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🔍', brand: 'Sony', name: '18-135mm OSS' },
      { icon: '🎬', brand: 'DJI', name: 'RS 3 Mini' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '💡 Studio Lights',
        icon: '💡', lbl: 'Godox SL100D ×2\n+ 90cm Octa Softbox',
        name: '2× Godox SL100D LED', badge: 'Video-First',
        priceINR: 28000,
        specs: ['<strong>100W daylight continuous LED</strong> — photo AND video, no sync needed','CRI 96+ — fabric colours rendered accurately','Bowens mount 90cm Octa Softbox ×2','Dimmer 0–100%, quiet fan'],
        tags: [{t:'Continuous video',c:'pro'},{t:'Bowens mount',c:'pro'},{t:'No sync issues',c:'pro'},{t:'Less power than strobe',c:'con'}]
      },
      {
        cat: '📷 Camera',
        icon: '📷', lbl: 'Sony Alpha a6700\nAPS-C Mirrorless',
        name: 'Sony a6700 Body Only', badge: 'Best APS-C',
        priceINR: 121000,
        specs: ['<strong>4K 120fps 10-bit 4:2:2</strong> — beats iPhone 16 Pro technically','6K oversampled → 4K','S-Log3 + LUT import — full grade workflow','<strong>5-axis IBIS</strong> + AI subject recognition','EVF + fully articulating screen'],
        tags: [{t:'Best video APS-C',c:'pro'},{t:'IBIS + AI AF',c:'pro'},{t:'S-Log3 ready',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🔭 Lens 1 — Studio',
            icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nDC DN | Sony E',
            name: 'Sigma 18-50mm f/2.8 DC DN',
            priceINR: 35000,
            specs: ['<strong>f/2.8 constant</strong> — bokeh on clothing close-ups','27–75mm equiv. — product + portrait range','Silent AF stepping motor for video','290g — gimbal-friendly'],
            tags: [{t:'f/2.8 constant',c:'pro'},{t:'Studio hero',c:'pro'},{t:'Primary lens',c:'info'}]
          },
          {
            cat: '🔍 Lens 2 — Travel & Nature',
            icon: '🔍', lbl: 'Sony E 18-135mm\nf/3.5-5.6 OSS',
            name: 'Sony 18-135mm f/3.5-5.6 OSS',
            priceINR: 35000,
            specs: ['<strong>202.5mm equiv. reach</strong> — nature, wildlife, travel','Built-in OSS optical stabilisation','Quiet AF linear motor — great for vlogging','325g · compact for a 7.5× zoom'],
            tags: [{t:'Nature reach',c:'pro'},{t:'Built-in OSS',c:'pro'},{t:'Travel hero',c:'info'}]
          }
        ]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎬 Gimbal',
            icon: '🎬', lbl: 'DJI RS 3 Mini\n3-Axis Stabiliser',
            name: 'DJI RS 3 Mini',
            priceINR: 26000,
            specs: ['<strong>2kg payload</strong> — handles a6700 + both lenses','Native vertical mode for Instagram Reels','1.4" OLED touchscreen','10hr battery · BT shutter'],
            tags: [{t:'Reels vertical',c:'pro'},{t:'DJI ecosystem',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB Extreme Pro V90',
            priceINR: 23000,
            specs: ['<strong>300MB/s write</strong> — handles 4K 120fps 10-bit','UHS-II V90 — required for heavy video codecs','512GB — shoots all day without swapping'],
            tags: [{t:'UHS-II V90',c:'pro'},{t:'a6700 compatible',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 28000 },
      { lbl: 'Camera', inr: 121000 },
      { lbl: 'Lenses', inr: 70000 },
      { lbl: 'Gimbal', inr: 26000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>⭐ Why this is #1:</strong> The Sigma 18-50mm f/2.8 is your studio workhorse — bokeh, sharpness, silent AF. The Sony 18-135mm reaches 202mm for travel and nature. Godox SL100D LEDs shoot video without sync hassle. The a6700's 6K-oversampled 4K with S-Log3 will destroy iPhone footage after grading. SanDisk 512GB V90 ensures zero dropped frames. Covers every use case under ₹2.7L.'
  },

  {
    id: 'b2',
    num: '02',
    topPick: false,
    tags: ['studio','pro','sony'],
    totalINR: 271000,
    totalClass: 'amber',
    thumbs: [
      { icon: '⚡', brand: 'Godox', name: 'SK400II-V Kit ×2' },
      { icon: '📷', brand: 'Sony', name: 'a6700 + 18-135mm' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🎬', brand: 'DJI', name: 'RS 3 Mini' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '⚡ Studio Lights',
        icon: '⚡', lbl: 'Godox SK400II-V\n400Ws Strobe ×2',
        name: 'Godox SK400II-V 2-Light Kit', badge: null,
        priceINR: 38000,
        specs: ['<strong>400Ws strobe</strong> — freezes all motion on fabric embroidery','2.4G wireless X system','5700K daylight, Bowens mount','Max power for outdoor fill or harsh sunlight override'],
        tags: [{t:'Max freeze motion',c:'pro'},{t:'400Ws power',c:'pro'},{t:'Photo only (no video)',c:'con'}]
      },
      {
        cat: '📷 Camera + Kit Lens',
        icon: '📷', lbl: 'Sony a6700\n+ 18-135mm Kit',
        name: 'Sony a6700 + 18-135mm Kit', badge: null,
        priceINR: 146000,
        specs: ['4K 120fps 10-bit S-Log3 S-Cinetone','6K oversampled 4K 5-axis IBIS','18-135mm travel lens included in kit'],
        tags: [{t:'Best video APS-C',c:'pro'},{t:'IBIS built-in',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🔍 Lens 1 (in kit)',
            icon: '🔍', lbl: 'Sony 18-135mm OSS\n(included in kit)',
            name: 'Sony 18-135mm f/3.5-5.6 OSS',
            priceINR: 0,
            specs: ['202.5mm equiv. reach for nature','Built-in OSS stabilisation'],
            tags: [{t:'All-rounder',c:'info'}]
          },
          {
            cat: '🔭 Lens 2 (add-on)',
            icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\n(separate buy)',
            name: 'Sigma 18-50mm f/2.8',
            priceINR: 35000,
            specs: ['f/2.8 constant for studio bokeh','Swap to this for product shoots'],
            tags: [{t:'Studio upgrade',c:'pro'}]
          }
        ]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎬 Gimbal',
            icon: '🎬', lbl: 'DJI RS 3 Mini\n3-Axis Stabiliser',
            name: 'DJI RS 3 Mini',
            priceINR: 26000,
            specs: ['2kg payload handles full kit','Vertical Reels mode OLED screen'],
            tags: [{t:'Reels vertical',c:'pro'},{t:'DJI ecosystem',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['<strong>300MB/s</strong> — handles heavy RAW bursts without buffer choke','UHS-II V90 rated'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 38000 },
      { lbl: 'Cam+Lens Kit', inr: 146000 },
      { lbl: 'Sigma Lens', inr: 35000 },
      { lbl: 'Gimbal', inr: 26000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>Verdict:</strong> Strobe kit gives maximum photo quality for clothing — embroidery frozen perfectly. Both lenses covered (18-135mm in kit, Sigma f/2.8 as add-on). V90 card handles heavy RAW buffer without choking.'
  },

  {
    id: 'b3',
    num: '03',
    topPick: false,
    tags: ['studio','travel','fuji'],
    totalINR: 292000,
    totalClass: 'amber',
    thumbs: [
      { icon: '💡', brand: 'Godox ×2', name: 'SL100D LED' },
      { icon: '🎞️', brand: 'Fujifilm', name: 'X-S20 + 16-50mm' },
      { icon: '🔍', brand: 'Fujifilm', name: 'XF 18-120mm PZ' },
      { icon: '🎬', brand: 'DJI', name: 'RS 3 Mini' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '💡 Studio Lights',
        icon: '💡', lbl: 'Godox SL100D ×2\n+ 90cm Octa Softbox',
        name: '2× Godox SL100D LED',
        priceINR: 28000,
        specs: ['100W continuous LED 5600K CRI 96+','Video seamless no flash sync needed'],
        tags: [{t:'Video + photo',c:'pro'},{t:'Bowens mount',c:'pro'}]
      },
      {
        cat: '🎞️ Camera',
        icon: '🎞️', lbl: 'Fujifilm X-S20\n+ 16-50mm f/2.8',
        name: 'Fujifilm X-S20 + 16-50mm f/2.8', badge: 'Best Colors',
        priceINR: 157000,
        specs: ['<strong>Film Simulations</strong> — Classic Chrome, Velvia, Eterna — unique look','6.2K → 4K 10-bit F-Log2 for LUT grading','5-axis IBIS EVF included','f/2.8 kit lens = gorgeous product bokeh'],
        tags: [{t:'Iconic Fuji colors',c:'pro'},{t:'f/2.8 lens in kit',c:'pro'},{t:'EVF + IBIS',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🔭 Lens 1 (in kit)',
            icon: '🔭', lbl: 'Fujifilm XC 16-50mm\n(kit lens)',
            name: 'Fujifilm XC 16-50mm f/2.8-4.8',
            priceINR: 0,
            specs: ['Wide-angle to standard range','Studio vlogging product'],
            tags: [{t:'Studio + vlog',c:'info'}]
          },
          {
            cat: '🔍 Lens 2 — Nature',
            icon: '🔍', lbl: 'Fujifilm XF 18-120mm\nf/4 Power Zoom',
            name: 'Fujifilm XF 18-120mm f/4 PZ',
            priceINR: 65000,
            specs: ['<strong>27–183mm equiv.</strong> — nature, travel, wildlife','Power zoom — smooth cinematic zoom pulls on video','Constant f/4 optical stabilisation'],
            tags: [{t:'Power zoom',c:'pro'},{t:'Budget stretch',c:'con'}]
          }
        ]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎬 Gimbal',
            icon: '🎬', lbl: 'DJI RS 3 Mini\n3-Axis Stabiliser',
            name: 'DJI RS 3 Mini',
            priceINR: 26000,
            specs: ['Handles X-S20 + 16-50mm well','Vertical Reels mode 10hr battery'],
            tags: [{t:'Reels ready',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['<strong>300MB/s</strong> — required for Fuji All-Intra heavy video formats'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 28000 },
      { lbl: 'Cam+Lens Kit', inr: 157000 },
      { lbl: 'XF Zoom', inr: 65000 },
      { lbl: 'Gimbal', inr: 26000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>Verdict:</strong> If Fujifilm Film Simulation look is your brand identity, this basket delivers it. XF 18-120mm Power Zoom covers nature with cinematic zoom pulls. Slightly over ₹2.5L — skip XF lens initially to fit strict budget.'
  },

  {
    id: 'b4',
    num: '04',
    topPick: false,
    tags: ['studio','travel','sony'],
    totalINR: 263000,
    totalClass: 'green',
    thumbs: [
      { icon: '🌡️', brand: 'Neewer ×2', name: '200W Bi-Color' },
      { icon: '📷', brand: 'Sony', name: 'a6700 Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🔍', brand: 'Sony', name: '18-135mm OSS' },
      { icon: '🤖', brand: 'Hohem', name: 'iSteady MT2' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '🌡️ Studio Lights',
        icon: '🌡️', lbl: 'Neewer 200W Bi-Color ×2\n2700K–6500K',
        name: '2× Neewer 200W Bi-Color LED',
        priceINR: 24000,
        specs: ['<strong>Bi-color 2700K–6500K</strong> — match any lighting condition','CRI 95+ dimmer remote control','Most affordable continuous option'],
        tags: [{t:'Bi-color versatile',c:'pro'},{t:'Budget-friendly',c:'pro'},{t:'Less power vs Godox',c:'con'}]
      },
      {
        cat: '📷 Camera',
        icon: '📷', lbl: 'Sony Alpha a6700\nAPS-C Mirrorless',
        name: 'Sony a6700 Body Only',
        priceINR: 121000,
        specs: ['4K 120fps 10-bit 4:2:2 S-Log3 LUT import','5-axis IBIS AI tracking AF'],
        tags: [{t:'Cinema-grade APS-C',c:'pro'},{t:'S-Cinetone SOOC',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🔭 Lens 1 — Studio',
            icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nDC DN | Sony E',
            name: 'Sigma 18-50mm f/2.8',
            priceINR: 35000,
            specs: ['f/2.8 constant bokeh for products','Super sharp silent AF for video'],
            tags: [{t:'Primary studio lens',c:'pro'}]
          },
          {
            cat: '🔍 Lens 2 — Travel',
            icon: '🔍', lbl: 'Sony 18-135mm OSS\nTravel Zoom',
            name: 'Sony 18-135mm f/3.5 OSS',
            priceINR: 35000,
            specs: ['202mm equiv. nature reach','Built-in OSS for handheld travel'],
            tags: [{t:'Travel + nature',c:'pro'}]
          }
        ]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🤖 Gimbal',
            icon: '🤖', lbl: 'Hohem iSteady MT2\nAI Vision Tracking',
            name: 'Hohem iSteady MT2 Kit', badge: 'AI Tracking',
            priceINR: 25000,
            specs: ['<strong>AI Vision tracking</strong> — tracks subject automatically','17-hour battery life','1.2kg payload works with Sigma 18-50mm'],
            tags: [{t:'AI auto-tracking',c:'pro'},{t:'17hr battery',c:'pro'},{t:'1.2kg max',c:'con'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['300MB/s write handles all video modes','512GB — all-day solo shooting'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 24000 },
      { lbl: 'Camera', inr: 121000 },
      { lbl: 'Lenses', inr: 70000 },
      { lbl: 'Gimbal AI', inr: 25000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>Verdict:</strong> Same dual-lens combo as Basket 1 but bi-color lights and Hohem AI gimbal. The MT2 tracks you automatically — ideal for solo creators. Bi-color matches golden-hour warmth or cool studio look. All within ₹2.6L.'
  },

  {
    id: 'b5',
    num: '05',
    topPick: false,
    tags: ['studio','travel','budget','sony'],
    totalINR: 226000,
    totalClass: 'green',
    thumbs: [
      { icon: '💡', brand: 'Godox ×2', name: 'SL100D LED' },
      { icon: '🎥', brand: 'Sony', name: 'ZV-E10 II Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🔍', brand: 'Sony', name: '18-135mm OSS' },
      { icon: '🎯', brand: 'Zhiyun', name: 'Weebill 3' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '💡 Studio Lights',
        icon: '💡', lbl: 'Godox SL100D ×2\n+ 90cm Octa Softbox',
        name: '2× Godox SL100D LED',
        priceINR: 28000,
        specs: ['100W continuous 5600K CRI 96+','Bowens mount — upgrade modifiers anytime','Video + photo seamless workflow'],
        tags: [{t:'Continuous video',c:'pro'},{t:'Upgradeable',c:'pro'}]
      },
      {
        cat: '🎥 Camera',
        icon: '🎥', lbl: 'Sony ZV-E10 II\nVlog Camera',
        name: 'Sony ZV-E10 II Body Only', badge: 'Budget Smart',
        priceINR: 75000,
        specs: ['Same 26MP sensor as a6700','<strong>4K 60fps 10-bit 4:2:2</strong> S-Log3 + LUT import','6K oversampled 4K — same visual quality','S-Cinetone natural point-click colors','No IBIS — gimbal compensates','~₹46K cheaper than a6700'],
        tags: [{t:'Same sensor',c:'pro'},{t:'10-bit video',c:'pro'},{t:'No IBIS',c:'con'},{t:'No EVF',c:'con'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🔭 Lens 1 — Studio',
            icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nDC DN | Sony E',
            name: 'Sigma 18-50mm f/2.8',
            priceINR: 35000,
            specs: ['f/2.8 constant — beautiful product bokeh','290g gimbal-friendly'],
            tags: [{t:'Studio hero',c:'pro'}]
          },
          {
            cat: '🔍 Lens 2 — Travel',
            icon: '🔍', lbl: 'Sony 18-135mm OSS\nTravel Zoom',
            name: 'Sony 18-135mm f/3.5 OSS',
            priceINR: 35000,
            specs: ['202mm reach OSS stabilisation','All-in-one travel zoom'],
            tags: [{t:'Best travel zoom',c:'pro'}]
          }
        ]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎯 Gimbal',
            icon: '🎯', lbl: 'Zhiyun Weebill 3\n3kg Payload',
            name: 'Zhiyun Weebill 3',
            priceINR: 30000,
            specs: ['<strong>3kg payload</strong> — future-proof for heavier lenses','Built-in fill light + mic mount','PD fast charge offline controls'],
            tags: [{t:'3kg payload',c:'pro'},{t:'Built-in light',c:'pro'},{t:'Future-proof',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['300MB/s — handles ZV-E10 II 10-bit internal video','512GB capacity'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 28000 },
      { lbl: 'Camera', inr: 75000 },
      { lbl: 'Lenses', inr: 70000 },
      { lbl: 'Gimbal', inr: 30000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>Verdict:</strong> Saves ₹46K vs Basket 1 with identical video quality — same sensor! Full dual-lens setup plus Weebill 3 and 512GB V90 storage. Best lens coverage per rupee under ₹2.3L. Trade-off: no IBIS, no EVF.'
  },

  {
    id: 'b6',
    num: '06',
    topPick: false,
    tags: ['studio','pro','sony'],
    totalINR: 236000,
    totalClass: 'green',
    thumbs: [
      { icon: '💡', brand: 'Godox ×2', name: 'SL100D LED' },
      { icon: '📷', brand: 'Sony', name: 'a6700 Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🎬', brand: 'DJI', name: 'RS 3 Mini' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '💡 Studio Lights',
        icon: '💡', lbl: 'Godox SL100D ×2\n+ 90cm Octa Softbox',
        name: '2× Godox SL100D LED + Octas',
        priceINR: 28000,
        specs: ['100W continuous CRI 96+ Bowens mount','Video + photo seamless'],
        tags: [{t:'Continuous video',c:'pro'},{t:'Bowens mount',c:'pro'}]
      },
      {
        cat: '📷 Camera',
        icon: '📷', lbl: 'Sony Alpha a6700\nAPS-C Mirrorless',
        name: 'Sony a6700 Body Only', badge: 'Pro Hybrid',
        priceINR: 121000,
        specs: ['4K 120fps 10-bit S-Log3 LUT import','5-axis IBIS AI AF'],
        tags: [{t:'Best video APS-C',c:'pro'}]
      },
      {
        cat: '🔭 Studio Lens Only',
        icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nDC DN | Sony E',
        name: 'Sigma 18-50mm f/2.8 DC DN',
        priceINR: 35000,
        specs: ['<strong>f/2.8 constant</strong> — stunning bokeh for intricate embroidery','Silent stepping motor — smooth video pulls','290g extremely lightweight'],
        tags: [{t:'f/2.8 constant',c:'pro'},{t:'Dedicated studio',c:'pro'},{t:'No travel zoom',c:'con'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎬 Gimbal',
            icon: '🎬', lbl: 'DJI RS 3 Mini\n3-Axis Stabiliser',
            name: 'DJI RS 3 Mini',
            priceINR: 26000,
            specs: ['2kg payload OLED touchscreen','Vertical Reels mode BT shutter'],
            tags: [{t:'Reels vertical',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['<strong>300MB/s</strong> required for a6700 demanding codecs','512GB all day shooting'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 28000 },
      { lbl: 'Camera', inr: 121000 },
      { lbl: 'Sigma Lens', inr: 35000 },
      { lbl: 'Gimbal', inr: 26000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>⭐ Studio Purist:</strong> Drops the travel zoom to focus entirely on indoor professional shoots. Highest-end APS-C body, sharpest studio lens, ultra-fast V90 storage. Saves ₹35K vs Basket 1 with zero compromise on studio quality.'
  },

  {
    id: 'b7',
    num: '07',
    topPick: false,
    tags: ['studio','budget','fuji'],
    totalINR: 235000,
    totalClass: 'green',
    thumbs: [
      { icon: '💡', brand: 'Godox ×2', name: 'SL100D LED' },
      { icon: '🎞️', brand: 'Fujifilm', name: 'X-S20 Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🎬', brand: 'DJI', name: 'RS 3 Mini' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '💡 Studio Lights',
        icon: '💡', lbl: 'Godox SL100D ×2\n+ 90cm Octa Softbox',
        name: '2× Godox SL100D LED',
        priceINR: 28000,
        specs: ['100W continuous 5600K CRI 96+'],
        tags: [{t:'Video + photo',c:'pro'}]
      },
      {
        cat: '🎞️ Camera',
        icon: '🎞️', lbl: 'Fujifilm X-S20\nBody Only',
        name: 'Fujifilm X-S20 Body Only', badge: 'Color Science',
        priceINR: 115000,
        specs: ['Film Simulations — gorgeous SOOC color','6.2K → 4K 10-bit F-Log2','5-axis IBIS EVF'],
        tags: [{t:'Iconic Fuji colors',c:'pro'},{t:'IBIS + EVF',c:'pro'}]
      },
      {
        cat: '🔭 Studio Lens',
        icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nX-Mount Version',
        name: 'Sigma 18-50mm f/2.8 (X-Mount)',
        priceINR: 40000,
        specs: ['f/2.8 constant for Fuji — beautiful renders deep reds and golds','Silent AF stepping motor'],
        tags: [{t:'f/2.8 constant',c:'pro'},{t:'Fuji color synergy',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎬 Gimbal',
            icon: '🎬', lbl: 'DJI RS 3 Mini\n3-Axis Stabiliser',
            name: 'DJI RS 3 Mini',
            priceINR: 26000,
            specs: ['Handles X-S20 well','Vertical Reels mode'],
            tags: [{t:'Reels ready',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['Handles Fuji All-Intra heavy formats','300MB/s write'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 28000 },
      { lbl: 'Camera', inr: 115000 },
      { lbl: 'Sigma Lens', inr: 40000 },
      { lbl: 'Gimbal', inr: 26000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>Verdict:</strong> Fuji gorgeous color science + Sigma sharpness, backed by V90 storage. Renders deep reds and golds beautifully without color grading. Great for fashion creators wanting signature aesthetic straight out of camera.'
  },

  {
    id: 'b8',
    num: '08',
    topPick: false,
    tags: ['studio','budget','sony'],
    totalINR: 172000,
    totalClass: 'green',
    thumbs: [
      { icon: '💡', brand: 'Godox ×2', name: 'SL60IID LED' },
      { icon: '🎥', brand: 'Sony', name: 'ZV-E10 II Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🎯', brand: 'Zhiyun', name: 'Crane M2S' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '💡 Studio Lights',
        icon: '💡', lbl: 'Godox SL60IID ×2\nSoftboxes Included',
        name: '2× Godox SL60IID + Softboxes',
        priceINR: 18000,
        specs: ['60W continuous LED — excellent for close-up clothing setups','CRI 95+ Bowens mount'],
        tags: [{t:'Budget lights',c:'pro'},{t:'CRI 95+',c:'pro'}]
      },
      {
        cat: '🎥 Camera',
        icon: '🎥', lbl: 'Sony ZV-E10 II\nVlog Camera',
        name: 'Sony ZV-E10 II Body', badge: '10-Bit Video',
        priceINR: 75000,
        specs: ['Same sensor as a6700 4K 10-bit','S-Log3 + LUT import — pro grade workflow'],
        tags: [{t:'10-bit video',c:'pro'},{t:'Budget body',c:'pro'}]
      },
      {
        cat: '🔭 The Single Lens',
        icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nDC DN | Sony E',
        name: 'Sigma 18-50mm f/2.8',
        priceINR: 35000,
        specs: ['f/2.8 constant bokeh','Best value studio lens on the market'],
        tags: [{t:'f/2.8 constant',c:'pro'},{t:'Studio only',c:'info'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎯 Gimbal',
            icon: '🎯', lbl: 'Zhiyun Crane M2S\nCompact Gimbal',
            name: 'Zhiyun Crane M2S',
            priceINR: 18000,
            specs: ['Lightweight compact gimbal','Works perfectly with ZV-E10 II + Sigma 18-50mm'],
            tags: [{t:'Compact',c:'pro'},{t:'Budget friendly',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['<strong>300MB/s</strong> required for ZV-E10 II 10-bit internal video'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 18000 },
      { lbl: 'Camera', inr: 75000 },
      { lbl: 'Sigma Lens', inr: 35000 },
      { lbl: 'Gimbal', inr: 18000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>⭐ Compact Studio Video King:</strong> Professional 10-bit color grading + massive V90 storage at an accessible price. Perfect for beginners who want pro results without blowing budget. Under ₹1.75L.'
  },

  {
    id: 'b9',
    num: '09',
    topPick: false,
    tags: ['studio','budget'],
    totalINR: 169000,
    totalClass: 'green',
    thumbs: [
      { icon: '💡', brand: 'Godox ×2', name: 'SL60IID LED' },
      { icon: '🎥', brand: 'Canon', name: 'EOS R50 Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8 RF' },
      { icon: '🤖', brand: 'Hohem', name: 'iSteady MT2' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '💡 Studio Lights',
        icon: '💡', lbl: 'Godox SL60IID ×2\nSoftboxes Included',
        name: '2× Godox SL60IID + Softboxes',
        priceINR: 18000,
        specs: ['60W continuous LED for close-up clothing setups'],
        tags: [{t:'Budget lights',c:'pro'},{t:'CRI 95+',c:'pro'}]
      },
      {
        cat: '🎥 Camera',
        icon: '🎥', lbl: 'Canon EOS R50\nBeginner Mirrorless',
        name: 'Canon EOS R50 Body', badge: 'AF King',
        priceINR: 55000,
        specs: ['<strong>Dual Pixel CMOS AF II</strong> — most reliable video autofocus available','4K 30fps · 1080p 60fps','Lightest RF camera — perfect for solo'],
        tags: [{t:'Legendary AF',c:'pro'},{t:'Lightest body',c:'pro'},{t:'4K cropped',c:'con'}]
      },
      {
        cat: '🔭 The Single Lens',
        icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nRF-S Mount',
        name: 'Sigma 18-50mm f/2.8 RF-S Mount',
        priceINR: 45000,
        specs: ['f/2.8 constant for Canon RF system','Beautiful bokeh on Canon R50'],
        tags: [{t:'f/2.8 constant',c:'pro'},{t:'RF-S native',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🤖 Gimbal',
            icon: '🤖', lbl: 'Hohem iSteady MT2\nAI Vision Tracking',
            name: 'Hohem iSteady MT2 Kit',
            priceINR: 25000,
            specs: ['AI Vision tracking — follows you hands-free','17hr battery — full day solo shooting'],
            tags: [{t:'AI auto-track',c:'pro'},{t:'17hr battery',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['V90 future-proofs storage — zero lag guaranteed'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 18000 },
      { lbl: 'Camera', inr: 55000 },
      { lbl: 'Sigma Lens', inr: 45000 },
      { lbl: 'Gimbal AI', inr: 25000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>Verdict:</strong> Canon legendary Dual Pixel AF locks onto subjects effortlessly as models showcase outfits. AI tracking gimbal makes solo work effortless. The most beginner-friendly combination. Under ₹1.7L.'
  },

  {
    id: 'b10',
    num: '10',
    topPick: false,
    tags: ['travel','pro','sony'],
    totalINR: 248000,
    totalClass: 'amber',
    thumbs: [
      { icon: '🌡️', brand: 'Godox', name: 'ML30Bi LED Panel' },
      { icon: '📷', brand: 'Sony', name: 'a6700 Body' },
      { icon: '🔍', brand: 'Sony', name: '70-350mm G Tele' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🎬', brand: 'DJI', name: 'RS 3 Mini' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '🌡️ On-Camera Light',
        icon: '🌡️', lbl: 'Godox ML30Bi\nBi-Color LED Panel',
        name: 'Godox ML30Bi LED Panel',
        priceINR: 8000,
        specs: ['Portable bi-color on-camera panel','Travel-friendly — fits in bag','Powers from USB-C or AA batteries'],
        tags: [{t:'Travel portable',c:'pro'},{t:'Bi-color',c:'pro'}]
      },
      {
        cat: '📷 Camera',
        icon: '📷', lbl: 'Sony Alpha a6700\nAPS-C Mirrorless',
        name: 'Sony a6700 Body Only',
        priceINR: 121000,
        specs: ['4K 120fps 10-bit 5-axis IBIS','Best APS-C for travel wildlife'],
        tags: [{t:'Best video APS-C',c:'pro'},{t:'IBIS + AI AF',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🔍 Tele Lens — Nature',
            icon: '🔍', lbl: 'Sony E 70-350mm\nf/4.5-6.3 G OSS',
            name: 'Sony E 70-350mm f/4.5-6.3 G OSS',
            priceINR: 65000,
            specs: ['<strong>525mm equiv. reach</strong> — serious wildlife photography','G-series quality OSS built-in','Fast quiet AF for birds in flight'],
            tags: [{t:'Wildlife reach',c:'pro'},{t:'G-series quality',c:'pro'}]
          },
          {
            cat: '🔭 Wide — Studio & Street',
            icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nDC DN | Sony E',
            name: 'Sigma 18-50mm f/2.8',
            priceINR: 35000,
            specs: ['f/2.8 studio and street photography','290g gimbal-friendly'],
            tags: [{t:'Studio + street',c:'pro'}]
          }
        ]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎬 Gimbal',
            icon: '🎬', lbl: 'DJI RS 3 Mini\n3-Axis Stabiliser',
            name: 'DJI RS 3 Mini',
            priceINR: 26000,
            specs: ['2kg payload for a6700 + Sigma combo','Vertical Reels mode OLED'],
            tags: [{t:'Reels vertical',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['300MB/s handles 4K 120fps bursts','512GB for long travel days'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 8000 },
      { lbl: 'Camera', inr: 121000 },
      { lbl: 'Lenses', inr: 100000 },
      { lbl: 'Gimbal', inr: 26000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>⭐ Travel Wildlife Specialist:</strong> Sony 70-350mm G reaches 525mm equivalent — serious wildlife. Sigma 18-50mm covers wide street and studio work. Portable on-camera panel for outdoor fill. Purpose-built for travel + nature creators.'
  },

  {
    id: 'b11',
    num: '11',
    topPick: false,
    tags: ['budget','sony'],
    totalINR: 183000,
    totalClass: 'green',
    thumbs: [
      { icon: '💡', brand: 'Godox ×2', name: 'SL60IID LED' },
      { icon: '🎥', brand: 'Sony', name: 'ZV-E10 II Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🤖', brand: 'Hohem', name: 'iSteady MT2' },
      { icon: '💾', brand: 'SanDisk', name: '512GB Extreme Pro' },
    ],
    columns: [
      {
        cat: '💡 Studio Lights',
        icon: '💡', lbl: 'Godox SL60IID ×2\n60W Continuous',
        name: '2× Godox SL60IID + Softboxes',
        priceINR: 18000,
        specs: ['60W continuous LED — great for close-up product work','CRI 95+ Bowens mount'],
        tags: [{t:'Budget lights',c:'pro'},{t:'CRI 95+',c:'pro'}]
      },
      {
        cat: '🎥 Camera',
        icon: '🎥', lbl: 'Sony ZV-E10 II\nVlog Camera',
        name: 'Sony ZV-E10 II Body Only',
        priceINR: 75000,
        specs: ['4K 60fps 10-bit S-Log3','Same sensor as a6700 — identical image quality'],
        tags: [{t:'Same sensor as a6700',c:'pro'},{t:'10-bit video',c:'pro'}]
      },
      {
        cat: '🔭 Studio Lens',
        icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nDC DN | Sony E',
        name: 'Sigma 18-50mm f/2.8',
        priceINR: 35000,
        specs: ['f/2.8 constant — studio bokeh','Best single-lens choice for studio'],
        tags: [{t:'f/2.8 constant',c:'pro'},{t:'Studio hero',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🤖 AI Gimbal',
            icon: '🤖', lbl: 'Hohem iSteady MT2\nAI Vision Tracking',
            name: 'Hohem iSteady MT2',
            priceINR: 25000,
            specs: ['AI tracking — perfect for solo creators','Tracks face and body automatically'],
            tags: [{t:'AI auto-track',c:'pro'},{t:'Solo shooter',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro UHS-I',
            name: 'SanDisk 512GB Extreme Pro UHS-I',
            priceINR: 8000,
            specs: ['200MB/s — sufficient for ZV-E10 II at 4K 60fps','Most affordable fast card option'],
            tags: [{t:'UHS-I V30',c:'pro'},{t:'Best value',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Lights', inr: 18000 },
      { lbl: 'Camera', inr: 75000 },
      { lbl: 'Sigma Lens', inr: 35000 },
      { lbl: 'Gimbal AI', inr: 25000 },
      { lbl: '512GB SD', inr: 8000 }
    ],
    verdict: '<strong>⭐ Solo Creator Special:</strong> ZV-E10 II identical video to a6700, AI tracking gimbal for hands-free solo work, and budget SanDisk 512GB UHS-I (adequate for 4K 60fps). Best all-solo setup under ₹1.85L.'
  },

  {
    id: 'b12',
    num: '12',
    topPick: false,
    tags: ['studio','travel','pro','sony'],
    totalINR: 285000,
    totalClass: 'amber',
    thumbs: [
      { icon: '⚡', brand: 'Godox', name: 'AD100Pro Flash' },
      { icon: '📷', brand: 'Sony', name: 'a6700 Body' },
      { icon: '🔭', brand: 'Sigma', name: '18-50mm f/2.8' },
      { icon: '🔍', brand: 'Sony', name: '70-350mm G OSS' },
      { icon: '🎬', brand: 'DJI', name: 'RS 3 Mini' },
      { icon: '💾', brand: 'SanDisk', name: '512GB V90' },
    ],
    columns: [
      {
        cat: '⚡ Portable Flash',
        icon: '⚡', lbl: 'Godox AD100Pro\nPortable Flash ×2',
        name: '2× Godox AD100Pro Portable Flash',
        priceINR: 30000,
        specs: ['<strong>100Ws battery-powered portable flash</strong> — studio anywhere','Works on location + outdoors','2.4G wireless control X system'],
        tags: [{t:'Location flash',c:'pro'},{t:'Battery powered',c:'pro'},{t:'Not for video',c:'con'}]
      },
      {
        cat: '📷 Camera',
        icon: '📷', lbl: 'Sony Alpha a6700\nAPS-C Mirrorless',
        name: 'Sony a6700 Body Only',
        priceINR: 121000,
        specs: ['4K 120fps 10-bit 5-axis IBIS','Best APS-C for hybrid studio+outdoor'],
        tags: [{t:'Best video APS-C',c:'pro'},{t:'Hybrid king',c:'pro'}]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🔭 Lens 1 — Studio',
            icon: '🔭', lbl: 'Sigma 18-50mm f/2.8\nDC DN | Sony E',
            name: 'Sigma 18-50mm f/2.8',
            priceINR: 35000,
            specs: ['f/2.8 constant studio bokeh','290g gimbal friendly'],
            tags: [{t:'f/2.8 constant',c:'pro'},{t:'Studio hero',c:'pro'}]
          },
          {
            cat: '🔍 Lens 2 — Wildlife',
            icon: '🔍', lbl: 'Sony E 70-350mm\nf/4.5-6.3 G OSS',
            name: 'Sony E 70-350mm G OSS',
            priceINR: 65000,
            specs: ['525mm equiv. — serious wildlife reach','G-series quality OSS built-in'],
            tags: [{t:'525mm equiv.',c:'pro'},{t:'G-series',c:'pro'}]
          }
        ]
      },
      {
        type: 'lens-pair',
        lenses: [
          {
            cat: '🎬 Gimbal',
            icon: '🎬', lbl: 'DJI RS 3 Mini\n3-Axis Stabiliser',
            name: 'DJI RS 3 Mini',
            priceINR: 26000,
            specs: ['2kg payload OLED screen','Vertical Reels mode'],
            tags: [{t:'Reels vertical',c:'pro'}]
          },
          {
            cat: '💾 Storage',
            icon: '💾', lbl: 'SanDisk 512GB\nExtreme Pro V90',
            name: 'SanDisk 512GB V90',
            priceINR: 23000,
            specs: ['300MB/s handles all a6700 video modes'],
            tags: [{t:'UHS-II V90',c:'pro'}]
          }
        ]
      }
    ],
    budgetRow: [
      { lbl: 'Portable Flash', inr: 30000 },
      { lbl: 'Camera', inr: 121000 },
      { lbl: 'Lenses', inr: 100000 },
      { lbl: 'Gimbal', inr: 26000 },
      { lbl: '512GB V90', inr: 23000 }
    ],
    verdict: '<strong>⭐ Hybrid Location Master:</strong> Battery-powered Godox AD100Pro flashes work on-location and outdoors — not tied to studio. Sony 70-350mm G gives serious wildlife reach. Dual-lens setup covers everything from studio portraits to outdoor wildlife.'
  }
];

window.GUIDE_DATA = [
  { icon: '🏆', title: 'Best overall — video + studio + nature, all in one', desc: '→ <strong>Basket 1</strong> — Sony a6700 + Dual Lenses + Godox SL100D LED. Covers every use case.', link: '#b1' },
  { icon: '🧵', title: 'Pure Studio Focus — Dedicated clothing and detail setup', desc: '→ <strong>Basket 6</strong> — Sony a6700 + Sigma 18-50mm f/2.8. Max focus on high-end studio video.', link: '#b6' },
  { icon: '🦋', title: 'Wildlife & Nature Specialist — Maximum telephoto reach', desc: '→ <strong>Basket 10</strong> — Sony a6700 + Sony 70-350mm G + Sigma 18-50mm. 525mm equivalent reach.', link: '#b10' },
  { icon: '💰', title: 'Best Video Setup Under ₹1.75 Lakhs', desc: '→ <strong>Basket 8</strong> — Sony ZV-E10 II + Sigma 18-50mm. Professional 10-bit on a tight budget.', link: '#b8' },
  { icon: '🎯', title: 'Budget Solo Shooter — Under ₹1.7L with Auto-Tracking AF', desc: '→ <strong>Basket 9</strong> — Canon R50 + Sigma 18-50mm (RF). Legendary autofocus + AI tracking gimbal.', link: '#b9' },
  { icon: '🎨', title: 'Unique signature look — Fujifilm Film Simulation aesthetic', desc: '→ <strong>Basket 3</strong> or <strong>Basket 7</strong> — Fujifilm setups for distinct gorgeous SOOC color.', link: '#b3' },
  { icon: '📸', title: 'Maximum studio photo quality (freeze motion shots)', desc: '→ <strong>Basket 2</strong> — Godox SK400II-V strobes freeze embroidery perfectly.', link: '#b2' },
  { icon: '🤖', title: 'AI Auto-Tracking for Solo Creators', desc: '→ <strong>Basket 11</strong> — ZV-E10 II + Hohem MT2 AI gimbal. Tracks you automatically without crew.', link: '#b11' },
  { icon: '✈️', title: 'Travel + Location Shooter — Studio anywhere', desc: '→ <strong>Basket 12</strong> — Battery-powered flashes + Sony a6700 + dual lenses. Not tied to studio.', link: '#b12' },
];
