import streamlit as st
from st_wordcloud import st_wordcloud


words = [
  {
    "text": "goeiedag",
    "value": 492
  },
  {
    "text": "mir\u00eb dita",
    "value": 32
  },
  {
    "text": "gu\u00e0tertag",
    "value": 797
  },
  {
    "text": "dana esteline",
    "value": 788
  },
  {
    "text": "\u0635\u0628\u0627\u062d \u0627\u0644\u062e\u064a\u0631 ",
    "value": 722
  },
  {
    "text": " salam ",
    "value": 854
  },
  {
    "text": " sab\u00e2hu al khair",
    "value": 682
  },
  {
    "text": "chlomo",
    "value": 345
  },
  {
    "text": "barev",
    "value": 297
  },
  {
    "text": "servus",
    "value": 650
  },
  {
    "text": "salam",
    "value": 519
  },
  {
    "text": "ani sogomen",
    "value": 938
  },
  {
    "text": "me sha'she",
    "value": 757
  },
  {
    "text": "n'dja ar\u00e8 ",
    "value": 608
  },
  {
    "text": " m\u00f4 ar\u00e8",
    "value": 645
  },
  {
    "text": "egunon",
    "value": 851
  },
  {
    "text": "meny\u00e9ga",
    "value": 479
  },
  {
    "text": "vitaju",
    "value": 773
  },
  {
    "text": "namaskar",
    "value": 560
  },
  {
    "text": "ass-iyessbh\u00e8ne ",
    "value": 16
  },
  {
    "text": " ass ameggaz ",
    "value": 847
  },
  {
    "text": " azul",
    "value": 496
  },
  {
    "text": "(KANURI) inda wadou",
    "value": 855
  },
  {
    "text": "ayo",
    "value": 140
  }
]
st_wordcloud(words, width=800, height=600)
